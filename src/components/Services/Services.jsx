import React from 'react';
import { Link, useLoaderData } from 'react-router';

const Services = () => {
    const services = useLoaderData();
    return (
        <div className="min-h-screen bg-base-200 py-10 px-4">
      <h1 className="text-3xl font-bold text-center mb-10 text-blue-600 animate__animated animate__fadeInUp animate__delay-1s">
        Popular Winter Pet Care Services
      </h1>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
        {services.map((service, index) => (
          <div
            key={service.serviceId}
            className={`card bg-base-100 shadow-xl border border-base-300 p-4 animate__animated animate__fadeInUp animate__delay-${
              index + 1
            }s`}
          >
            <figure>
              <img
                src={service.image}
                alt={service.serviceName}
                className="h-56 w-full object-cover"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title text-blue-600">{service.serviceName}</h2>

              <div className="mt-4 flex justify-between items-center">
                <p className="font-medium text-sm">Price: ${service.price}</p>
                <p className="font-medium text-sm">Rating: {service.rating}</p>
              </div>
              <div className="card-actions mt-2 justify-center">
                <Link to={`/services/${service.serviceId}`}>
                  <button className="btn bg-emerald-500 text-white btn-sm">
                    View Details
                  </button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
    );
};

export default Services;