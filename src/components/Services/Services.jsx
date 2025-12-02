import { GrView } from "react-icons/gr";
import { Link, useLoaderData } from "react-router";

const Services = () => {
  const services = useLoaderData();
  return (
    <div className="min-h-screen bg-green-50 pt-2 pb-6 w-11/12 mx-auto px-2">
      <h1 className="text-xl md:text-3xl font-medium text-center mb-6 text-green-600 animate__animated animate__fadeInUp animate__delay-1s">
        Popular Winter Pet Care Services
      </h1>

      <div className="grid gap-4 grid-cols-1 md:grid-cols-4 max-w-7xl mx-auto">
        {services.map((service, index) => (
          <div
            key={service.serviceId}
            className={`flex flex-col card bg-base-100 shadow transition transform hover:scale-102 animate__animated animate__fadeInUp animate__delay-${
              index + 1
            }s`}
          >
            <figure>
              <img
                src={service.image}
                alt={service.serviceName}
                className="h-40 w-full object-cover"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title text-green-600">
                {service.serviceName}
              </h2>

              <div className="flex justify-between items-center flex-1">
                <p className="font-medium text-sm">Price: ${service.price}</p>
                <Link to={`/services/${service.serviceId}`}>
                  <button className="btn bg-amber-200 text-green-600 btn-xs hover:bg-green-600 hover:text-white">
                    <GrView size={12} /> See More
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
