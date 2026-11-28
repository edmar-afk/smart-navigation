import React, {
  useEffect,
  useMemo,
  useRef,
  useState,
  useCallback,
} from "react";
import L from "leaflet";
import {
  MapContainer,
  TileLayer,
  Marker,
  Polyline,
  Popup,
  useMap,
  useMapEvents,
} from "react-leaflet";

import "leaflet/dist/leaflet.css";

// WALKING PERSON GIF
import walkingPerson from "../../assets/images/walking-person.gif";

// ============================================================
// DESTINATION IMAGES
// ============================================================

import clinicImage from "../../assets/images/paths/school-clinic.jpg";
import registrarImage from "../../assets/images/paths/registrar.jpg";
import libraryImage from "../../assets/images/paths/library.jpg";
import bitImage from "../../assets/images/paths/bit-program-chair.jpg";
import cadlabImage from "../../assets/images/paths/bit-program-chair.jpg";
import canteenImage from "../../assets/images/paths/canteen.jpg";
import ch3Image from "../../assets/images/paths/ch.jpg";
import ch4567Image from "../../assets/images/paths/ch.jpg";
import disasterImage from "../../assets/images/paths/ch.jpg";
import drawingRoomImage from "../../assets/images/paths/ch.jpg";
import facultyRoomImage from "../../assets/images/paths/facultyroom.jpg";
import guidanceImage from "../../assets/images/paths/mis-office.jpg";
import hrodImage from "../../assets/images/paths/ch.jpg";
import lab1Image from "../../assets/images/paths/whole.jpg";
import lab2Image from "../../assets/images/paths/whole.jpg";
import misImage from "../../assets/images/paths/mis-office.jpg";
import qaoImage from "../../assets/images/paths/qao.jpg";

// ============================================================
// DEFAULT MAP LOCATION
// ============================================================

const DEFAULT_LOCATION = {
  lat: 7.850736,
  lng: 123.184834,
  name: "Default Location",
};

// ============================================================
// CAMPUS DESTINATIONS
// ============================================================

const CAMPUS_DESTINATIONS = {
  clinic: {
    label: "School Clinic",
    image: clinicImage,
    lat: 7.850664,
    lng: 123.185643,
  },
  registrar: {
    label: "Registrar",
    image: registrarImage,
    lat: 7.850632,
    lng: 123.185637,
  },
  library: {
    label: "Library",
    image: libraryImage,
    lat: 7.850334,
    lng: 123.185637,
  },
  bit: {
    label: "BIT Program Office",
    image: bitImage,
    lat: 7.849457,
    lng: 123.186329,
  },
  cadlab: {
    label: "CAD Laboratory",
    image: cadlabImage,
    lat: 7.849548,
    lng: 123.186329,
  },
  canteen: {
    label: "Canteen",
    image: canteenImage,
    lat: 7.85052,
    lng: 123.185079,
  },
  ch3: {
    label: "CH Building 3",
    image: ch3Image,
    lat: 7.849287,
    lng: 123.186308,
  },
  ch4567: {
    label: "CH Buildings 4, 5, 6, and 7",
    image: ch4567Image,
    lat: 7.849564,
    lng: 123.18605,
  },
  disaster: {
    label: "Disaster Management Office",
    image: disasterImage,
    lat: 7.85009,
    lng: 123.185616,
  },
  drawingRoom: {
    label: "Drawing Room",
    image: drawingRoomImage,
    lat: 7.849325,
    lng: 123.18632,
  },
  facultyRoom: {
    label: "Faculty Room",
    image: facultyRoomImage,
    lat: 7.849619,
    lng: 123.186329,
  },
  guidance: {
    label: "Guidance Office",
    image: guidanceImage,
    lat: 7.850725,
    lng: 123.185621,
  },
  hrod: {
    label: "Human Resource Office",
    image: hrodImage,
    lat: 7.850664,
    lng: 123.185643,
  },
  lab1: {
    label: "Laboratory 1",
    image: lab1Image,
    lat: 7.850389,
    lng: 123.185643,
  },
  lab2: {
    label: "Laboratory 2",
    image: lab2Image,
    lat: 7.850427,
    lng: 123.185632,
  },
  mis: {
    label: "Management Information System",
    image: misImage,
    lat: 7.85049,
    lng: 123.185637,
  },
  qao: {
    label: "Quality Assurance Office",
    image: qaoImage,
    lat: 7.849752,
    lng: 123.186324,
  },
};

