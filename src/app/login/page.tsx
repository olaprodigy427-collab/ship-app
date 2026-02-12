// src/app/login/page.tsx
"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Mock login
    alert("Signed in successfully! (Mock)");
  };

  return (
    <div className="min-h-screen bg-bgLight flex flex-col">
      <div className="flex-1 grid md:grid-cols-2 gap-0">
        {/* Left: Form Section */}
        <div className="flex items-center justify-center px-6 py-12 md:px-12 lg:px-20">
          <div className="w-full max-w-md">
            {/* Welcome Text */}
            <div className="text-center md:text-left mb-10">
              <h1 className="text-4xl md:text-5xl font-bold text-textDark mb-4">Welcome Back</h1>
              <p className="text-textGray text-base md:text-lg leading-relaxed">
                "Welcome! Your journey to seamless delivery starts here. Track, ship, and move forward with confidence."
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-textDark font-medium mb-2">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  required
                  className="w-full px-5 py-4 rounded-xl border border-gray-300 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 bg-white"
                />
              </div>

              {/* Password */}
            <div className="space-y-2">
            <label htmlFor="password" className="block text-textDark font-medium">
                Password
            </label>
            <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
                required
                className="w-full px-5 py-4 rounded-xl border border-gray-300 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 bg-white"
            />
            <div className="text-right">
                <Link href="/forgot-password" className="text-primary hover:underline text-sm">
                Forgot Password?
                </Link>
            </div>
            </div>

              {/* Sign In Button */}
              <button
                type="submit"
                className="w-full bg-primary text-white py-4 rounded-full font-medium text-lg hover:bg-primary/90 transition mt-2"
              >
                Sign In
              </button>
            </form>

            {/* Or Divider */}
            <div className="flex items-center my-8">
              <div className="flex-1 h-px bg-gray-300"></div>
              <span className="px-4 text-textGray text-sm">Or</span>
              <div className="flex-1 h-px bg-gray-300"></div>
            </div>

            {/* Social Login Buttons */}
            <div className="space-y-4">
              <button className="w-full flex items-center justify-center gap-3 border border-gray-300 rounded-xl py-4 hover:bg-gray-50 transition">
                <svg className="w-6 h-6" viewBox="0 0 24 24">
                  <path
                    fill="#4285F4"
                    d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.51h5.84c-.25 1.31-.98 2.42-2.07 3.16v2.63h3.35c1.96-1.81 3.09-4.46 3.09-7.99z"
                  />
                  <path
                    fill="#34A853"
                    d="M12 23c2.97 0 5.46-1.01 7.28-2.73l-3.35-2.63c-1.01.68-2.29 1.08-3.93 1.08-3.02 0-5.58-2.04-6.49-4.79H.96v2.67C2.77 20.39 6.62 23 12 23z"
                  />
                  <path
                    fill="#FBBC05"
                    d="M5.51 14.21c-.23-.68-.36-1.41-.36-2.21s.13-1.53.36-2.21V7.34H.96C.35 8.85 0 10.39 0 12s.35 3.15.96 4.66l4.55-2.45z"
                  />
                  <path
                    fill="#EA4335"
                    d="M12 4.98c1.64 0 3.11.56 4.27 1.66l3.19-3.19C17.46 1.01 14.97 0 12 0 6.62 0 2.77 2.61.96 6.34l4.55 2.45C6.42 6.02 8.98 4.98 12 4.98z"
                  />
                </svg>
                <span className="font-medium">Sign In with Google</span>
              </button>

              <button className="w-full flex items-center justify-center gap-3 border border-gray-300 rounded-xl py-4 hover:bg-gray-50 transition">
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="#000">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.06 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                </svg>
                <span className="font-medium">Sign In with Apple</span>
              </button>
            </div>

            {/* Sign Up Link */}
            <p className="text-center text-textGray mt-8">
              Don't have an account?{" "}
              <Link href="/signup" className="text-primary font-medium hover:underline">
                Sign Up
              </Link>
            </p>
          </div>
        </div>

        {/* Right: Image (desktop only visible) */}
        <div className="hidden md:block relative">
          <div className="absolute inset-0 bg-gradient-to-r from-bgLight via-transparent to-bgLight pointer-events-none"></div>
          <Image
            src="/images/pali.png"
            alt="Stacked packages"
            fill
            className="object-cover object-center rounded-l-3xl"
            priority
          />
        </div>
      </div>

      {/* Footer (already in layout.tsx - no need to include here) */}
    </div>
  );
}