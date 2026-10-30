import React from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  MapPin,
  Compass,
  ArrowLeft,
  Home,
  FolderSearch,
  Navigation,
  FileSearch,
} from "lucide-react";

function NotFound() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center px-6 py-12 relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute top-0 left-0 w-80 h-80 bg-green-100/50 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-indigo-100/50 rounded-full blur-3xl translate-x-1/3 translate-y-1/3" />

      <div className="relative z-10 max-w-3xl w-full text-center">
        {/* Illustration */}
        <div className="relative mx-auto mb-8 w-64 h-64 flex items-center justify-center">
          <div className="absolute inset-0 rounded-full border-2 border-dashed border-green-200 animate-[spin_30s_linear_infinite]" />

          <div className="absolute inset-5 rounded-full bg-green-50 border border-green-100" />

          {/* Map Icon */}
          <div className="relative z-10 bg-white rounded-3xl shadow-xl shadow-green-100 p-10 border border-slate-100">
            <div className="relative">
              <Compass size={90} strokeWidth={1.2} className="text-green-600" />

              <MapPin
                size={38}
                fill="currentColor"
                className="absolute -top-3 -right-4 text-red-500"
              />
            </div>
          </div>

          {/* Floating Icons */}
          <div className="absolute top-5 right-2 bg-white p-3 rounded-2xl shadow-lg">
            <FolderSearch size={25} className="text-indigo-500" />
          </div>

          <div className="absolute bottom-8 left-0 bg-white p-3 rounded-2xl shadow-lg">
            <Navigation size={24} className="text-green-500" />
          </div>

          <div className="absolute bottom-2 right-8 bg-white p-2 rounded-xl shadow-lg">
            <FileSearch size={21} className="text-emerald-500" />
          </div>
        </div>

        {/* Error Label */}
        <div className="inline-flex items-center gap-2 bg-red-50 text-red-600 border border-red-100 rounded-full px-4 py-2 mb-5">
          <span className="w-2 h-2 rounded-full bg-red-500" />
          <span className="text-xs font-bold tracking-widest uppercase">
            Error 404 · Page Not Found
          </span>
        </div>

        {/* Heading */}
        <h1 className="text-5xl sm:text-7xl font-extrabold text-slate-900 tracking-tight mb-4">
          Lost Your <span className="text-green-600">Way?</span>
        </h1>

        <p className="text-slate-500 text-base sm:text-lg max-w-xl mx-auto leading-relaxed mb-8">
          It looks like you've taken a wrong turn. The office page or file
          you're looking for doesn't exist, may have been moved, or is no longer
          available.
        </p>

        {/* Navigation Message */}
        <div className="max-w-md mx-auto bg-white border border-slate-200 rounded-2xl p-4 flex items-center gap-4 text-left shadow-sm mb-8">
          <div className="bg-green-50 p-3 rounded-xl">
            <MapPin size={24} className="text-green-600" />
          </div>

          <div>
            <p className="text-sm font-semibold text-slate-800">
              Need help finding an office?
            </p>
            <p className="text-xs text-slate-500 mt-1">
              Return to the navigation portal and explore available offices and
              online files.
            </p>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-3">
          <button
            onClick={() => navigate(-1)}
            className="inline-flex items-center justify-center gap-2 bg-white hover:bg-slate-100 text-slate-700 border border-slate-200 px-7 py-3.5 rounded-xl font-semibold transition-all duration-200"
          >
            <ArrowLeft size={18} />
            Go Back
          </button>
        </div>

        {/* Footer */}
        <div className="mt-14 pt-6 border-t border-slate-200">
          <p className="text-xs text-slate-400 font-medium tracking-wide">
            OFFICE NAVIGATION & ONLINE FILES
          </p>
          <p className="text-xs text-slate-400 mt-2">
            Helping visitors find offices, navigate buildings, and access office
            documents online.
          </p>
        </div>
      </div>
    </div>
  );
}

export default NotFound;
