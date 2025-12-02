import React, { useState } from "react";
import { Link, useLoaderData, useParams } from "react-router";
import toast from "react-hot-toast";
import { CgAddR } from "react-icons/cg";
import { FaStar } from "react-icons/fa";
import { GrView } from "react-icons/gr";

const Details = () => {
  const [sortOption, setSortOption] = useState("");
  const services = useLoaderData();
  const { id } = useParams();

  const service = services.find((service) => service.serviceId == id);

  const {
    serviceName,
    providerName,
    providerEmail,
    price,
    rating,
    slotsAvailable,
    duration,
    location,
    isAvailable,
    maxPetsAllowed,
    category,
    image,
    description,
    serviceId,
  } = service;

  // 🚀 HANDLE BOOKING (SAVE TO LOCAL STORAGE)
  const handleBookService = (event) => {
    event.preventDefault();

    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;

    // Create booking object
    const bookingData = {
      userName: name,
      userEmail: email,
      serviceId,
      serviceName,
      providerName,
      price,
      rating,
      date: new Date().toLocaleString(), 
    };

    // Get old data
    const stored = JSON.parse(localStorage.getItem("bookings")) || [];

    // Push new booking
    stored.push(bookingData);

    // Save back to localStorage
    localStorage.setItem("bookings", JSON.stringify(stored));

    toast.success("Service booked successfully!");

    form.reset();
  };

  return (
    <div className=" bg-green-50 p-4 w-11/12 mx-auto my-6">
      <div className="space-y-4 flex flex-col-reverse md:flex-row md:justify-start md:items-start gap-6">
        {/* book service */}
        <div className="py-2 w-4/5 md:w-1/5">
          <div className="p-2 shadow rounded-lg bg-base-100">
            <h4 className="font-bold text-xl text-center mb-2 text-green-600">
              Book Service
            </h4>

            <form className="space-y-4" onSubmit={handleBookService}>
              <input
                type="text"
                placeholder="Your name"
                name="name"
                required
                className="w-full py-1 px-3 bg-base-100 rounded-lg border border-base-300"
              />
              <input
                type="email"
                placeholder="Your email"
                name="email"
                required
                className="w-full py-1 px-3 bg-base-100 rounded-lg border border-base-300"
              />

              <button className="font-medium text-center btn btn-sm bg-amber-200 text-green-600 hover:bg-green-600 hover:text-white">
                <CgAddR size={13} /> Book Now
              </button>
            </form>
          </div>

          {/* other products */}
          <div className="mt-6">
            <h4 className="font-bold text-xl text-center mb-2 uppercase text-amber-600">
              Explore Others
            </h4>

            {/* Sorting Dropdown */}
            <div className="my-6 flex justify-center">
              <select
                className="select select-sm bg-amber-50 border border-green-300 text-green-700"
                value={sortOption}
                onChange={(e) => setSortOption(e.target.value)}
              >
                <option value="">Sort Products</option>
                <option value="lowToHigh">Price: Low → High</option>
                <option value="highToLow">Price: High → Low</option>
                <option value="rating">Top Rated</option>
                <option value="az">Name: A → Z</option>
                <option value="za">Name: Z → A</option>
              </select>
            </div>

            {/* Sorting Logic */}
            {(() => {
              let sorted = [...services].filter((p) => p.serviceId != id);

              switch (sortOption) {
                case "lowToHigh":
                  sorted.sort((a, b) => a.price - b.price);
                  break;
                case "highToLow":
                  sorted.sort((a, b) => b.price - a.price);
                  break;
                case "rating":
                  sorted.sort((a, b) => b.rating - a.rating);
                  break;
                case "az":
                  sorted.sort((a, b) =>
                    a.serviceName.localeCompare(b.serviceName)
                  );
                  break;
                case "za":
                  sorted.sort((a, b) =>
                    b.serviceName.localeCompare(a.serviceName)
                  );
                  break;
                default:
                  break;
              }

              return (
                <div className="grid grid-cols-1 gap-3">
                  {sorted.map((product) => (
                    <div
                      key={product.serviceId}
                      className="bg-amber-50 shadow p-2 rounded-lg"
                    >
                      <h4 className="font-medium">{product.serviceName}</h4>

                      <div className="flex justify-start items-center gap-4 text-amber-700 mt-1">
                        <span>$ {product.price}</span>
                        <span className="flex justify-start items-center gap-1">
                          <FaStar size={14} /> {product.rating}
                        </span>

                        <Link to={`/services/${product.serviceId}`}>
                          <button className="btn bg-amber-200 text-green-600 btn-xs hover:bg-green-600 hover:text-white">
                            <GrView size={10} /> More
                          </button>
                        </Link>
                      </div>
                    </div>
                  ))}
                </div>
              );
            })()}
          </div>
        </div>

        {/* image */}
        <div className=" p-2 w-4/5 md:w-2/5">
          <img src={image} alt={serviceName} className="rounded-lg" />
        </div>

        {/* service details */}
        <div className="p-2 w-4/5 md:w-2/5">
          <p className="text-2xl text-green-600 font-medium">{serviceName}</p>
          <p> Provider Name: {providerName}</p>
          <p>Provider Email: {providerEmail}</p>
          <p>Category: {category}</p>

          <div className="mt-4">
            <p className="font-medium">Price: ${price}</p>
            <p className="font-medium">Rating: {rating}</p>
            <p>Slots Available: {slotsAvailable}</p>
            <p>Availability: {isAvailable ? "True" : "False"}</p>
            <p>Location: {location}</p>
            <p>Duration: {duration}</p>
            <p>Max Pets Allowed: {maxPetsAllowed}</p>
          </div>

          <p>Description: {description}</p>
        </div>
      </div>
    </div>
  );
};

export default Details;
