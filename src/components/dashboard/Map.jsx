/* eslint-disable no-unused-vars */
import React, { useEffect, useRef, useState } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

// ============================================================
// MAP CONFIGURATION
// ============================================================

const DEFAULT_LOCATION = {
  lat: 7.850005,
  lng: 123.185847,
  name: "Default Location",
};

const OSRM_URL = "https://router.project-osrm.org/route/v1/driving";

// ============================================================
// MAP ICONS
// ============================================================

const createIcon = (color) =>
  L.divIcon({
    className: "",
    html: `
      <div style="
        width: 22px;
        height: 22px;
        background: ${color};
        border: 3px solid white;
        border-radius: 50%;
        box-shadow: 0 2px 8px rgba(0,0,0,0.4);
      "></div>
    `,
    iconSize: [22, 22],
    iconAnchor: [11, 11],
  });

// ============================================================
// TILE LAYERS
// ============================================================

const SATELLITE_URL =
  "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}";

const LABELS_URL =
  "https://server.arcgisonline.com/ArcGIS/rest/services/Reference/World_Transportation/MapServer/tile/{z}/{y}/{x}";

const STREET_URL = "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png";

// ============================================================
// MAP COMPONENT
// ============================================================

function Map({ selectedPath = "default" }) {
  const mapContainerRef = useRef(null);
  const mapRef = useRef(null);

  const routeLayerRef = useRef(null);
  const destinationMarkerRef = useRef(null);
  const requestIdRef = useRef(0);

  const layersRef = useRef({});

  const [routeInfo, setRouteInfo] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const [mapStyle, setMapStyle] = useState("satellite-labels");

  // ==========================================================
  // INITIALIZE MAP
  // ==========================================================

  useEffect(() => {
    if (!mapContainerRef.current || mapRef.current) return;

    const map = L.map(mapContainerRef.current, {
      center: [DEFAULT_LOCATION.lat, DEFAULT_LOCATION.lng],
      zoom: 19,
      minZoom: 19,
      maxZoom: 19,
      zoomControl: false,
      scrollWheelZoom: false,
      doubleClickZoom: false,
      touchZoom: false,
      boxZoom: false,
      keyboard: false,
      dragging: true,
    });

    mapRef.current = map;

    // ========================================================
    // SATELLITE LAYER
    // ========================================================

    const satelliteLayer = L.tileLayer(SATELLITE_URL, {
      attribution:
        "Tiles &copy; Esri, Maxar, Earthstar Geographics, and the GIS User Community",
      maxZoom: 19,
    });

    // ========================================================
    // ROAD LABELS LAYER
    // ========================================================

    const labelsLayer = L.tileLayer(LABELS_URL, {
      attribution: "Esri",
      maxZoom: 19,
      opacity: 0.9,
    });

    // ========================================================
    // STANDARD STREET MAP
    // ========================================================

    const streetLayer = L.tileLayer(STREET_URL, {
      attribution: "&copy; OpenStreetMap contributors",
      maxZoom: 19,
    });

    layersRef.current = {
      satellite: satelliteLayer,
      labels: labelsLayer,
      street: streetLayer,
    };

    // DEFAULT MAP STYLE

    satelliteLayer.addTo(map);
    labelsLayer.addTo(map);

    // ZOOM CONTROL

    L.control
      .zoom({
        position: "topright",
      })
      .addTo(map);

    // ========================================================
    // FIXED STARTING LOCATION
    // ========================================================

    const startMarker = L.marker([DEFAULT_LOCATION.lat, DEFAULT_LOCATION.lng], {
      icon: createIcon("#2563eb"),
    }).addTo(map);

    startMarker.bindPopup(`
      <strong>${DEFAULT_LOCATION.name}</strong><br/>
      Starting Location<br/>
      ${DEFAULT_LOCATION.lat}, ${DEFAULT_LOCATION.lng}
    `);

    startMarker.openPopup();

    // ========================================================
    // DESTINATION SELECTION
    // ========================================================

    const handleMapClick = async (event) => {
      const destination = event.latlng;
      const currentRequestId = ++requestIdRef.current;

      setLoading(true);
      setError("");
      setRouteInfo(null);

      // REMOVE PREVIOUS ROUTE

      if (routeLayerRef.current) {
        map.removeLayer(routeLayerRef.current);
        routeLayerRef.current = null;
      }

      // REMOVE PREVIOUS DESTINATION

      if (destinationMarkerRef.current) {
        map.removeLayer(destinationMarkerRef.current);
        destinationMarkerRef.current = null;
      }

      // ADD DESTINATION MARKER

      const destinationMarker = L.marker([destination.lat, destination.lng], {
        icon: createIcon("#dc2626"),
      }).addTo(map);

      destinationMarker
        .bindPopup(
          `
        <strong>Destination</strong><br/>
        Latitude: ${destination.lat.toFixed(6)}<br/>
        Longitude: ${destination.lng.toFixed(6)}
      `,
        )
        .openPopup();

      destinationMarkerRef.current = destinationMarker;

      // ======================================================
      // OSRM ROAD ROUTING
      // ======================================================

      try {
        const url =
          `${OSRM_URL}/` +
          `${DEFAULT_LOCATION.lng},${DEFAULT_LOCATION.lat};` +
          `${destination.lng},${destination.lat}` +
          "?overview=full&geometries=geojson";

        const response = await fetch(url);

        if (!response.ok) {
          throw new Error("Unable to calculate road route.");
        }

        const data = await response.json();

        // IGNORE OUTDATED REQUESTS

        if (currentRequestId !== requestIdRef.current) return;

        if (data.code !== "Ok" || !data.routes?.length) {
          throw new Error("No available road route to this destination.");
        }

        const route = data.routes[0];

        // CONVERT COORDINATES

        const coordinates = route.geometry.coordinates.map(([lng, lat]) => [
          lat,
          lng,
        ]);

        // DRAW ROUTE

        const routeLayer = L.polyline(coordinates, {
          color: "#2563eb",
          weight: 6,
          opacity: 0.9,
          lineCap: "round",
          lineJoin: "round",
        }).addTo(map);

        routeLayerRef.current = routeLayer;

        // FIT ROUTE TO MAP

        map.fitBounds(routeLayer.getBounds(), {
          padding: [60, 60],
        });

        // ROUTE DETAILS

        setRouteInfo({
          distance: (route.distance / 1000).toFixed(2),
          duration: Math.ceil(route.duration / 60),
        });
      } catch (err) {
        if (currentRequestId === requestIdRef.current) {
          setError(err.message || "Route calculation failed.");
        }
      } finally {
        if (currentRequestId === requestIdRef.current) {
          setLoading(false);
        }
      }
    };

    map.on("click", handleMapClick);

    // FIX LEAFLET DIMENSIONS

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
      layersRef.current = {};
    };
  }, []);

  // ==========================================================
  // MAP STYLE SWITCHING
  // ==========================================================

  useEffect(() => {
    const map = mapRef.current;
    const layers = layersRef.current;

    if (!map || !layers.satellite) return;

    // REMOVE ALL BASE LAYERS

    Object.values(layers).forEach((layer) => {
      if (map.hasLayer(layer)) {
        map.removeLayer(layer);
      }
    });

    // SATELLITE ONLY

    if (mapStyle === "satellite") {
      layers.satellite.addTo(map);
    }

    // SATELLITE WITH ROAD LABELS
    else if (mapStyle === "satellite-labels") {
      layers.satellite.addTo(map);
      layers.labels.addTo(map);
    }

    // STANDARD STREET MAP
    else if (mapStyle === "street") {
      layers.street.addTo(map);
    }
  }, [mapStyle]);

  // ==========================================================
  // RESET MAP
  // ==========================================================

  const resetMap = () => {
    const map = mapRef.current;

    if (!map) return;

    requestIdRef.current++;

    if (routeLayerRef.current) {
      map.removeLayer(routeLayerRef.current);
      routeLayerRef.current = null;
    }

    if (destinationMarkerRef.current) {
      map.removeLayer(destinationMarkerRef.current);
      destinationMarkerRef.current = null;
    }

    setRouteInfo(null);
    setError("");
    setLoading(false);

    map.setView([DEFAULT_LOCATION.lat, DEFAULT_LOCATION.lng], 18);
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
            Select a destination by clicking anywhere on the map.
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

      {/* MAP STYLE SELECTOR */}

      <div className="flex flex-wrap items-center gap-2">
        <button
          type="button"
          onClick={() => setMapStyle("satellite")}
          className={`px-3 py-2 rounded-lg text-xs font-medium border transition ${mapStyle === "satellite" ? "bg-blue-600 text-white border-blue-600" : "bg-white text-gray-600 border-gray-200 hover:bg-gray-50"}`}
        >
          Satellite
        </button>

        <button
          type="button"
          onClick={() => setMapStyle("satellite-labels")}
          className={`px-3 py-2 rounded-lg text-xs font-medium border transition ${mapStyle === "satellite-labels" ? "bg-blue-600 text-white border-blue-600" : "bg-white text-gray-600 border-gray-200 hover:bg-gray-50"}`}
        >
          Satellite + Labels
        </button>

        <button
          type="button"
          onClick={() => setMapStyle("street")}
          className={`px-3 py-2 rounded-lg text-xs font-medium border transition ${mapStyle === "street" ? "bg-blue-600 text-white border-blue-600" : "bg-white text-gray-600 border-gray-200 hover:bg-gray-50"}`}
        >
          Street Map
        </button>
      </div>

      {/* MAP CONTAINER */}

      <div className="relative w-full h-[500px] rounded-xl overflow-hidden border border-gray-200 shadow-sm z-0">
        <div ref={mapContainerRef} className="w-full h-full" />

        {loading && (
          <div className="absolute top-4 left-1/2 -translate-x-1/2 z-[1000] bg-white px-4 py-2 rounded-lg shadow-md text-sm font-medium text-blue-600">
            Calculating road route...
          </div>
        )}
      </div>

      {/* ROUTE INFORMATION */}

      {routeInfo && (
        <div className="grid grid-cols-2 gap-3">
          <div className="p-4 bg-white border border-gray-200 rounded-xl">
            <p className="text-xs text-gray-500">Total Distance</p>
            <p className="text-xl font-semibold text-gray-800">
              {routeInfo.distance} km
            </p>
          </div>

          <div className="p-4 bg-white border border-gray-200 rounded-xl">
            <p className="text-xs text-gray-500">Estimated Travel Time</p>
            <p className="text-xl font-semibold text-gray-800">
              {routeInfo.duration} minutes
            </p>
          </div>
        </div>
      )}

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
          Road Route
        </div>
      </div>

      {/* COORDINATES */}

      <p className="text-xs text-gray-400">
        Starting coordinates: {DEFAULT_LOCATION.lat}, {DEFAULT_LOCATION.lng}
      </p>
    </div>
  );
}

export default Map;
