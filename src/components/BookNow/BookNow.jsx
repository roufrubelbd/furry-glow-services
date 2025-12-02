import React, { useState } from "react";
import { motion } from "framer-motion";
import { CgAddR } from "react-icons/cg";
import toast from "react-hot-toast";

const BookNow = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    date: "",
    time: "",
    petType: "Dog",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Get existing bookings from localStorage
    const bookings = JSON.parse(localStorage.getItem("bookings")) || [];
    // Add new booking
    bookings.push(formData);
    // Save updated bookings back to localStorage
    localStorage.setItem("bookings", JSON.stringify(bookings));

    // Show success toast
    toast.success("Booking successful!");

    // Reset form
    setFormData({
      name: "",
      email: "",
      date: "",
      time: "",
      petType: "Dog",
    });
  };

  return (
    <div className="flex items-center justify-center py-4 my-2 px-4 w-11/12 mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full md:w-3/4 bg-white shadow-xl border border-base-200 rounded-3xl overflow-hidden"
      >
        <div className="grid grid-cols-1 md:grid-cols-2">
          {/* Left Image Section */}
          <motion.div
            initial={{ scale: 1.05 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.8 }}
            className="w-full"
          >
            <img
              src="https://i.postimg.cc/k44r6q9z/winter-grooming-paws-treatment.jpg"
              alt="Pet Booking"
              className="w-full h-full object-cover"
            />
          </motion.div>

          {/* Form Section */}
          <div className="p-4 bg-white flex flex-col justify-center">
            <h2 className="text-3xl font-bold text-green-600 mb-2">
              Book Your Service
            </h2>
            <p className="text-gray-600 mb-2">
              Fill out the details below and schedule your winter pet service
              effortlessly.
            </p>

            <form className="space-y-3" onSubmit={handleSubmit}>
              {/* Name */}
              <div>
                <label className="text-sm font-medium text-gray-600">
                  Your Name
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Enter your full name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="input input-bordered w-full bg-white rounded-xl mt-1"
                />
              </div>

              {/* Email */}
              <div>
                <label className="text-sm font-medium text-gray-600">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="example@domain.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="input input-bordered w-full bg-white rounded-xl mt-1"
                />
              </div>

              {/* Date */}
              <div>
                <label className="text-sm font-medium text-gray-600">
                  Booking Date
                </label>
                <input
                  type="date"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  required
                  className="input input-bordered w-full bg-white rounded-xl mt-1"
                />
              </div>

              {/* Booking Time */}
              <div>
                <label className="text-sm font-medium text-gray-600">
                  Booking Time
                </label>
                <input
                  type="time"
                  name="time"
                  value={formData.time}
                  onChange={handleChange}
                  required
                  className="input input-bordered w-full bg-white rounded-xl mt-1"
                />
              </div>

              {/* Pet Type */}
              <div>
                <label className="text-sm font-medium text-gray-600">
                  Pet Type
                </label>
                <select
                  name="petType"
                  value={formData.petType}
                  onChange={handleChange}
                  className="select select-bordered w-full rounded-xl mt-1 bg-white"
                >
                  <option>Dog</option>
                  <option>Cat</option>
                  <option>Rabbit</option>
                  <option>Other</option>
                </select>
              </div>

              {/* Submit Button */}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn bg-amber-200 text-green-700 hover:bg-green-600 hover:text-white w-full rounded-xl font-semibold flex items-center gap-2 mt-4"
                type="submit"
              >
                <CgAddR size={18} /> Book Now
              </motion.button>
            </form>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default BookNow;
