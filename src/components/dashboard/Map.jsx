/* eslint-disable no-unused-vars */

import React, { useEffect, useRef, useState } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

// ============================================================
// MAP CONFIGURATION
// ============================================================
const DEFAULT_LOCATION = {
  lat: 7.850684,
  lng: 123.184855,
  name: "Default Location",
};

const MAP_ZOOM = 18;

const VALHALLA_URL = "https://valhalla1.openstreetmap.de/route";

const SATELLITE_URL =
  "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}";

const LABELS_URL =
  "https://server.arcgisonline.com/ArcGIS/rest/services/Reference/World_Transportation/MapServer/tile/{z}/{y}/{x}";

// ============================================================
// MAP ICONS
// ============================================================

const createIcon = (color) =>
  L.divIcon({
    className: "",
    html: `<div style="width:22px;height:22px;background:${color};border:3px solid white;border-radius:50%;box-shadow:0 2px 8px rgba(0,0,0,0.4);"></div>`,
    iconSize: [22, 22],
    iconAnchor: [11, 11],
  });

// ============================================================
// POLYLINE6 DECODER
// ============================================================

const decodePolyline6 = (encoded) => {
  let index = 0;
  let lat = 0;
  let lng = 0;
  const coordinates = [];

  while (index < encoded.length) {
    let result = 0;
    let shift = 0;
    let byte;

    do {
      byte = encoded.charCodeAt(index++) - 63;
      result |= (byte & 0x1f) << shift;
      shift += 5;
    } while (byte >= 0x20);

    const deltaLat = result & 1 ? ~(result >> 1) : result >> 1;
    lat += deltaLat;

    result = 0;
    shift = 0;

    do {
      byte = encoded.charCodeAt(index++) - 63;
      result |= (byte & 0x1f) << shift;
      shift += 5;
    } while (byte >= 0x20);

    const deltaLng = result & 1 ? ~(result >> 1) : result >> 1;
    lng += deltaLng;

    coordinates.push([lat / 1e6, lng / 1e6]);
  }

  return coordinates;
};

// ============================================================
// TIME FORMATTERS
// ============================================================

const formatArrivalTime = (durationSeconds) => {
  const arrival = new Date(Date.now() + durationSeconds * 1000);

  return arrival.toLocaleTimeString([], {
    hour: "numeric",
    minute: "2-digit",
  });
};

const formatDuration = (seconds) => {
  const totalMinutes = Math.ceil(seconds / 60);

  if (totalMinutes < 60) {
    return `${totalMinutes} min`;
  }

  const hours = Math.floor(totalMinutes / 60);
  const minutes = totalMinutes % 60;

  return minutes > 0 ? `${hours} hr ${minutes} min` : `${hours} hr`;
};

// ============================================================
// MAP COMPONENT
// ============================================================