// ============================================================
// POLYLINE 6 DECODER
// ============================================================

function decodePolyline6(encoded) {
  if (!encoded) return [];

  const coordinates = [];
  let index = 0;
  let lat = 0;
  let lng = 0;

  while (index < encoded.length) {
    let result = 0;
    let shift = 0;
    let byte;

    do {
      byte = encoded.charCodeAt(index++) - 63;
      result |= (byte & 0x1f) << shift;
      shift += 5;
    } while (byte >= 0x20 && index < encoded.length);

    const deltaLat = result & 1 ? ~(result >> 1) : result >> 1;
    lat += deltaLat;

    result = 0;
    shift = 0;

    do {
      byte = encoded.charCodeAt(index++) - 63;
      result |= (byte & 0x1f) << shift;
      shift += 5;
    } while (byte >= 0x20 && index < encoded.length);

    const deltaLng = result & 1 ? ~(result >> 1) : result >> 1;
    lng += deltaLng;

    coordinates.push([lat / 1000000, lng / 1000000]);
  }

  return coordinates;
}

// ============================================================
// DISTANCE CALCULATION
// ============================================================

function calculateDistance(pointA, pointB) {
  const earthRadius = 6371000;

  const lat1 = (pointA.lat * Math.PI) / 180;
  const lat2 = (pointB.lat * Math.PI) / 180;

  const deltaLat = ((pointB.lat - pointA.lat) * Math.PI) / 180;
  const deltaLng = ((pointB.lng - pointA.lng) * Math.PI) / 180;

  const a =
    Math.sin(deltaLat / 2) ** 2 +
    Math.cos(lat1) * Math.cos(lat2) * Math.sin(deltaLng / 2) ** 2;

  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

  return earthRadius * c;
}

// ============================================================
// FORMAT WALKING DISTANCE
// ============================================================

function formatDistance(distanceKm) {
  if (distanceKm < 1) {
    return `${Math.round(distanceKm * 1000)} m`;
  }

  return `${distanceKm.toFixed(2)} km`;
}

// ============================================================
// FORMAT WALKING TIME
// ============================================================

function formatWalkingTime(seconds) {
  const minutes = Math.max(1, Math.round(seconds / 60));

  if (minutes < 60) {
    return `${minutes} min`;
  }

  const hours = Math.floor(minutes / 60);
  const remainingMinutes = minutes % 60;

  if (remainingMinutes === 0) {
    return `${hours} hr`;
  }

  return `${hours} hr ${remainingMinutes} min`;
}

// ============================================================
// DESTINATION MARKER ICON
// ============================================================

const destinationLocationIcon = L.divIcon({
  className: "destination-location-marker",
  html: `
    <div style="
      width: 24px;
      height: 24px;
      display: flex;
      align-items: center;
      justify-content: center;
      background: #2563eb;
      border: 2px solid white;
      border-radius: 50% 50% 50% 0;
      transform: rotate(-45deg);
      box-shadow: 0 2px 6px rgba(0,0,0,0.35);
    ">
      <div style="
        width: 6px;
        height: 6px;
        background: white;
        border-radius: 50%;
      "></div>
    </div>
  `,
  iconSize: [24, 24],
  iconAnchor: [12, 24],
});

// ============================================================
// CURRENT LOCATION MARKER ICON
// ============================================================

const currentLocationIcon = L.divIcon({
  className: "current-location-marker",
  html: `
    <div style="
      width: 18px;
      height: 18px;
      background: #2563eb;
      border: 4px solid white;
      border-radius: 50%;
      box-shadow: 0 2px 8px rgba(0,0,0,0.45);
    "></div>
  `,
  iconSize: [18, 18],
  iconAnchor: [9, 9],
});

