/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PeopleIcon from "@mui/icons-material/People";
import SecurityIcon from "@mui/icons-material/Security";
import ShieldIcon from "@mui/icons-material/Shield";
import CategoryIcon from "@mui/icons-material/Category";
import InventoryIcon from "@mui/icons-material/Inventory";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import PaymentIcon from "@mui/icons-material/Payment";
import logo from "../assets/images/logo.jpg";

const navSections = [
  {
    title: null,
    items: [
      { label: "Dashboard", href: "/", icon: DashboardIcon, active: true },
    ],
  },
  {
    title: "Registrar",
    items: [
      { label: "Service Name", href: "/", icon: PeopleIcon },
      { label: "Service Name", href: "/", icon: SecurityIcon },
      { label: "Service Name", href: "/", icon: ShieldIcon },
    ],
  },
  {
    title: "Library",
    items: [
      { label: "Service Name", href: "/", icon: CategoryIcon },
      { label: "Service Name", href: "/", icon: InventoryIcon },
    ],
  },
  {
    title: "DSA",
    items: [
      { label: "Service Name", href: "#", icon: ShoppingCartIcon },
      { label: "Service Name", href: "#", icon: PaymentIcon },
    ],
  },
  {
    title: "School Clinic",
    items: [
      { label: "Service Name", href: "#", icon: ShoppingCartIcon },
      { label: "Service Name", href: "#", icon: PaymentIcon },
    ],
  },
];

function Sidebar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Hamburger (mobile only) */}
      <button
        onClick={() => setOpen(true)}
        className="md:hidden fixed top-4 left-4 z-50 p-2 bg-green-800 text-white rounded"
      >
        <MenuIcon />
      </button>

      {/* Overlay */}
      {open && (
        <div
          onClick={() => setOpen(false)}
          className="fixed inset-0 bg-black/40 z-40 md:hidden"
        />
      )}

      {/* Sidebar */}
      <aside
        className={`
          fixed top-0 left-0 z-[99999] h-screen w-64 bg-white pl-6 pr-4
          transform transition-transform duration-300
          ${open ? "translate-x-0" : "-translate-x-full md:translate-x-0"}
        `}
      >
        {/* Close button (mobile) */}
        <button
          onClick={() => setOpen(false)}
          className="md:hidden absolute top-4 right-4"
        >
          <CloseIcon />
        </button>

        {/* Header */}
        <div className="py-4 flex flex-col items-center gap-2 mb-4">
          <img
            src={logo}
            alt="Logo"
            className="mx-auto h-14 w-14 rounded-full"
          />
          <p className="text-xs font-light">
            JHCSC Canuto Campus
          </p>
        </div>

        {/* Scrollable nav */}
        <nav className="h-[calc(100vh-120px)] overflow-y-auto pr-2 sidebar-scroll z-50">
          <ul className="flex flex-col mb-24">
            {navSections.map((section, si) => (
              <div key={si}>
                {section.title && (
                  <li className="px-2 py-2 text-xs uppercase tracking-wider text-green-800 font-extrabold">
                    {section.title}
                  </li>
                )}

                {section.items.map((item, i) => {
                  const Icon = item.icon;

                  return (
                    <li key={i}>
                      <a
                        href={item.href}
                        className={`flex items-center px-3 py-3 rounded-md text-gray-700 hover:bg-green-700 hover:text-white ${
                          item.active ? "bg-green-900 text-white" : ""
                        }`}
                      >
                        <Icon className="w-5 mr-3" />
                        {item.label}
                      </a>
                    </li>
                  );
                })}
              </div>
            ))}
          </ul>
        </nav>
      </aside>

      {/* Scrollbar hide CSS */}
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
