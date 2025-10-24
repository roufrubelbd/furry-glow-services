import React from "react";
import { useLoaderData, useParams } from "react-router";
import toast from "react-hot-toast";

const Details = () => {
  const services = useLoaderData();
  const { id } = useParams();
  const {
    serviceName,
    providerName,
    providerEmail,
    price,
    rating,
    slotsAvailable,
    category,
    image,
    description,
  } = services.find((service) => service.serviceId == id);

  const handleBookService = (event) => {
    event.preventDefault();
    // const name = event.target.name.value;
    // const email = event.target.email.value;
    toast.success("Service booked successfully.");
    event.target.reset();
  };
  return (
    <div className=" bg-emerald-50 p-8 w-11/12 mx-auto my-10">
      <div className="space-y-4">
          <img
            src={image}
            alt={serviceName}
            className="w-2/3  flex justify-start rounded-lg"
          />
        <div className="space-y-1">          
            <p className="text-2xl text-emerald-600 font-medium">{serviceName}</p>
            <p> Provider Name: {providerName}</p>          
            <p>Provider Email: {providerEmail}</p>
            <p>Category: {category}</p>          
        </div>
        <div className="mt-4 ">
          <p className="font-medium ">Price: ${price}</p>
          <p className="font-medium ">Rating: {rating}</p>
          <p className="font-medium ">
            Slots Available: {slotsAvailable}
          </p>
        </div>
        <p className="">{description}</p>
      </div>
      <div className="p-6 shadow-sm rounded-lg bg-base-100 border border-emerald-200 w-2/5 mt-4">
        <h4 className="font-bold text-xl text-center mb-2 text-emerald-600">
          Book Service
        </h4>
        <form className="space-y-4" onSubmit={handleBookService}>
          <input
            type="text"
            placeholder="Your name"
            name="name"
            required
            className="w-full py-1 px-3 bg-base-100 rounded-lg border border-emerald-200"
          />{" "}
          <br />
          <input
            type="email"
            placeholder="Your email"
            name="email"
            required
            className="w-full py-1 px-3 bg-base-100 rounded-lg border border-emerald-200 "
          />
          <br />
          <input
            type="submit"
            value="Book Now"
            className="font-medium text-center btn btn-outline w-full mt-2 text-emerald-600"
          />
        </form>
      </div>
    </div>
  );
};

export default Details;