// ============================================================
// WALKING PERSON MARKER ICON
// ============================================================

const walkingPersonIcon = L.divIcon({
  className: "walking-person-marker",
  html: `
    <div style="
      width: 64px;
      height: 56px;
      display: flex;
      align-items: center;
      justify-content: center;
      pointer-events: none;
    ">
      <img
        src="${walkingPerson}"
        alt="Walking person"
        style="
          width: 64px;
          height: 56px;
          object-fit: contain;
          display: block;
          background: transparent;
          pointer-events: none;
        "
      />
    </div>
  `,
  iconSize: [64, 76],
  iconAnchor: [32, 64],
});

// ============================================================
// WALKING PERSON COMPONENT
// Follows the actual route coordinates.
// Includes the dotted connector when available.
// ============================================================

function WalkingPerson({ route, connectorCoordinates }) {
  const map = useMap();

  useEffect(() => {
    if (!route || !route.coordinates?.length) return;

    // Combine the solid route and dotted connector.
    const coordinates = [...route.coordinates];

    if (connectorCoordinates?.length) {
      coordinates.push(...connectorCoordinates.slice(1));
    }

    // Ensure the destination is included.
    const destination = [route.destination.lat, route.destination.lng];

    const last = coordinates[coordinates.length - 1];

    if (L.latLng(last).distanceTo(L.latLng(destination)) > 0.5) {
      coordinates.push(destination);
    }

    // Calculate cumulative distances.
    const points = coordinates.map((coordinate) =>
      L.latLng(coordinate[0], coordinate[1]),
    );

    const cumulative = [0];

    for (let i = 1; i < points.length; i++) {
      cumulative.push(cumulative[i - 1] + points[i - 1].distanceTo(points[i]));
    }

    const totalDistance = cumulative[cumulative.length - 1];

    if (totalDistance <= 0) return;

    // Create a fresh marker at the beginning of every route.
    const marker = L.marker(points[0], {
      icon: walkingPersonIcon,
      interactive: false,
      keyboard: false,
      zIndexOffset: 2000,
    }).addTo(map);

    let animationFrame;
    let startTime = null;

    // Walking speed in meters per second.
    const WALKING_SPEED = 25.0;

    const animate = (timestamp) => {
      if (startTime === null) {
        startTime = timestamp;
      }

      // Calculate distance traveled using elapsed time.
      const elapsed = (timestamp - startTime) / 1000;

      const distanceTraveled = Math.min(elapsed * WALKING_SPEED, totalDistance);

      // Stop at destination.
      if (distanceTraveled >= totalDistance) {
        marker.setLatLng(points[points.length - 1]);
        return;
      }

      // Find the current route segment.
      let segmentIndex = 0;

      while (
        segmentIndex < cumulative.length - 2 &&
        cumulative[segmentIndex + 1] < distanceTraveled
      ) {
        segmentIndex++;
      }

      const segmentStart = cumulative[segmentIndex];
      const segmentEnd = cumulative[segmentIndex + 1];

      const segmentDistance = segmentEnd - segmentStart;

      const progress =
        segmentDistance > 0
          ? (distanceTraveled - segmentStart) / segmentDistance
          : 0;

      // Interpolate position along the current segment.
      const start = points[segmentIndex];
      const end = points[segmentIndex + 1];

      const lat = start.lat + (end.lat - start.lat) * progress;

      const lng = start.lng + (end.lng - start.lng) * progress;

      marker.setLatLng([lat, lng]);

      animationFrame = requestAnimationFrame(animate);
    };

    // Start walking.
    animationFrame = requestAnimationFrame(animate);

    // Cancel old animation and remove marker on route change.
    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }

      map.removeLayer(marker);
    };
  }, [map, route, connectorCoordinates]);

  return null;
}

// ============================================================
// MAP INSTANCE CONTROLLER
// ============================================================

function MapInstanceController({ onMapReady }) {
  const map = useMap();

  useEffect(() => {
    onMapReady(map);
  }, [map, onMapReady]);

  return null;
}

// ============================================================
// MAP CLICK HANDLER
// ============================================================

