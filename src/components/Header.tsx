// src/components/Header.tsx
"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";

export default function Header() {
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (path: string) => pathname === path;

  return (
    <header className="bg-white py-4 px-4 md:px-6 lg:px-8 sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link href="/">
          <Image
            src="/images/doyinbo.png"
            alt="Doyinbo Logistics"
            width={150}
            height={40}
            className="h-10 w-auto"
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link
            href="/shipping"
            className={`px-4 py-2 rounded-full transition font-medium ${isActive("/shipping")
                ? "bg-primary text-white"
                : "text-textDark hover:text-primary hover:bg-gray-50"
              }`}
          >
            Shipping
          </Link>
          <Link
            href="/tracking"
            className={`px-4 py-2 rounded-full transition font-medium ${isActive("/tracking")
                ? "bg-primary text-white"
                : "text-textDark hover:text-primary hover:bg-gray-50"
              }`}
          >
            Tracking
          </Link>

          <Link
            href="/contact"
            className={`px-4 py-2 rounded-full transition font-medium ${isActive("/contact")
                ? "bg-primary text-white"
                : "text-textDark hover:text-primary hover:bg-gray-50"
              }`}
          >
            Contact
          </Link>
          <Link
            href="/about"
            className={`px-4 py-2 rounded-full transition font-medium ${isActive("/about")
                ? "bg-primary text-white"
                : "text-textDark hover:text-primary hover:bg-gray-50"
              }`}
          >
            About us
          </Link>
        </nav>

        {/* Desktop Auth */}
        <div className="hidden md:flex items-center space-x-4">
          <Link
            href="/login"
            className={`px-4 py-2 rounded-full transition font-medium ${isActive("/login")
                ? "bg-primary text-white"
                : "text-textDark hover:text-primary hover:bg-gray-50"
              }`}
          >
            Log in
          </Link>
          <Link
            href="/signup"
            className="bg-primary text-white px-6 py-2 rounded-full font-medium hover:bg-primary/90 transition"
          >
            Sign Up
          </Link>
        </div>

        {/* Mobile Hamburger */}
        <button className="md:hidden text-textDark" onClick={() => setIsMobileOpen(!isMobileOpen)}>
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileOpen && (
        <div className="md:hidden bg-white border-t mt-2 py-6 px-4 space-y-4 shadow-lg">
          <Link
            href="/shipping"
            className={`block px-5 py-3 rounded-full transition ${isActive("/shipping")
                ? "bg-primary text-white font-medium"
                : "text-textDark hover:bg-gray-100"
              }`}
            onClick={() => setIsMobileOpen(false)}
          >
            Shipping
          </Link>
          <Link
            href="/tracking"
            className={`block px-5 py-3 rounded-full transition ${isActive("/tracking")
                ? "bg-primary text-white font-medium"
                : "text-textDark hover:bg-gray-100"
              }`}
            onClick={() => setIsMobileOpen(false)}
          >
            Tracking
          </Link>

          <Link
            href="/contact"
            className={`block px-5 py-3 rounded-full transition ${isActive("/contact")
                ? "bg-primary text-white font-medium"
                : "text-textDark hover:bg-gray-100"
              }`}
            onClick={() => setIsMobileOpen(false)}
          >
            Contact
          </Link>
          <Link
            href="/about"
            className={`block px-5 py-3 rounded-full transition ${isActive("/about")
                ? "bg-primary text-white font-medium"
                : "text-textDark hover:bg-gray-100"
              }`}
            onClick={() => setIsMobileOpen(false)}
          >
            About us
          </Link>

          {/* Mobile Auth */}
          <div className="pt-4 border-t space-y-3">
            <Link
              href="/login"
              className={`block px-5 py-3 rounded-full transition text-center ${isActive("/login")
                  ? "bg-primary text-white font-medium"
                  : "text-textDark hover:bg-gray-100"
                }`}
              onClick={() => setIsMobileOpen(false)}
            >
              Log in
            </Link>
            <Link
              href="/signup"
              className="block bg-primary text-white px-5 py-3 rounded-full text-center hover:bg-primary/90 transition"
              onClick={() => setIsMobileOpen(false)}
            >
              Sign Up
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}