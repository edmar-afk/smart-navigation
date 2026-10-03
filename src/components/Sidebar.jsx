import React, { useState } from "react";
import { NavLink } from "react-router-dom";

import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

import DashboardRoundedIcon from "@mui/icons-material/DashboardRounded";
import HowToRegRoundedIcon from "@mui/icons-material/HowToRegRounded";
import FactCheckRoundedIcon from "@mui/icons-material/FactCheckRounded";
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
    title: null,
    items: [
      {
        label: "Dashboard",
        href: "/dashboard",
        icon: DashboardRoundedIcon,
      },
    ],
  },

  {
    title: "Registrar",
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
        href: "/dashboard",
        icon: EventBusyRoundedIcon,
      },
      {
        label: "Evaluation of Graduating Students",
        href: "/dashboard",
        icon: SchoolRoundedIcon,
      },
    ],
  },

  {
    title: "Library",
    items: [
      {
        label: "Library Services",
        href: "/dashboard",
        icon: LocalLibraryRoundedIcon,
      },
      {
        label: "Books & Resources",
        href: "/dashboard",
        icon: MenuBookRoundedIcon,
      },
    ],
  },

  {
    title: "DSA",
    items: [
      {
        label: "Student Assistance",
        href: "/dashboard",
        icon: SupportAgentRoundedIcon,
      },
      {
        label: "DSA Services",
        href: "/dashboard",
        icon: AssignmentRoundedIcon,
      },
    ],
  },

  {
    title: "School Clinic",
    items: [
      {
        label: "Medical Services",
        href: "/dashboard",
        icon: MedicalServicesRoundedIcon,
      },
      {
        label: "Health & Wellness",
        href: "/dashboard",
        icon: HealthAndSafetyRoundedIcon,
      },
    ],
  },
];

function Sidebar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* =========================
          MOBILE MENU BUTTON
      ========================== */}
      <button
        onClick={() => setOpen(true)}
        className="
          md:hidden fixed top-4 left-4 z-[99999]
          flex items-center justify-center
          w-11 h-11
          rounded-xl
          bg-green-700
          text-white
          shadow-lg
          hover:bg-green-800
          active:scale-95
          transition-all
        "
        aria-label="Open menu"
      >
        <MenuIcon />
      </button>

      {/* =========================
          MOBILE OVERLAY
      ========================== */}
      {open && (
        <div
          onClick={() => setOpen(false)}
          className="
            fixed inset-0
            bg-black/40
            backdrop-blur-[2px]
            md:hidden
            z-[99998]
          "
        />
      )}

      {/* =========================
          SIDEBAR
      ========================== */}
      <aside
        className={`
          fixed top-0 left-0
          z-[99999]
          h-screen
          w-[280px]

          bg-white

          border-r border-green-100

          shadow-[4px_0_24px_rgba(0,0,0,0.05)]

          transform
          transition-transform
          duration-300
          ease-out

          ${open ? "translate-x-0" : "-translate-x-full md:translate-x-0"}
        `}
      >
        {/* =========================
            MOBILE CLOSE BUTTON
        ========================== */}
        <button
          onClick={() => setOpen(false)}
          className="
            md:hidden
            absolute
            top-5
            right-5

            flex
            items-center
            justify-center

            w-9
            h-9

            rounded-lg

            text-gray-500

            hover:bg-green-50
            hover:text-green-700

            transition
          "
          aria-label="Close menu"
        >
          <CloseIcon fontSize="small" />
        </button>

        {/* =========================
            HEADER / BRAND
        ========================== */}
        <div className="px-6 pt-7 pb-5">
          <div
            className="
              flex
              items-center
              gap-3

              pb-5

              border-b
              border-green-100
            "
          >
            {/* Logo */}
            <div
              className="
                relative
                flex
                items-center
                justify-center

                w-12
                h-12

                rounded-2xl

                bg-green-50

                ring-1
                ring-green-100

                overflow-hidden
              "
            >
              <img
                src={logo}
                alt="JHCSC Logo"
                className="
                  w-full
                  h-full
                  object-cover
                "
              />
            </div>

            {/* Brand */}
            <div className="min-w-0">
              <p
                className="
                  text-sm
                  font-bold
                  text-gray-800
                  leading-tight
                "
              >
                JHCSC
              </p>

              <p
                className="
                  mt-1
                  text-[11px]
                  text-gray-500
                  leading-tight
                "
              >
                Canuto Campus
              </p>
            </div>
          </div>
        </div>

        {/* =========================
            NAVIGATION
        ========================== */}
        <nav
          className="
            h-[calc(100vh-115px)]
            overflow-y-auto
            px-4
            pb-10
            sidebar-scroll
          "
        >
          <ul className="space-y-5">
            {navSections.map((section, sectionIndex) => (
              <li key={sectionIndex}>
                {/* Section title */}
                {section.title && (
                  <div className="px-3 mb-2">
                    <p
                      className="
                        text-[10px]
                        font-bold
                        uppercase
                        tracking-[0.14em]
                        text-green-700
                      "
                    >
                      {section.title}
                    </p>
                  </div>
                )}

                {/* Section items */}
                <ul className="space-y-1">
                  {section.items.map((item, itemIndex) => {
                    const Icon = item.icon;

                    return (
                      <li key={itemIndex}>
                        <NavLink
                          to={item.href}
                          onClick={() => setOpen(false)}
                          className={({ isActive }) => `
                            group
                            relative

                            flex
                            items-center

                            min-h-[46px]

                            px-3
                            py-2

                            rounded-xl

                            text-[13px]
                            font-medium

                            transition-all
                            duration-200

                            ${
                              isActive
                                ? `
                                  bg-green-700
                                  text-white
                                  shadow-md
                                  shadow-green-700/20
                                `
                                : `
                                  text-gray-600
                                  hover:bg-green-50
                                  hover:text-green-800
                                `
                            }
                          `}
                        >
                          {({ isActive }) => (
                            <>
                              {/* Active indicator */}
                              {isActive && (
                                <span
                                  className="
                                    absolute
                                    left-0
                                    top-1/2
                                    -translate-y-1/2

                                    w-1
                                    h-6

                                    rounded-r-full

                                    bg-green-300
                                  "
                                />
                              )}

                              {/* Icon container */}
                              <span
                                className={`
                                  flex
                                  items-center
                                  justify-center

                                  flex-shrink-0

                                  w-9
                                  h-9

                                  rounded-lg

                                  transition-all

                                  ${
                                    isActive
                                      ? "bg-white/15 text-white"
                                      : `
                                        bg-green-50
                                        text-green-700
                                        group-hover:bg-green-100
                                      `
                                  }
                                `}
                              >
                                <Icon
                                  sx={{
                                    fontSize: 21,
                                  }}
                                />
                              </span>

                              {/* Label */}
                              <span
                                className="
                                  ml-3
                                  leading-[1.25]
                                "
                              >
                                {item.label}
                              </span>
                            </>
                          )}
                        </NavLink>
                      </li>
                    );
                  })}
                </ul>
              </li>
            ))}
          </ul>
        </nav>
      </aside>

      {/* =========================
          HIDDEN SCROLLBAR
      ========================== */}
      <style>{`
        .sidebar-scroll::-webkit-scrollbar {
          width: 0px;
          height: 0px;
        }

        .sidebar-scroll {
          scrollbar-width: none;
          -ms-overflow-style: none;
        }
      `}</style>
    </>
  );
}

export default Sidebar;
