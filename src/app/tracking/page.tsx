// src/app/tracking/page.tsx
"use client";

import { useState } from "react";
import FAQSection from "@/components/FAQ"; // your no-image FAQ

// Mock multiple shipments (shown by default or after search)
const mockShipments = [
  {
    id: "20564387654563",
    status: "In transit",
    statusColor: "bg-orange-100 text-orange-800",
    badge: "In progress",
    trackingNumber: "20 5643 8765 4563",
    route: { from: "Lagos", to: "Abuja", current: "Delta" },
    dateFrom: "06/02/25 13:15PM",
    dateTo: "06/02/25 13:15PM",
    price: "N20,000",
    description: "Things",
    weight: "3Kg",
    timeLeft: "8Hrs",
    overallStatus: "In transit",
  },
  {
    id: "2056487654563",
    status: "Delivered",
    statusColor: "bg-green-500 text-green-200",
    badge: "Delivered",
    trackingNumber: "20 5643 8765 4563",
    route: { from: "Lagos", to: "Abuja", current: "Abuja" },
    dateFrom: "06/02/25 13:15PM",
    dateTo: "06/02/25 13:15PM",
    price: "N20,000",
    description: "Things",
    weight: "3Kg",
    timeLeft: "Delivered",
    overallStatus: "Delivered",
  },
];

export default function TrackingPage() {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All"); // "In progress", "Delivered", "All"

  const filteredShipments = mockShipments.filter((shipment) => {
    const matchesSearch = shipment.trackingNumber.includes(search.replace(/\s/g, ""));
    const matchesFilter =
      filter === "All" ||
      (filter === "In progress" && shipment.overallStatus.includes("transit")) ||
      (filter === "Delivered" && shipment.overallStatus === "Delivered");
    return matchesSearch && matchesFilter;
  });

  return (
    <div className="bg-bgLight min-h-screen">
      {/* Title */}
      <section className="pt-16 pb-8 md:pt-20 md:pb-12 px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-textDark mb-4">
          Choose Your Preferred Shipping <br className="hidden sm:inline"></br> Option By Cost
        </h1>
      </section>

      <section className="pb-16 md:pb-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Column: Search + List of Shipments */}
          <div className="space-y-6">
            {/* Search Input */}
            <div className="relative">
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Enter tracking number"
                className="w-full pl-5 pr-16 py-4 rounded-full border border-gray-300 bg-white focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/30"
              />
              <button className="absolute right-2 top-1/2 -translate-y-1/2 bg-primary text-white px-5 py-2 rounded-full text-sm font-medium hover:bg-primary/90">
                Search
              </button>
            </div>

            {/* Filter Tabs */}
            <div className="flex flex-wrap gap-3">
              {["In progress", "Delivered", "All"].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setFilter(tab)}
                  className={`px-6 py-2.5 rounded-full text-sm font-medium transition ${filter === tab
                      ? "bg-primary text-white"
                      : "bg-white text-textGray border border-gray-300 hover:bg-gray-100"
                    }`}
                >
                  {tab}
                </button>
              ))}
            </div>

            {/* Shipment Cards */}
            <div className="space-y-6">
              {filteredShipments.length === 0 ? (
                <p className="text-center text-textGray py-10">No shipments found</p>
              ) : (
                filteredShipments.map((shipment) => (
                  <div
                    key={shipment.id}
                    className="bg-white rounded-2xl shadow-lg p-4 sm:p-6 hover:shadow-xl transition"
                  >
                    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-5">
                      <div>
                        <p className="text-textGray text-xs mb-1">Tracking number</p>
                        <p className="font-bold text-lg">{shipment.trackingNumber}</p>
                      </div>
                      <span
                        className={`px-5 py-1.5 rounded-full text-xs font-medium ${shipment.statusColor}`}
                      >
                        {shipment.overallStatus}
                      </span>
                    </div>

                    {/* Route */}
                    <div className="mb-5">
                      <p className="text-textGray text-xs mb-2">Route</p>
                      <div className="relative flex items-center mb-2">
                        <div className="flex-1 h-1.5 bg-gray-200 rounded-full overflow-hidden">
                          <div
                            className="h-full bg-primary"
                            style={{ width: shipment.overallStatus === "Delivered" ? "100%" : "60%" }}
                          />
                        </div>
                        <div className="absolute left-0 -top-1 w-4 h-4 bg-primary rounded-full border-2 border-white" />
                        <div className="absolute right-0 -top-1 w-4 h-4 bg-primary rounded-full border-2 border-white" />
                      </div>
                      <div className="flex justify-between text-xs">
                        <div>
                          <p className="font-medium">{shipment.route.from}</p>
                          <p className="text-textGray">{shipment.dateFrom}</p>
                        </div>
                        <div className="text-right">
                          <p className="font-medium">{shipment.route.to}</p>
                          <p className="text-textGray">{shipment.dateTo}</p>
                        </div>
                      </div>
                    </div>

                    {/* Details */}
                    <div className="grid grid-cols-3 gap-4 text-xs">
                      <div>
                        <p className="text-textGray">Price</p>
                        <p className="font-medium">{shipment.price}</p>
                      </div>
                      <div>
                        <p className="text-textGray">Description</p>
                        <p className="font-medium">{shipment.description}</p>
                      </div>
                      <div>
                        <p className="text-textGray">Weight</p>
                        <p className="font-medium">{shipment.weight}</p>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>

          {/* Right Column: Map */}
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden h-fit lg:sticky lg:top-8">
            <img
              src="/images/ship.png" // Replace with your actual dark map image
              alt="Shipment route"
              className="w-full h-64 sm:h-80 lg:h-[500px] object-cover"
            />
            <div className="p-5 bg-white/90 backdrop-blur-sm">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 mb-4">
                <p className="font-bold text-base sm:text-lg break-all sm:break-normal">Order #20564387654563</p>
                <span className="bg-orange-500 text-white px-4 py-1.5 rounded-full text-sm font-medium">
                  In transit
                </span>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs">
                <div>
                  <p className="text-textGray">From</p>
                  <p className="font-medium">Lagos</p>
                </div>
                <div>
                  <p className="text-textGray">To</p>
                  <p className="font-medium">Abuja</p>
                </div>
                <div>
                  <p className="text-textGray">Current location</p>
                  <p className="font-medium">Delta</p>
                </div>
                <div>
                  <p className="text-textGray">Time left</p>
                  <p className="font-medium">8Hrs</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <FAQSection />
    </div>
  );
}