// src/components/ExpertVets.jsx
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";

const Vets = () => {
  const [vets, setVets] = useState([]);

  useEffect(() => {
    fetch("/vets.json")
      .then((response) => response.json())
      .then((data) => setVets(data))
      .catch((error) => toast.error("Error fetching vets data:", error));
  }, []);

  return (
    <div className="py-4 my-14 bg-amber-50 w-11/12 mx-auto">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-amber-600 mb-8 ">
          Meet Our Expert Vets
        </h2>
        <p className="text-gray-600 mb-12 max-w-2xl mx-auto ">
          Our certified veterinarians are passionate about keeping your pets
          healthy, happy, and full of life all year round.
        </p>

        <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 ">
          {vets.map((vet) => (
            <div
              key={vet.id}
              className="card bg-base-100 shadow-sm"
            >
              <figure className="">
                <img
                  src={vet.image}
                  alt={vet.name}
                  className="rounded-t-lg h-46 w-full object-cover"
                />
              </figure>
              <div className="card-body items-center text-center">
                <h3 className="card-title text-green-600">{vet.name}</h3>
                <p className="text-gray-600">{vet.specialty}</p>
                <p className="text-sm font-medium text-gray-500">
                  Experience: {vet.experience}
                </p>
                <div className="card-actions">
                  <button className="btn btn-sm bg-amber-200  text-green-600 hover:bg-green-600 hover:text-white">
                    Contact
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Vets;
