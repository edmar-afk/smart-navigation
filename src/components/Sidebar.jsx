import React, { useEffect, useRef, useState } from "react";
import { NavLink } from "react-router-dom";

import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

import DashboardRoundedIcon from "@mui/icons-material/DashboardRounded";
import MapRoundedIcon from "@mui/icons-material/MapRounded";
import HowToRegRoundedIcon from "@mui/icons-material/HowToRegRounded";
import SwapHorizRoundedIcon from "@mui/icons-material/SwapHorizRounded";
import PlaylistAddRoundedIcon from "@mui/icons-material/PlaylistAddRounded";
import PersonRemoveRoundedIcon from "@mui/icons-material/PersonRemoveRounded";
import EventBusyRoundedIcon from "@mui/icons-material/EventBusyRounded";
import SchoolRoundedIcon from "@mui/icons-material/SchoolRounded";
import DescriptionRoundedIcon from "@mui/icons-material/DescriptionRounded";
import LocalLibraryRoundedIcon from "@mui/icons-material/LocalLibraryRounded";
import MenuBookRoundedIcon from "@mui/icons-material/MenuBookRounded";
import SupportAgentRoundedIcon from "@mui/icons-material/SupportAgentRounded";
import AssignmentRoundedIcon from "@mui/icons-material/AssignmentRounded";
import MedicalServicesRoundedIcon from "@mui/icons-material/MedicalServicesRounded";
import HealthAndSafetyRoundedIcon from "@mui/icons-material/HealthAndSafetyRounded";

import logo from "../assets/images/logo.jpg";

const navSections = [
  {
    title: "Campus Map",
    icon: MapRoundedIcon,
    type: "map",
    items: [
      { label: "Full Map", mapPath: "default" },
      { label: "Clinic Path", mapPath: "clinic" },
      { label: "Registrar Path", mapPath: "registrar" },
      { label: "Library Path", mapPath: "library" },
      { label: "BIT Building", mapPath: "bit" },
      { label: "CAD Laboratory", mapPath: "cadlab" },
      { label: "Canteen", mapPath: "canteen" },
      { label: "CH 3", mapPath: "ch3" },
      { label: "CH 4, 5, 6 and 7", mapPath: "ch4567" },
      { label: "Disaster Risk Reduction", mapPath: "disaster" },
      { label: "Drawing Room", mapPath: "drawingRoom" },
      { label: "Faculty Room", mapPath: "facultyRoom" },
      { label: "Guidance Office", mapPath: "guidance" },
      { label: "Human Resource Office", mapPath: "hrod" },
      { label: "Laboratory 1", mapPath: "lab1" },
      { label: "Laboratory 2", mapPath: "lab2" },
      { label: "MIS Office", mapPath: "mis" },
      { label: "Quality Assurance Office", mapPath: "qao" },
    ],
  },
  {
    title: "Registrar",
    icon: HowToRegRoundedIcon,
    items: [
      {
        label: "Enrolment Process/Procedures",
        href: "/enrollment-process",
        icon: HowToRegRoundedIcon,
      },
      {
        label: "Shifting of Programs",
        href: "/shifting-programs",
        icon: SwapHorizRoundedIcon,
      },
      {
        label: "Adding/Dropping/Changing of Subjects",
        href: "/adding-droping-changing-subjects",
        icon: PlaylistAddRoundedIcon,
      },
      {
        label: "Withdrawal of Enrollment",
        href: "/withdrawal-of-enrollment",
        icon: PersonRemoveRoundedIcon,
      },
      {
        label: "Releasing of TOR",
        href: "/releasing-TOR",
        icon: DescriptionRoundedIcon,
      },
      {
        label: "Filing of LOA (Leave of Absence)",
        href: "/loa",
        icon: EventBusyRoundedIcon,
      },
      {
        label: "Evaluation of Graduating Students",
        href: "/evaluation",
        icon: SchoolRoundedIcon,
      },
    ],
  },
  {
    title: "Library",
    icon: LocalLibraryRoundedIcon,
    items: [
      {
        label: "Library Services",
        href: "/library-services",
        icon: LocalLibraryRoundedIcon,
      },
      {
        label: "Books & Resources",
        href: "/books-and-resources",
        icon: MenuBookRoundedIcon,
      },
    ],
  },
  {
    title: "DSA",
    icon: SupportAgentRoundedIcon,
    items: [
      {
        label: "Student Assistance",
        href: "/student-assistance",
        icon: SupportAgentRoundedIcon,
      },
      {
        label: "DSA Services",
        href: "/dsa-services",
        icon: AssignmentRoundedIcon,
      },
    ],
  },
  {
    title: "School Clinic",
    icon: MedicalServicesRoundedIcon,
    items: [
      {
        label: "Medical Services",
        href: "/medical-services",
        icon: MedicalServicesRoundedIcon,
      },
      {
        label: "Health & Wellness",
        href: "/health-and-wellness",
        icon: HealthAndSafetyRoundedIcon,
      },
    ],
  },
];

