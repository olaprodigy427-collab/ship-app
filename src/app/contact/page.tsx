// src/app/contact/page.tsx
"use client";

import { useState } from "react";
import FAQSection from "@/components/FAQ";
import Link from "next/link";
import { MdEmail, MdLocationOn } from "react-icons/md";
import { FaWhatsapp } from "react-icons/fa";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    reason: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Message sent successfully! (Mock)");
    // Reset form
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      reason: "",
      message: "",
    });
  };

  return (
    <div className="bg-bgLight min-h-screen">
      {/* Support Center Header */}
      <section className="pt-16 pb-10 md:pt-24 md:pb-16 px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-textDark mb-8">Support Center</h1>

        {/* Tabs */}
        <div className="flex justify-start md:justify-center gap-6 md:gap-12 text-base md:text-lg font-medium border-b border-gray-200 pb-4 overflow-x-auto px-4 scrollbar-hide">
          <Link
            href="#faq-section"
            className="text-textGray hover:text-primary transition-colors whitespace-nowrap font-semibold border-b-2 border-transparent hover:border-primary pb-1"
          >
            FAQ'S
          </Link>
          <Link
            href="#socials-section"
            className="text-textGray hover:text-primary transition-colors whitespace-nowrap font-semibold border-b-2 border-transparent hover:border-primary pb-1"
          >
            Socials
          </Link>
          <Link
            href="#message-form"
            className="text-textGray hover:text-primary transition-colors whitespace-nowrap font-semibold border-b-2 border-transparent hover:border-primary pb-1"
          >
            Send Message
          </Link>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="grid md:grid-cols-2 gap-10 lg:gap-16">
          {/* Left Column - Contact Information */}
          <div>
            <h2 className="text-3xl font-bold text-textDark mb-6">Contact Us</h2>
            <p className="text-textGray mb-10 leading-relaxed">
              For any urgent inquiries, please contact us using the details provided below.
            </p>

            <div className="space-y-8">
              {/* Email */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12  rounded-full flex items-center justify-center flex-shrink-0">
                  <MdEmail className="text-2xl text-orange-600" />
                </div>
                <div className="pt-2">
                  <p className="font-medium text-textDark">Email</p>
                  <p className="text-textGray">support@doyinbo-logistics.com</p>
                </div>
              </div>

              {/* WhatsApp */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full flex items-center justify-center shrink-0">
                  <FaWhatsapp className="text-2xl text-orange-600" />
                </div>
                <div className="pt-2">
                  <p className="font-medium text-textDark">WhatsApp</p>
                  <p className="text-textGray">Click to chat with us on Whatsapp</p>
                </div>
              </div>

              {/* Address */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12  rounded-full flex items-center justify-center shrink-0">
                  <MdLocationOn className="text-2xl text-orange-600" />
                </div>
                <div className="pt-2">
                  <p className="font-medium text-textDark">Our Location</p>
                  <p className="text-textGray">1234 Main Street, Victoria Island, Lagos, Nigeria</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Contact Form Card */}
          <div id="message-form" className="bg-white rounded-3xl shadow-xl p-6 sm:p-8 md:p-10">
            <h3 className="text-xl md:text-2xl font-semibold mb-8 text-center md:text-left">
              Have a question for us? Let us know & we will respond within 24 hours
            </h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  placeholder="First Name"
                  required
                  className="w-full px-5 py-4 rounded-xl border border-gray-200 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
                />
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  placeholder="Last Name"
                  required
                  className="w-full px-5 py-4 rounded-xl border border-gray-200 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
                />
              </div>

              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email"
                required
                className="w-full px-5 py-4 rounded-xl border border-gray-200 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
              />

              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Phone Number"
                className="w-full px-5 py-4 rounded-xl border border-gray-200 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
              />

              <select
                name="reason"
                value={formData.reason}
                onChange={handleChange}
                required
                className="w-full px-5 py-4 rounded-xl border border-gray-200 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 bg-white appearance-none"
              >
                <option value="">Reason for enquiry</option>
                <option value="shipping">Shipping Enquiry</option>
                <option value="tracking">Tracking Issue</option>
                <option value="complaint">Complaint</option>
                <option value="partnership">Partnership</option>
                <option value="other">Other</option>
              </select>

              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Message"
                rows={5}
                required
                className="w-full px-5 py-4 rounded-xl border border-gray-200 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 resize-y"
              />

              {/* reCAPTCHA Mock */}
              <div className="flex items-center gap-4 bg-gray-50 p-4 rounded-xl border border-gray-200">
                <input type="checkbox" className="w-6 h-6 accent-primary" />
                <span className="text-sm text-textGray">I'm not a robot</span>
                <div className="ml-auto text-xs text-gray-500">reCAPTCHA • Privacy • Terms</div>
              </div>

              <button
                type="submit"
                className="w-full bg-primary text-white py-4 rounded-full font-medium text-lg hover:bg-primary/90 transition mt-4"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div id="faq-section">
        <FAQSection />
      </div>
    </div>
  );
}