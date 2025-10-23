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
    const name = event.target.name.value;
    const email = event.target.email.value;

   toast.success(`Service booked successfully for ${name}! 
    Confirmation sent to ${email}.`);
    event.target.reset();
  }
  return (
    <div className="card bg-base-100 border border-base-300 p-4 w-8/12 mx-auto my-10">
      <div>
        <figure>
          <img src={image} alt={serviceName} className="w-1/3 object-cover" />
        </figure>
        <div className="flex justify-left gap-10 items-center">
          <div>
            <p>{serviceName}</p>
            <p>{providerName}</p>
          </div>
          <div>
            <p>{providerEmail}</p>
            <p>{category}</p>
          </div>
        </div>
        <div className="mt-4 ">
          <p className="font-medium text-sm">Price: ${price}</p>
          <p className="font-medium text-sm">Rating: {rating}</p>
          <p className="font-medium text-sm">
            Slots Available: {slotsAvailable}
          </p>
        </div>
        <p className="">{description}</p>
      </div>
      <div className="p-6 shadow-sm rounded-lg bg-emerald-300 w-2/5 mt-4">
        <h4 className="font-medium text-center mb-2 text-emerald-800">Book Service</h4>
        <form className="space-y-2" onSubmit={handleBookService}>
          <input
            type="text"
            placeholder="your name"
            name="name"
            required
            className="w-full py-1 px-3 bg-base-100 rounded-lg"
          />{" "}
          <br />
          <input
            type="email"
            placeholder="your email"
            name="email"
            required
            className="w-full py-1 px-3 bg-base-100 rounded-lg "
          />
          <br />
          <input

            type="submit"
            value="Book Now"
            className="font-medium text-center btn btn-outline btn-sm w-full mt-2 text-emerald-800"
          />
        </form>
      </div>
    </div>
  );
};

export default Details;
