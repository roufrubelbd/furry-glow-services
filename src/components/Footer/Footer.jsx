import React from "react";
import { FiGithub, FiInstagram, FiFacebook, FiMail } from "react-icons/fi";

const Footer = () => {
  return (
    <footer className="bg-emerald-50 border-t border-emerald-200 mt-10">
      <div className="container mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Brand Section */}
        <div>
          <h2 className="text-2xl font-bold text-emerald-700 mb-3">
            Pet Winter Care
          </h2>
          <p className="text-sm text-emerald-700">
            Keeping your pets cozy, happy, and healthy through every cold season.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-emerald-700 mb-3">
            Quick Links
          </h3>
          <ul className="space-y-2 text-emerald-600 text-sm">
            <li>
              <a href="/" className="hover:text-emerald-900">
                Home
              </a>
            </li>
            <li>
              <a href="/about" className="hover:text-emerald-900">
                About Us
              </a>
            </li>
            <li>
              <a href="/tips" className="hover:text-emerald-900">
                Winter Care Tips
              </a>
            </li>
            <li>
              <a href="/contact" className="hover:text-emerald-900">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Resources */}
        <div>
          <h3 className="text-lg font-semibold text-emerald-700 mb-3">
            Resources
          </h3>
          <ul className="space-y-2 text-emerald-600 text-sm">
            <li>
              <a href="/faq" className="hover:text-emerald-900">
                FAQs
              </a>
            </li>
            <li>
              <a href="/blog" className="hover:text-emerald-900">
                Blog
              </a>
            </li>
            <li>
              <a href="/privacy" className="hover:text-emerald-900">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="/terms" className="hover:text-emerald-900">
                Terms of Service
              </a>
            </li>
          </ul>
        </div>

        {/* Contact & Socials */}
        <div>
          <h3 className="text-lg font-semibold text-emerald-700 mb-3">
            Get in Touch
          </h3>
          <p className="text-sm text-emerald-700 mb-4">
            Have questions? Reach out or follow us online.
          </p>
          <div className="flex space-x-4">
            <a
              href="mailto:info@petwintercare.com"
              className="text-emerald-700 hover:text-emerald-900"
            >
              <FiMail size={20} />
            </a>
            <a
              href="https://github.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="text-emerald-700 hover:text-emerald-900"
            >
              <FiGithub size={20} />
            </a>
            <a
              href="https://instagram.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="text-emerald-700 hover:text-emerald-900"
            >
              <FiInstagram size={20} />
            </a>
            <a
              href="https://facebook.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="text-emerald-700 hover:text-emerald-900"
            >
              <FiFacebook size={20} />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-emerald-100 py-3 text-center text-sm text-emerald-700">
        &copy; {new Date().getFullYear()} Pet Winter Care. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
