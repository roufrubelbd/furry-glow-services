import React from "react";
import "animate.css";
import { Link } from "react-router";

const ErrorPage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-amber-100 text-center px-4 animate__animated animate__fadeIn">
      <div className="text-8xl mb-4 animate__animated animate__bounceIn">
        🐾
      </div>

      <h1 className="text-5xl font-bold text-green-700 mb-2">
        404 - Page Not Found
      </h1>

      <p className="text-grenn-600 mb-6 max-w-md">
        Oops! The page you're looking for doesn’t exist or has been moved. Let’s
        get you back to keeping your pets warm and happy!
      </p>
      <Link
        to="/"
        className="btn bg-green-500 text-white hover:bg-green-600 transition-all duration-300"
      >
        Go Back Home
      </Link>
    </div>
  );
};

export default ErrorPage;