function Map({ selectedPath = "default" }) {
  const mapContainerRef = useRef(null);
  const mapRef = useRef(null);

  const routeLayerRef = useRef(null);
  const destinationMarkerRef = useRef(null);
  const startMarkerRef = useRef(null);

  const activeStartRef = useRef(DEFAULT_LOCATION);
  const requestIdRef = useRef(0);

  const [routeInfo, setRouteInfo] = useState(null);
  const [loading, setLoading] = useState(false);
  const [locationLoading, setLocationLoading] = useState(false);
  const [error, setError] = useState("");

  const [startMode, setStartMode] = useState("default");
  const [startLabel, setStartLabel] = useState("Default Location");

  // ==========================================================
  // CLEAR ROUTE
  // ==========================================================

  const clearRoute = () => {
    const map = mapRef.current;

    requestIdRef.current++;

    if (map && routeLayerRef.current) {
      map.removeLayer(routeLayerRef.current);
      routeLayerRef.current = null;
    }

    if (map && destinationMarkerRef.current) {
      map.removeLayer(destinationMarkerRef.current);
      destinationMarkerRef.current = null;
    }

    setRouteInfo(null);
    setLoading(false);
    setError("");
  };

  // ==========================================================
  // UPDATE STARTING LOCATION
  // ==========================================================

  const updateStartingLocation = (location, mode, label) => {
    const map = mapRef.current;

    if (!map) return;

    clearRoute();

    activeStartRef.current = location;

    setStartMode(mode);
    setStartLabel(label);

    if (startMarkerRef.current) {
      startMarkerRef.current.setLatLng([location.lat, location.lng]);

      startMarkerRef.current.bindPopup(
        `<strong>${label}</strong><br/>Starting Location`,
      );
    }

    map.setView([location.lat, location.lng], MAP_ZOOM, { animate: false });
  };

  // ==========================================================
  // INITIALIZE MAP
  // ==========================================================

  useEffect(() => {
    if (!mapContainerRef.current || mapRef.current) return;

    const map = L.map(mapContainerRef.current, {
      center: [DEFAULT_LOCATION.lat, DEFAULT_LOCATION.lng],
      zoom: MAP_ZOOM,
      minZoom: MAP_ZOOM,
      maxZoom: MAP_ZOOM,
      zoomControl: false,
      scrollWheelZoom: false,
      doubleClickZoom: false,
      touchZoom: false,
      boxZoom: false,
      keyboard: false,

      tap: false,
    });

    mapRef.current = map;

    // ========================================================
    // SATELLITE IMAGERY
    // ========================================================

    L.tileLayer(SATELLITE_URL, {
      attribution:
        "Tiles &copy; Esri, Maxar, Earthstar Geographics, and the GIS User Community",
      maxZoom: 19,
    }).addTo(map);

    // ========================================================
    // ROAD LABELS
    // ========================================================

    L.tileLayer(LABELS_URL, {
      attribution: "Esri",
      maxZoom: 19,
      opacity: 0.9,
    }).addTo(map);

    // ========================================================
    // DEFAULT STARTING MARKER
    // ========================================================

    const startMarker = L.marker([DEFAULT_LOCATION.lat, DEFAULT_LOCATION.lng], {
      icon: createIcon("#2563eb"),
    }).addTo(map);

    startMarker
      .bindPopup(
        `<strong>${DEFAULT_LOCATION.name}</strong><br/>Starting Location`,
      )
      .openPopup();

    startMarkerRef.current = startMarker;

    // ========================================================
    // DESTINATION SELECTION AND WALKING ROUTE
    // ========================================================

    const handleMapClick = async (event) => {
      const destination = event.latlng;
      const startLocation = activeStartRef.current;
      const currentRequestId = ++requestIdRef.current;

      setLoading(true);
      setError("");
      setRouteInfo(null);

      // Remove previous route

      if (routeLayerRef.current) {
        map.removeLayer(routeLayerRef.current);
        routeLayerRef.current = null;
      }

      // Remove previous destination

      if (destinationMarkerRef.current) {
        map.removeLayer(destinationMarkerRef.current);
        destinationMarkerRef.current = null;
      }

      // Add destination marker

      const destinationMarker = L.marker([destination.lat, destination.lng], {
        icon: createIcon("#dc2626"),
      }).addTo(map);

      destinationMarker
        .bindPopup(
          `<strong>Destination</strong><br/>Latitude: ${destination.lat.toFixed(6)}<br/>Longitude: ${destination.lng.toFixed(6)}`,
        )
        .openPopup();

      destinationMarkerRef.current = destinationMarker;

      // ======================================================
      // VALHALLA WALKING ROUTING
      // ======================================================

      try {
        const requestBody = {
          locations: [
            {
              lat: startLocation.lat,
              lon: startLocation.lng,
            },
            {
              lat: destination.lat,
              lon: destination.lng,
            },
          ],
          costing: "pedestrian",
          units: "km",
          shape_format: "polyline6",
        };

        const response = await fetch(VALHALLA_URL, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(requestBody),
        });

        if (!response.ok) {
          throw new Error(
            "Unable to calculate walking directions. Please try again.",
          );
        }

        const data = await response.json();

        // Ignore outdated requests

        if (currentRequestId !== requestIdRef.current) return;

        if (!data.trip || !data.trip.legs || !data.trip.legs.length) {
          throw new Error("No available walking route to this destination.");
        }

        const summary = data.trip.summary;
        const encodedShape = data.trip.legs[0].shape;

        if (!summary || !encodedShape || typeof encodedShape !== "string") {
          throw new Error("The walking route response was incomplete.");
        }

        // Decode route coordinates

        const coordinates = decodePolyline6(encodedShape);

        if (!coordinates.length) {
          throw new Error("Unable to display the walking route.");
        }

        // Draw walking route

        const routeLayer = L.polyline(coordinates, {
          color: "#2563eb",
          weight: 6,
          opacity: 0.9,
          lineCap: "round",
          lineJoin: "round",
        }).addTo(map);

        routeLayerRef.current = routeLayer;

        // Keep map fixed at its current zoom and center

        const distance = Number(summary.length);
        const duration = Number(summary.time);

        if (!Number.isFinite(distance) || !Number.isFinite(duration)) {
          throw new Error(
            "Unable to calculate walking distance or arrival time.",
          );
        }

        // Show route information inside the map

        setRouteInfo({
          distance: distance.toFixed(2),
          durationText: formatDuration(duration),
          arrival: formatArrivalTime(duration),
        });
      } catch (err) {
        if (currentRequestId === requestIdRef.current) {
          setError(err.message || "Walking route calculation failed.");
        }
      } finally {
        if (currentRequestId === requestIdRef.current) {
          setLoading(false);
        }
      }
    };

    map.on("click", handleMapClick);

    // Fix Leaflet dimensions

    setTimeout(() => {
      map.invalidateSize();
    }, 100);

    // ========================================================
    // CLEANUP
    // ========================================================

    return () => {
      requestIdRef.current++;

      map.off("click", handleMapClick);
      map.remove();

      mapRef.current = null;
      routeLayerRef.current = null;
      destinationMarkerRef.current = null;
      startMarkerRef.current = null;
    };
  }, []);

  // ==========================================================
  // MY CURRENT LOCATION
  // ==========================================================

  const useCurrentLocation = () => {
    if (!navigator.geolocation) {
      setError("Your browser does not support location services.");
      return;
    }

    setLocationLoading(true);
    setError("");

    navigator.geolocation.getCurrentPosition(
      (position) => {
        const currentLocation = {
          lat: position.coords.latitude,
          lng: position.coords.longitude,
          name: "My Current Location",
        };

        updateStartingLocation(
          currentLocation,
          "current",
          "My Current Location",
        );

        setLocationLoading(false);
      },
      (err) => {
        let message = "Unable to get your current location.";

        if (err.code === 1) {
          message =
            "Location permission denied. Please allow location access in your browser.";
        } else if (err.code === 2) {
          message =
            "Your current location is unavailable. Please check your device GPS.";
        } else if (err.code === 3) {
          message = "Location request timed out. Please try again.";
        }

        setError(message);
        setLocationLoading(false);
      },
      {
        enableHighAccuracy: true,
        timeout: 15000,
        maximumAge: 0,
      },
    );
  };

  // ==========================================================
  // RETURN TO DEFAULT LOCATION
  // ==========================================================

  const useDefaultLocation = () => {
    updateStartingLocation(DEFAULT_LOCATION, "default", DEFAULT_LOCATION.name);
  };

  // ==========================================================
  // RESET MAP
  // ==========================================================

  const resetMap = () => {
    useDefaultLocation();
  };

  // ==========================================================
  // RENDER
  // ==========================================================

  return (
    <div className="w-full relative space-y-4">
      {/* HEADER */}

      <div className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <h2 className="text-base font-semibold text-gray-800">
            Satellite Location Map
          </h2>
          <p className="text-xs text-gray-500">
            Click anywhere on the map to select a walking destination.
          </p>
        </div>

        <button
          type="button"
          onClick={resetMap}
          className="px-4 py-2 text-sm font-medium bg-white border border-gray-200 rounded-lg shadow-sm hover:bg-gray-50 transition"
        >
          Reset Map
        </button>
      </div>

      {/* LOCATION SWITCHING */}

      <div className="flex flex-wrap items-center gap-2">
        <button
          type="button"
          onClick={useCurrentLocation}
          disabled={locationLoading}
          className={`px-4 py-2 rounded-lg text-sm font-medium border transition ${startMode === "current" ? "bg-blue-600 text-white border-blue-600" : "bg-white text-gray-700 border-gray-200 hover:bg-gray-50"} disabled:opacity-50 disabled:cursor-not-allowed`}
        >
          {locationLoading ? "Getting Location..." : "My Location"}
        </button>

        <button
          type="button"
          onClick={useDefaultLocation}
          disabled={locationLoading}
          className={`px-4 py-2 rounded-lg text-sm font-medium border transition ${startMode === "default" ? "bg-blue-600 text-white border-blue-600" : "bg-white text-gray-700 border-gray-200 hover:bg-gray-50"} disabled:opacity-50 disabled:cursor-not-allowed`}
        >
          Default Location
        </button>
      </div>

      {/* ACTIVE STARTING LOCATION */}

      <div className="flex items-center gap-2 p-3 bg-blue-50 border border-blue-100 rounded-lg">
        <span className="w-2.5 h-2.5 rounded-full bg-blue-600 shrink-0" />
        <div>
          <p className="text-xs text-gray-500">Route Starting Point</p>
          <p className="text-sm font-semibold text-blue-800">{startLabel}</p>
        </div>
      </div>

      {/* MAP CONTAINER */}

      <div className="relative w-full h-[500px] rounded-xl overflow-hidden border border-gray-200 shadow-sm z-0">
        <div ref={mapContainerRef} className="w-full h-full" />

        {/* LOADING INDICATOR */}

        {loading && (
          <div className="absolute top-4 left-1/2 -translate-x-1/2 z-[1000] bg-white px-4 py-2 rounded-lg shadow-md text-sm font-medium text-blue-600 whitespace-nowrap">
            Calculating walking route...
          </div>
        )}

        {/* ROUTE INFORMATION OVERLAY */}

        {routeInfo && !loading && (
          <div className="absolute bottom-3 left-3 right-3 z-[1000] pointer-events-auto w-fit">
            <div className="bg-white/95 backdrop-blur-md rounded-xl shadow-xl border border-gray-200 p-4">
              <div className="grid grid-cols-1 gap-3">
                <div className="p-3 bg-gray-50 rounded-lg">
                  <p className="text-xs text-gray-500 mb-1">Walking Distance</p>
                  <p className="text-xl font-bold text-gray-900">
                    {routeInfo.distance} km
                  </p>
                </div>

              </div>
            </div>
          </div>
        )}
      </div>

      {/* ERROR MESSAGE */}

      {error && (
        <div className="p-3 bg-red-50 border border-red-200 rounded-lg text-sm text-red-600">
          {error}
        </div>
      )}

      {/* MAP LEGEND */}

      <div className="flex flex-wrap items-center gap-5 text-xs text-gray-600">
        <div className="flex items-center gap-2">
          <span className="w-3 h-3 rounded-full bg-blue-600" />
          Starting Location
        </div>

        <div className="flex items-center gap-2">
          <span className="w-3 h-3 rounded-full bg-red-600" />
          Destination
        </div>

        <div className="flex items-center gap-2">
          <span className="w-6 h-1 rounded bg-blue-600" />
          Walking Route
        </div>
      </div>

      {/* COORDINATES */}

      <p className="text-xs text-gray-400">
        Starting coordinates: {activeStartRef.current.lat.toFixed(6)},{" "}
        {activeStartRef.current.lng.toFixed(6)}
      </p>
    </div>
  );
}

export default Map;
