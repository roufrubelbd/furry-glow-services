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
    <div className="py-16 bg-base-200">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-blue-600 mb-8 ">
          Meet Our Expert Vets
        </h2>
        <p className="text-gray-600 mb-12 max-w-2xl mx-auto ">
          Our certified veterinarians are passionate about keeping your pets
          healthy, happy, and full of life all year round.
        </p>

        <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          {vets.map((vet) => (
            <div
              key={vet.id}
              className="card bg-base-100 shadow-sm border border-base-300"
            >
              <figure className="px-6 pt-6">
                <img
                  src={vet.image}
                  alt={vet.name}
                  className="rounded-xl h-56 w-full object-cover"
                />
              </figure>
              <div className="card-body items-center text-center">
                <h3 className="card-title text-blue-600">{vet.name}</h3>
                <p className="text-gray-600">{vet.specialty}</p>
                <p className="text-sm font-medium text-gray-500">
                  Experience: {vet.experience}
                </p>
                <div className="card-actions mt-3">
                  <button className="btn bg-emerald-500 mt-5  text-white hover:bg-emerald-600">
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
