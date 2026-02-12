"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation"; // ← Add this import

export default function Header() {
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const pathname = usePathname(); // ← Get current URL path
// Helper to check if link is active
  const isActive = (path: string) => pathname === path;
  return (
    <header className="bg-white py-4 px-4 md:px-6 lg:px-8 sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link href="/">
          <Image src="/images/doyinbo.png" alt="Doyinbo Logistics" width={90} height={30} /> {/* Replace with your logo path */}
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-6 text-textDark font-medium">
          <Link href="/shipping" className="hover:text-primary">Shipping</Link>
          <Link href="/tracking" className="hover:text-primary">Tracking</Link>
          <Link href="/about" className="hover:text-primary">About us</Link>
          
          <Link href="/contact" className="hover:text-primary">Contact</Link>
        </nav>

        
        {/* Desktop Auth */}
          <div className="hidden md:flex items-center space-x-4">
            <Link
              href="/login"
              className="inline-flex items-center h-10 px-2 font-semibold text-textDark hover:text-primary"
            >
              Log In
            </Link>

            <Link
              href="/signup"
              className="inline-flex items-center h-10 bg-primary text-white px-6 rounded-full hover:bg-opacity-90"
            >
              Sign Up →
            </Link>
          </div>


        {/* Mobile Hamburger */}
        <button className="md:hidden" onClick={() => setIsMobileOpen(!isMobileOpen)}>
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileOpen && (
        <div className="md:hidden flex flex-col space-y-4 px-4 py-4 bg-white">
          <Link href="/shipping" className="hover:text-primary">Shipping</Link>
          <Link href="/tracking" className="hover:text-primary">Tracking</Link>
          <Link href="/about" className="hover:text-primary">About us</Link>
          <Link href="/contact" className="hover:text-primary">Contact</Link>
          <Link href="/login" className="hover:text-primary">Log In</Link>
          <Link href="/signup" className="bg-primary text-white px-6 py-2 rounded-full text-center hover:bg-opacity-90">
            Sign Up →
          </Link>
        </div>
      )}
    </header>
  );
}