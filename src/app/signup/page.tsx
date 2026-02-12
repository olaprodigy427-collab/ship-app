// src/app/signup/page.tsx
"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

export default function SignupPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    phone: "",
    userType: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Account created successfully! (Mock)");
  };

  return (
    <div className="min-h-screen bg-bgLight flex flex-col">
      <div className="flex-1 grid md:grid-cols-2 gap-0">
        {/* Left: Animated Map Section – isolated inside its own motion container */}
        <div className="hidden md:block relative overflow-hidden">
          {/* Background map with subtle load animation */}
          <motion.div
            initial={{ opacity: 0.7, scale: 1.03 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.8, ease: "easeOut" }}
            className="absolute inset-0"
          >
            <Image
              src="/images/mapp.png"
              alt="Route map"
              fill
              className="object-cover object-center"
              priority
            />
          </motion.div>

          {/* Overlay Text – fade in after map */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 1.2 }}
            className="absolute inset-0 flex items-center justify-center pointer-events-none"
          >
            <div className="bg-white/85 backdrop-blur-md px-10 py-6 rounded-2xl shadow-2xl border border-white/30">
              <p className="text-2xl md:text-3xl font-bold text-primary text-center tracking-wide">
                Fast, Efficient and Reliable
              </p>
            </div>
          </motion.div>

          {/* Animated Route Line (SVG path drawing) */}
          <motion.svg
            className="absolute inset-0 w-full h-full pointer-events-none"
            viewBox="0 0 1200 800"
            preserveAspectRatio="xMidYMid slice"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 0.8 }}
          >
            <defs>
              <linearGradient id="routeGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#3B82F6" />
                <stop offset="100%" stopColor="#1E40AF" />
              </linearGradient>
            </defs>
            <motion.path
              d="M 150 650 Q 350 550, 550 650 T 1050 450" // ← adjust this path to trace your actual route
              fill="none"
              stroke="url(#routeGradient)"
              strokeWidth="8"
              strokeLinecap="round"
              strokeLinejoin="round"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{
                pathLength: { duration: 4, delay: 2, ease: "easeInOut" },
                opacity: { duration: 0.5, delay: 2 },
              }}
            />
          </motion.svg>

          {/* Pulsing Current Location Dot */}
          <motion.div
            className="absolute bottom-[35%] left-[55%] w-8 h-8 bg-purple-600 rounded-full shadow-2xl border-4 border-white"
            initial={{ scale: 0 }}
            animate={{
              scale: [1, 1.4, 1],
              opacity: [0.8, 1, 0.8],
            }}
            transition={{
              scale: { duration: 2, repeat: Infinity, repeatType: "reverse" },
              opacity: { duration: 2, repeat: Infinity, repeatType: "reverse" },
              delay: 3,
            }}
          />
        </div>

        {/* Right: Form Section – NO animation here, completely static */}
        <div className="flex items-center justify-center px-6 py-12 md:px-12 lg:px-20">
          <div className="w-full max-w-md">
            {/* Header */}
            <div className="text-center md:text-left mb-10">
              <h1 className="text-4xl md:text-5xl font-bold text-textDark mb-4">
                Create Account
              </h1>
              <p className="text-textGray text-lg">
                Let's get your packages moving
              </p>
            </div>

            {/* Form – no motion wrappers here */}
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name */}
              <div>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Name"
                  required
                  className="w-full px-5 py-4 rounded-xl border border-gray-300 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 bg-white"
                />
              </div>

              {/* Email */}
              <div>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email"
                  required
                  className="w-full px-5 py-4 rounded-xl border border-gray-300 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 bg-white"
                />
              </div>

              {/* Password with proper eye toggle */}
<div className="relative">
  <input
    type={showPassword ? "text" : "password"}
    name="password"
    value={formData.password}
    onChange={handleChange}
    placeholder="Password"
    required
    className="w-full px-5 py-4 rounded-xl border border-gray-300 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 bg-white pr-12"
  />
  
  {/* Eye icon button */}
  <button
    type="button"
    onClick={() => setShowPassword(!showPassword)}
    className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 hover:text-primary transition-colors"
    aria-label={showPassword ? "Hide password" : "Show password"}
  >
    {showPassword ? (
      // Eye closed (hide password)
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" />
      </svg>
    ) : (
      // Eye open (show password)
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
      </svg>
    )}
  </button>

  <p className="text-xs text-textGray mt-2">
    Use 8 or more characters with a mix of letters, numbers & symbols
  </p>
</div>

              {/* Phone Number */}
              <div>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Phone number"
                  className="w-full px-5 py-4 rounded-xl border border-gray-300 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 bg-white"
                />
              </div>

              {/* User Type Dropdown */}
              <div>
                <select
                  name="userType"
                  value={formData.userType}
                  onChange={handleChange}
                  required
                  className="w-full px-5 py-4 rounded-xl border border-gray-300 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 bg-white appearance-none"
                >
                  <option value="">— Select options —</option>
                  <option value="individual">Individual</option>
                  <option value="business">Business</option>
                </select>
              </div>

              {/* Terms Text */}
              <p className="text-sm text-textGray text-center md:text-left">
                By clicking the "Create Account" button below, you agree to DYB
                Africa's{" "}
                <Link href="#" className="text-primary hover:underline">
                  terms of acceptable use
                </Link>
                .
              </p>

              {/* Sign Up Button */}
              <button
                type="submit"
                className="w-full bg-primary text-white py-4 rounded-full font-medium text-lg hover:bg-primary/90 transition mt-2"
              >
                Sign Up
              </button>
            </form>

            {/* Already have account */}
            <p className="text-center text-textGray mt-6">
              Already have an account?{" "}
              <Link href="/login" className="text-primary font-medium hover:underline">
                Sign In
              </Link>
            </p>
          </div>
        </div>
      </div>

      {/* Footer is already in layout.tsx */}
    </div>
  );
}