import React from "react";
import { FiGithub, FiInstagram, FiFacebook, FiMail } from "react-icons/fi";
import { SiFurrynetwork } from "react-icons/si";
import { Link } from "react-router";

const Footer = () => {
  return (
    <footer className="bg-green-50  mt-10">
      <div className="container mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Brand Section */}
        <div>
          <Link
            className="flex justify-start items-center gap-1 text-green-600 mb-4"
            to="/"
          >
            <SiFurrynetwork size={24} />
            <h1 className="text-xl md:text-2xl">
              <span className="">Furry</span>
              <span className=" font-bold">Glow</span>
            </h1>
          </Link>
          <p className="text-sm">
            Keeping your pets cozy, happy, and healthy through every cold
            season.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-green-700 mb-3">
            Quick Links
          </h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="/" className="hover:text-green-900">
                Home
              </a>
            </li>
            <li>
              <a href="/services" className="hover:text-green-900">
                Services
              </a>
            </li>
            <li>
              <a href="/pricing" className="hover:text-green-900">
                Pricing
              </a>
            </li>
            <li>
              <a href="/booknow" className="hover:text-green-900">
                Book Now
              </a>
            </li>
          </ul>
        </div>

        {/* Resources */}
        <div>
          <h3 className="text-lg font-semibold text-green-700 mb-3">
            Resources
          </h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="/services" className="hover:text-green-900">
                FAQs
              </a>
            </li>
            <li>
              <a href="/services" className="hover:text-green-900">
                Blog
              </a>
            </li>
            <li>
              <a href="/services" className="hover:text-green-900">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="/services" className="hover:text-green-900">
                Terms of Service
              </a>
            </li>
          </ul>
        </div>

        {/* Contact & Socials */}
        <div>
          <h3 className="text-lg font-semibold text-green-700 mb-3">
            Get in Touch
          </h3>
          <p className="text-sm  mb-4">
            Have questions? Reach out or follow us online.
          </p>
          <div className="flex space-x-4">
            <a
              href="https://github.com/roufrubelbd"
              className="text-amber-500 hover:text-green-900"
            >
              <FiMail size={20} />
            </a>
            <a
              href="https://github.com/roufrubelbd"
              target="_blank"
              rel="noopener noreferrer"
              className="text-amber-500 hover:text-green-900"
            >
              <FiGithub size={20} />
            </a>
            <a
              href="https://instagram.com/roufrubelbd"
              target="_blank"
              rel="noopener noreferrer"
              className="text-amber-500 hover:text-green-900"
            >
              <FiInstagram size={20} />
            </a>
            <a
              href="https://facebook.com/roufrubelbd"
              target="_blank"
              rel="noopener noreferrer"
              className="text-amber-500 hover:text-green-900"
            >
              <FiFacebook size={20} />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-green-100 py-3 text-center text-sm text-green-700">
        &copy; {new Date().getFullYear()} FurryGrow @Pet Winter Care. All rights
        reserved.
      </div>
    </footer>
  );
};

export default Footer;