function Sidebar({ selectedMap = "default", onSelectMap }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState(null);
  const [dropdownPosition, setDropdownPosition] = useState({
    top: 100,
    left: 92,
  });
  const [tooltip, setTooltip] = useState(null);

  const dropdownRef = useRef(null);
  const triggerRef = useRef(null);

  const dashboardItem = {
    title: "Dashboard",
    icon: DashboardRoundedIcon,
  };

  const closeMenus = () => {
    setActiveSection(null);
    setTooltip(null);
  };

  const closeSidebar = () => {
    setMobileOpen(false);
    closeMenus();
  };

  const openSection = (event, sectionTitle) => {
    if (activeSection === sectionTitle) {
      setActiveSection(null);
      return;
    }

    const rect = event.currentTarget.getBoundingClientRect();

    setDropdownPosition({
      top: Math.max(12, Math.min(rect.top, window.innerHeight - 440)),
      left: rect.right + 12,
    });

    triggerRef.current = event.currentTarget;
    setTooltip(null);
    setActiveSection(sectionTitle);
  };

  const handleMapSelect = (mapPath) => {
    onSelectMap?.(mapPath);
    closeSidebar();
  };

  const showTooltip = (event, label) => {
    const rect = event.currentTarget.getBoundingClientRect();

    setTooltip({
      label,
      top: rect.top + rect.height / 2,
      left: rect.right + 12,
    });
  };

  // Close floating submenu when clicking outside or pressing Escape.
  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (
        activeSection &&
        !dropdownRef.current?.contains(event.target) &&
        !triggerRef.current?.contains(event.target)
      ) {
        setActiveSection(null);
      }
    };

    const handleEscape = (event) => {
      if (event.key === "Escape") {
        closeMenus();
        setMobileOpen(false);
      }
    };

    const handleResize = () => {
      closeMenus();
    };

    document.addEventListener("mousedown", handleOutsideClick);
    document.addEventListener("keydown", handleEscape);
    window.addEventListener("resize", handleResize);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
      document.removeEventListener("keydown", handleEscape);
      window.removeEventListener("resize", handleResize);
    };
  }, [activeSection]);

  const selectedSection = navSections.find(
    (section) => section.title === activeSection,
  );

  return (
    <>
      {/* MOBILE MENU BUTTON */}
      <button
        onClick={() => setMobileOpen(true)}
        className="fixed left-4 top-4 z-[100001] flex h-11 w-11 items-center justify-center rounded-xl bg-green-700 text-white shadow-lg transition hover:bg-green-800 active:scale-95 md:hidden"
        aria-label="Open menu"
      >
        <MenuIcon />
      </button>

      {/* MOBILE OVERLAY */}
      {mobileOpen && (
        <button
          onClick={closeSidebar}
          className="fixed inset-0 z-[99998] bg-black/40 backdrop-blur-[2px] md:hidden"
          aria-label="Close menu"
        />
      )}

      {/* ICON SIDEBAR */}
      <aside
        className={`fixed left-0 top-0 z-[99999] flex h-screen w-20 flex-col border-r border-green-100 bg-white shadow-[4px_0_24px_rgba(0,0,0,0.05)] transition-transform duration-300 ${
          mobileOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"
        }`}
      >
        {/* LOGO */}
        <div className="flex h-20 shrink-0 items-center justify-center border-b border-green-100">
          <img
            src={logo}
            alt="JHCSC Logo"
            className="h-12 w-12 rounded-xl object-cover"
          />
        </div>

        {/* MOBILE CLOSE */}
        <button
          onClick={closeSidebar}
          className="absolute right-2 top-2 flex h-7 w-7 items-center justify-center rounded-lg text-gray-400 hover:bg-gray-100 md:hidden"
          aria-label="Close sidebar"
        >
          <CloseIcon sx={{ fontSize: 18 }} />
        </button>

        {/* NAVIGATION ICONS */}
        <nav className="sidebar-scroll flex-1 overflow-y-auto px-3 py-5">
          <div className="flex flex-col items-center gap-3">
            {/* DASHBOARD */}
            <div className="relative">
              <NavLink
                to="/dashboard"
                onClick={closeSidebar}
                onMouseEnter={(event) =>
                  showTooltip(event, dashboardItem.title)
                }
                onMouseLeave={() => setTooltip(null)}
                className={({ isActive }) =>
                  `flex h-12 w-12 items-center justify-center rounded-xl transition-all ${
                    isActive
                      ? "bg-green-700 text-white shadow-md"
                      : "text-gray-500 hover:bg-green-50 hover:text-green-700"
                  }`
                }
                aria-label="Dashboard"
              >
                <DashboardRoundedIcon sx={{ fontSize: 25 }} />
              </NavLink>
            </div>

            {/* SECTION ICONS */}
            {navSections.map((section) => {
              const Icon = section.icon;
              const isOpen = activeSection === section.title;

              const isActiveMap =
                section.type === "map" && selectedMap !== undefined;

              return (
                <button
                  key={section.title}
                  type="button"
                  onClick={(event) => openSection(event, section.title)}
                  onMouseEnter={(event) => showTooltip(event, section.title)}
                  onMouseLeave={() => setTooltip(null)}
                  aria-label={section.title}
                  aria-expanded={isOpen}
                  className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl transition-all duration-200 ${
                    isOpen || isActiveMap
                      ? "bg-green-700 text-white shadow-md"
                      : "text-gray-500 hover:bg-green-50 hover:text-green-700"
                  }`}
                >
                  <Icon sx={{ fontSize: 25 }} />
                </button>
              );
            })}
          </div>
        </nav>

        {/* FOOTER */}
        <div className="flex h-14 shrink-0 items-center justify-center border-t border-green-100">
          <span className="text-[10px] font-bold text-gray-400">JHCSC</span>
        </div>
      </aside>

      {/* TOOLTIP - OUTSIDE SIDEBAR */}
      {tooltip && !activeSection && (
        <div
          className="pointer-events-none fixed z-[100005] -translate-y-1/2 whitespace-nowrap rounded-lg bg-gray-900 px-3 py-2 text-xs font-semibold text-white shadow-lg"
          style={{
            top: tooltip.top,
            left: tooltip.left,
          }}
        >
          {tooltip.label}
        </div>
      )}

      {/* FLOATING SUBMENU */}
      {selectedSection && (
        <div
          ref={dropdownRef}
          className="fixed z-[100004] flex max-h-[80vh] w-72 max-w-[calc(100vw-104px)] flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-2xl"
          style={{
            top: dropdownPosition.top,
            left: dropdownPosition.left,
          }}
        >
          {/* SUBMENU HEADER */}
          <div className="flex shrink-0 items-center justify-between border-b border-gray-100 px-4 py-3">
            <div>
              <h3 className="text-sm font-bold text-gray-800">
                {selectedSection.title}
              </h3>
              <p className="mt-0.5 text-xs text-gray-400">
                {selectedSection.type === "map"
                  ? "Select a map or location"
                  : "Select a page"}
              </p>
            </div>

            <button
              onClick={closeMenus}
              className="flex h-8 w-8 items-center justify-center rounded-lg text-gray-400 transition hover:bg-gray-100 hover:text-gray-700"
              aria-label="Close submenu"
            >
              <CloseIcon sx={{ fontSize: 19 }} />
            </button>
          </div>

          {/* SUBMENU ITEMS */}
          <div className="sidebar-submenu-scroll overflow-y-auto p-2">
            {selectedSection.items.map((item) => {
              const isMapItem = item.mapPath !== undefined;
              const Icon = item.icon || MapRoundedIcon;

              if (isMapItem) {
                const isSelected = selectedMap === item.mapPath;

                return (
                  <button
                    key={item.mapPath}
                    type="button"
                    onClick={() => handleMapSelect(item.mapPath)}
                    className={`group flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-left text-sm transition ${
                      isSelected
                        ? "bg-green-50 font-semibold text-green-800"
                        : "text-gray-600 hover:bg-gray-50 hover:text-green-700"
                    }`}
                  >
                    <span
                      className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-lg ${
                        isSelected
                          ? "bg-green-100 text-green-700"
                          : "bg-gray-50 text-gray-500 group-hover:bg-green-50 group-hover:text-green-700"
                      }`}
                    >
                      <MapRoundedIcon sx={{ fontSize: 20 }} />
                    </span>

                    <span className="flex-1 leading-snug">{item.label}</span>

                    {isSelected && (
                      <span className="h-2 w-2 rounded-full bg-green-600" />
                    )}
                  </button>
                );
              }

              return (
                <NavLink
                  key={item.href}
                  to={item.href}
                  onClick={closeSidebar}
                  className={({ isActive }) =>
                    `group flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-sm transition ${
                      isActive
                        ? "bg-green-50 font-semibold text-green-800"
                        : "text-gray-600 hover:bg-gray-50 hover:text-green-700"
                    }`
                  }
                >
                  {({ isActive }) => (
                    <>
                      <span
                        className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-lg ${
                          isActive
                            ? "bg-green-100 text-green-700"
                            : "bg-gray-50 text-gray-500 group-hover:bg-green-50 group-hover:text-green-700"
                        }`}
                      >
                        <Icon sx={{ fontSize: 20 }} />
                      </span>

                      <span className="flex-1 leading-snug">{item.label}</span>
                    </>
                  )}
                </NavLink>
              );
            })}
          </div>
        </div>
      )}

      {/* HIDE SCROLLBARS */}
      <style>{`
        .sidebar-scroll::-webkit-scrollbar,
        .sidebar-submenu-scroll::-webkit-scrollbar {
          width: 0;
        }

        .sidebar-scroll,
        .sidebar-submenu-scroll {
          scrollbar-width: none;
          -ms-overflow-style: none;
        }
      `}</style>
    </>
  );
}

export default Sidebar;