function MapClickHandler({ onLocationSelect }) {
  useMapEvents({
    click(event) {
      onLocationSelect({
        lat: Number(event.latlng.lat.toFixed(6)),
        lng: Number(event.latlng.lng.toFixed(6)),
        name: "Custom Destination",
      });
    },
  });

  return null;
}

// ============================================================
// MAP CONTROLLER
// Handles routing and map movement.
// ============================================================

function MapController({
  selectedPath,
  customDestination,
  startLocation,
  onRouteUpdate,
  onRouteLoading,
  onRouteError,
}) {
  const map = useMap();

  useEffect(() => {
    const destination =
      customDestination ||
      (selectedPath !== "default" ? CAMPUS_DESTINATIONS[selectedPath] : null);

    if (!destination) {
      onRouteUpdate(null);
      onRouteLoading(false);
      onRouteError("");

      map.flyTo([DEFAULT_LOCATION.lat, DEFAULT_LOCATION.lng], 18, {
        duration: 1,
      });

      return;
    }

    let cancelled = false;
    const controller = new AbortController();

    async function getWalkingRoute() {
      onRouteLoading(true);
      onRouteError("");
      onRouteUpdate(null);

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
        units: "kilometers",
        shape_format: "polyline6",
      };

      try {
        const url =
          "https://valhalla1.openstreetmap.de/route?json=" +
          encodeURIComponent(JSON.stringify(requestBody));

        const response = await fetch(url, {
          signal: controller.signal,
        });

        if (!response.ok) {
          throw new Error("Unable to retrieve the walking route.");
        }

        const data = await response.json();

        if (!data.trip || !data.trip.legs || !data.trip.legs.length) {
          throw new Error("No walking route was found.");
        }

        const leg = data.trip.legs[0];
        const summary = data.trip.summary;

        const routeCoordinates = decodePolyline6(leg.shape);

        if (!routeCoordinates.length) {
          throw new Error("The walking route is unavailable.");
        }

        if (cancelled) return;

        const newRoute = {
          coordinates: routeCoordinates,
          distanceKm: summary.length,
          durationSeconds: summary.time,
          destination: {
            lat: destination.lat,
            lng: destination.lng,
          },
        };

        onRouteUpdate(newRoute);

        map.flyTo([destination.lat, destination.lng], 18, { duration: 1 });
      } catch (error) {
        if (error.name === "AbortError" || cancelled) {
          return;
        }

        console.error("Walking route error:", error);

        onRouteError(error.message || "Unable to load walking route.");
      } finally {
        if (!cancelled) {
          onRouteLoading(false);
        }
      }
    }

    getWalkingRoute();

    return () => {
      cancelled = true;
      controller.abort();
    };
  }, [
    selectedPath,
    customDestination,
    startLocation,
    map,
    onRouteUpdate,
    onRouteLoading,
    onRouteError,
  ]);

  return null;
}

// ============================================================
// MAIN MAP COMPONENT
// ============================================================

