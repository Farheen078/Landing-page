"use client";

import { useState } from "react";
import AuthModal from "./AuthModal";

export default function Navbar() {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalMode, setModalMode] = useState<"login" | "signup">("login");

  const openModal = (mode: "login" | "signup") => {
    setModalMode(mode);
    setModalOpen(true);
  };

  return (
    <>
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-indigo-600 flex items-center justify-center">
                <span className="text-white font-bold text-lg">S</span>
              </div>
              <span className="font-bold text-xl text-gray-900">SaaSify</span>
            </div>
            <nav className="hidden md:flex gap-8 text-gray-600 font-medium">
              <a href="#features" className="hover:text-indigo-600 transition">Features</a>
              <a href="#pricing" className="hover:text-indigo-600 transition">Pricing</a>
              <a href="#" className="hover:text-indigo-600 transition">Resources</a>
            </nav>
            <div className="flex gap-3">
              <button
                onClick={() => openModal("login")}
                className="hidden sm:block px-4 py-2 text-gray-700 hover:text-indigo-600 transition"
              >
                Log in
              </button>
              <button
                onClick={() => openModal("signup")}
                className="px-4 py-2 bg-indigo-600 text-white rounded-full text-sm font-semibold hover:bg-indigo-700 transition shadow-sm"
              >
                Sign up
              </button>
            </div>
          </div>
        </div>
      </header>

      <AuthModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        mode={modalMode}
        onSwitchMode={() => setModalMode(modalMode === "login" ? "signup" : "login")}
      />
    </>
  );
}