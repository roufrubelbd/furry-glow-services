import React, { useState } from "react";
import { useLoaderData, Link } from "react-router";
import { motion } from "framer-motion";
import { GrView } from "react-icons/gr";

const Pricing = () => {
  const services = useLoaderData();
  const [sortType, setSortType] = useState("default");

  const sortedServices = [...services].sort((a, b) => {
    if (sortType === "low-to-high") return a.price - b.price;
    if (sortType === "high-to-low") return b.price - a.price;
    return 0;
  });

  return (
    <div className="bg-base-200 px-3 py-3 w-11/12 mx-auto">
      <div className="flex flex-col md:flex-row md:justify-between px-2 w-full md:items-center mb-4">
        {/* Page Title */}
        <h1 className="text-4xl font-medium text-amber-600 mb-6 text-center">
          Service Pricing
        </h1>

        {/* Sorting Dropdown */}
        <div className="w-full md:w-1/2 flex justify-end">
          <select
            className="select select-bordered bg-white"
            value={sortType}
            onChange={(e) => setSortType(e.target.value)}
          >
            <option value="default">Default Sorting</option>
            <option value="low-to-high">Price: Low → High</option>
            <option value="high-to-low">Price: High → Low</option>
          </select>
        </div>
      </div>

      {/* Pricing Grid */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {sortedServices.map((service) => (
          <motion.div
            key={service.serviceId}
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            whileHover={{ scale: 1.04, y: -5, transition: { duration: 0.2 } }}
            className="bg-white shadow p-5 rounded-2xl  hover:shadow-xl transition relative"
          >
            {/* Image */}
            <div className="relative flex justify-between items-start">
              {/* Price - Bigger Font */}
              <p className="font-extrabold text-4xl text-amber-600">
                $ {service.price}
              </p>
              <img
                src={service.image}
                alt={service.serviceName}
                className="rounded-lg w-1/3"
              />
            </div>

            {/* Title */}
            <h2 className="font-bold text-xl text-gray-500 mt-4">
              {service.serviceName}
            </h2>

            <p className="text-sm text-gray-600 mt-3">{service.category}</p>

            {/* Button */}
            <div className="absolute bottom-3 right-3">
              <Link
                to={`/services/${service.serviceId}`}
                className="btn btn-sm bg-amber-200 text-green-600 hover:bg-green-600 hover:text-white mt-4 w-full rounded-xl"
              >
                <GrView size={12} /> View Details
              </Link>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Pricing;