function Map({ selectedPath = "default" }) {
  const [startLocation, setStartLocation] = useState(DEFAULT_LOCATION);

  const [customDestination, setCustomDestination] = useState(null);

  const [route, setRoute] = useState(null);
  const [routeLoading, setRouteLoading] = useState(false);
  const [routeError, setRouteError] = useState("");

  const [locationLoading, setLocationLoading] = useState(false);

  const [locationError, setLocationError] = useState("");

  const [mapInstance, setMapInstance] = useState(null);
  const [isTrackingLocation, setIsTrackingLocation] = useState(false);

  const watchIdRef = useRef(null);
  const lastLocationUpdateRef = useRef(0);
  // ----------------------------------------------------------
  // SELECTED DESTINATION
  // ----------------------------------------------------------

  const destination = useMemo(() => {
    if (selectedPath !== "default") {
      return CAMPUS_DESTINATIONS[selectedPath] || null;
    }

    return customDestination;
  }, [selectedPath, customDestination]);

  // ----------------------------------------------------------
  // MAP CLICK
  // ----------------------------------------------------------

  const handleMapLocationSelect = (location) => {
    setCustomDestination(location);
    setLocationError("");
  };

  // ----------------------------------------------------------
  // CURRENT LOCATION
  // ----------------------------------------------------------

  const handleMyLocation = () => {
    if (!navigator.geolocation) {
      setLocationError("Geolocation is not supported by this browser.");
      return;
    }

    // Stop previous tracking if already active.
    if (watchIdRef.current !== null) {
      navigator.geolocation.clearWatch(watchIdRef.current);
      watchIdRef.current = null;
    }

    setLocationLoading(true);
    setLocationError("");
    lastLocationUpdateRef.current = 0;

    watchIdRef.current = navigator.geolocation.watchPosition(
      (position) => {
        const now = Date.now();

        // Update immediately on first position,
        // then approximately every 3 seconds.
        if (
          lastLocationUpdateRef.current !== 0 &&
          now - lastLocationUpdateRef.current < 3000
        ) {
          return;
        }

        lastLocationUpdateRef.current = now;

        const newLocation = {
          lat: position.coords.latitude,
          lng: position.coords.longitude,
          name: "My Location",
        };

        setStartLocation(newLocation);
        setLocationLoading(false);
        setIsTrackingLocation(true);
        setLocationError("");

        // Keep the map centered on the moving user.
        if (mapInstance) {
          mapInstance.panTo([newLocation.lat, newLocation.lng], {
            animate: true,
            duration: 0.5,
          });
        }
      },
      (error) => {
        setLocationLoading(false);

        let message = "Unable to get your current location.";

        if (error.code === error.PERMISSION_DENIED) {
          message = "Location permission was denied.";
        } else if (error.code === error.POSITION_UNAVAILABLE) {
          message = "Your current location is unavailable.";
        } else if (error.code === error.TIMEOUT) {
          message = "Location request timed out.";
        }

        setLocationError(message);
        setIsTrackingLocation(false);
      },
      {
        enableHighAccuracy: true,
        timeout: 15000,
        maximumAge: 0,
      },
    );
  };

  const handleStopTracking = () => {
    if (watchIdRef.current !== null) {
      navigator.geolocation.clearWatch(watchIdRef.current);
      watchIdRef.current = null;
    }

    setIsTrackingLocation(false);
  };

  // ----------------------------------------------------------
  // DEFAULT LOCATION
  // ----------------------------------------------------------

  const handleDefaultLocation = () => {
    handleStopTracking();

    setStartLocation(DEFAULT_LOCATION);
    setCustomDestination(null);
    setLocationError("");

    if (mapInstance) {
      mapInstance.flyTo([DEFAULT_LOCATION.lat, DEFAULT_LOCATION.lng], 18, {
        duration: 1,
      });
    }
  };

  // ----------------------------------------------------------
  // CLEAR CUSTOM DESTINATION
  // ----------------------------------------------------------

  const handleClearDestination = () => {
    setCustomDestination(null);
    setRoute(null);
    setRouteError("");
  };

  // ----------------------------------------------------------
  // MAP CALLBACKS
  // ----------------------------------------------------------

  const handleMapReady = useCallback((map) => {
    setMapInstance(map);
  }, []);

  // ----------------------------------------------------------
  // ROUTE CALLBACKS
  // ----------------------------------------------------------

  const handleRouteUpdate = useCallback((newRoute) => {
    setRoute(newRoute);
  }, []);

  const handleRouteLoading = useCallback((loading) => {
    setRouteLoading(loading);
  }, []);

  const handleRouteError = useCallback((message) => {
    setRouteError(message);
  }, []);

  // ----------------------------------------------------------
  // DOTTED FALLBACK LINE
  // ----------------------------------------------------------

  const connectorCoordinates = useMemo(() => {
    if (!route || !route.coordinates.length) {
      return null;
    }

    const lastCoordinate = route.coordinates[route.coordinates.length - 1];

    const distance = calculateDistance(
      {
        lat: lastCoordinate[0],
        lng: lastCoordinate[1],
      },
      route.destination,
    );

    if (distance <= 10) return null;

    return [lastCoordinate, [route.destination.lat, route.destination.lng]];
  }, [route]);

  useEffect(() => {
    return () => {
      if (watchIdRef.current !== null) {
        navigator.geolocation.clearWatch(watchIdRef.current);
      }
    };
  }, []);
  // ==========================================================
  // RENDER
  // ==========================================================

  return (
    <div className="relative w-full">
      <div className="relative w-full overflow-hidden rounded-xl border border-gray-200 shadow-lg">
        <MapContainer
          center={[DEFAULT_LOCATION.lat, DEFAULT_LOCATION.lng]}
          zoom={18}
          minZoom={18}
          maxZoom={18}
          zoomControl={false}
          scrollWheelZoom={false}
          doubleClickZoom={false}
          touchZoom={false}
          dragging={true}
          attributionControl={false}
          className="w-full h-[calc(100vh-220px)] min-h-[800px]"
        >
          <MapInstanceController onMapReady={handleMapReady} />

          {/* MAP CLICK HANDLER */}

          <MapClickHandler onLocationSelect={handleMapLocationSelect} />

          {/* SATELLITE IMAGERY */}

          <TileLayer
            url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}"
            attribution="Tiles &copy; Esri"
            maxZoom={20}
          />

          {/* LABELS OVER SATELLITE MAP */}

          <TileLayer
            url="https://server.arcgisonline.com/ArcGIS/rest/services/Reference/World_Boundaries_and_Places/MapServer/tile/{z}/{y}/{x}"
            attribution="Labels &copy; Esri"
            maxZoom={20}
            pane="overlayPane"
          />

          {/* ROUTING CONTROLLER */}

          <MapController
            selectedPath={selectedPath}
            customDestination={customDestination}
            startLocation={startLocation}
            onRouteUpdate={handleRouteUpdate}
            onRouteLoading={handleRouteLoading}
            onRouteError={handleRouteError}
          />

          {/* CURRENT STARTING LOCATION */}

          <Marker
            position={[startLocation.lat, startLocation.lng]}
            icon={currentLocationIcon}
          />

          {/* DESTINATION MARKER */}

          {destination && (
            <Marker
              position={[destination.lat, destination.lng]}
              icon={destinationLocationIcon}
              zIndexOffset={1000}
            >
              <Popup
                closeButton={true}
                autoClose={true}
                closeOnClick={true}
                closeOnEscapeKey={true}
                offset={[0, -12]}
                maxWidth={240}
                minWidth={200}
                className="building-location-popup"
              >
                <div className="w-[210px] overflow-hidden rounded-lg">
                  {destination.image && (
                    <div className="h-[125px] w-full overflow-hidden rounded-lg bg-gray-100">
                      <img
                        src={destination.image}
                        alt={destination.label || destination.name}
                        className="h-full w-full object-cover"
                      />
                    </div>
                  )}

                  <div className="px-1 pb-2 pt-3">
                    <div className="mb-1 text-[10px] font-semibold uppercase tracking-wider text-blue-600">
                      📍{" "}
                      {destination.image
                        ? "Campus Location"
                        : "Custom Destination"}
                    </div>

                    <h3 className="text-sm font-bold leading-snug text-gray-900">
                      {destination.label || destination.name}
                    </h3>
                  </div>
                </div>
              </Popup>
            </Marker>
          )}

          {/* SOLID WALKING ROUTE */}

          {route && route.coordinates.length > 0 && (
            <Polyline
              positions={route.coordinates}
              pathOptions={{
                color: "#2563eb",
                weight: 6,
                opacity: 0.9,
                lineCap: "round",
                lineJoin: "round",
              }}
            />
          )}

          {/* DOTTED ROUTE ENDPOINT CONNECTION */}

          {connectorCoordinates && (
            <Polyline
              positions={connectorCoordinates}
              pathOptions={{
                color: "#2563eb",
                weight: 4,
                opacity: 0.9,
                dashArray: "2, 10",
                lineCap: "round",
              }}
            />
          )}

          {/* ================================================== */}
          {/* ANIMATED WALKING PERSON */}
          {/* ================================================== */}

          {route && !routeLoading && (
            <WalkingPerson
              route={route}
              connectorCoordinates={connectorCoordinates}
              startLocation={startLocation}
            />
          )}
        </MapContainer>

        {/* ================================================== */}
        {/* MAP CONTROLS */}
        {/* ================================================== */}

        {/* ================================================== */}
        {/* MAP CONTROLS */}
        {/* ================================================== */}

        <div className="absolute top-4 right-4 z-[1000] flex flex-col gap-2">
          {/* MY LOCATION / GPS TRACKING */}

          <button
            type="button"
            onClick={isTrackingLocation ? handleStopTracking : handleMyLocation}
            disabled={locationLoading}
            className="flex items-center gap-2 rounded-lg bg-white px-4 py-2.5 text-sm font-semibold text-gray-700 shadow-md transition hover:bg-gray-100 disabled:cursor-not-allowed disabled:opacity-60"
          >
            <span className="text-lg">{isTrackingLocation ? "🟢" : "📍"}</span>

            {locationLoading
              ? "Locating..."
              : isTrackingLocation
                ? "Stop Tracking"
                : "My Location"}
          </button>

          {/* DEFAULT LOCATION */}

          <button
            type="button"
            onClick={handleDefaultLocation}
            className="flex items-center gap-2 rounded-lg bg-white px-4 py-2.5 text-sm font-semibold text-gray-700 shadow-md transition hover:bg-gray-100"
          >
            <span className="text-lg">🏠</span>
            Default Location
          </button>
        </div>

        {/* ================================================== */}
        {/* WALKING ROUTE INFORMATION */}
        {/* ================================================== */}

        {destination && (
          <div className="absolute bottom-4 left-4 right-4 z-[1000] sm:left-auto sm:right-4 sm:w-[280px]">
            <div className="rounded-xl border border-gray-200 bg-white p-4 shadow-xl">
              <div className="mb-3">
                <p className="text-xs font-medium uppercase tracking-wide text-gray-500">
                  Selected Destination
                </p>

                <h3 className="mt-1 text-base font-bold text-gray-900">
                  {destination.label || destination.name}
                </h3>
              </div>

              {/* ROUTE STATUS */}

              {routeLoading ? (
                <div className="flex items-center gap-3 py-3 text-sm text-gray-600">
                  <div className="h-5 w-5 animate-spin rounded-full border-2 border-blue-600 border-t-transparent" />
                  Calculating pedestrian route...
                </div>
              ) : route ? (
                <div className="grid grid-cols-2 gap-2 border-t border-gray-100 pt-3">
                  <div>
                    <p className="text-xs text-gray-500">Walking Distance</p>

                    <p className="mt-1 text-lg font-bold text-gray-900">
                      {formatDistance(route.distanceKm)}
                    </p>
                  </div>

                  <div>
                    <p className="text-xs text-gray-500">Walking Time</p>

                    <p className="mt-1 text-lg font-bold text-gray-900">
                      {formatWalkingTime(route.durationSeconds)}
                    </p>
                  </div>
                </div>
              ) : routeError ? (
                <p className="border-t border-gray-100 pt-3 text-sm text-red-600">
                  {routeError}
                </p>
              ) : (
                <p className="border-t border-gray-100 pt-3 text-sm text-gray-500">
                  Waiting for walking route information...
                </p>
              )}

              {/* CLEAR CUSTOM DESTINATION */}

              {customDestination && (
                <button
                  type="button"
                  onClick={handleClearDestination}
                  className="mt-3 w-full rounded-lg border border-gray-200 py-2 text-xs font-semibold text-gray-600 transition hover:bg-gray-50"
                >
                  Clear Custom Destination
                </button>
              )}
            </div>
          </div>
        )}

        {/* ================================================== */}
        {/* LOCATION ERROR */}
        {/* ================================================== */}

        {locationError && (
          <div className="absolute bottom-4 left-4 z-[1100] max-w-xs rounded-lg bg-red-600 px-4 py-3 text-sm text-white shadow-lg">
            {locationError}

            <button
              type="button"
              onClick={() => setLocationError("")}
              className="ml-3 font-bold"
            >
              ✕
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Map;
