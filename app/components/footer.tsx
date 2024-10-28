// footer.tsx
import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="w-full bg-gray-200 py-1">
      <div className="flex flex-col lg:flex-row justify-between items-center w-[96%] mx-auto gap-y-1">
        <h1 className="text-2xl lg:text-4xl font-bold text-blue-800">Sanjeevani</h1>

        <nav className="grid grid-cols-2 grid-rows-6 lg:grid-cols-2 lg:grid-rows-3 gap-y-4 text-center lg:text-left">
          <a href="#about" className="text-lg lg:text-xl hover:underline">About Us</a>
          <a href="#help" className="text-lg lg:text-xl hover:underline">Help</a>
          <a href="#contact" className="text-lg lg:text-xl hover:underline">Contact Us</a>
          <a href="#privacy" className="text-lg lg:text-xl hover:underline">Privacy Policy</a>
          <a href="#terms" className="text-lg lg:text-xl hover:underline">Terms and Conditions</a>
        </nav>

        <div className="flex gap-6">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-2xl text-blue-600 hover:text-blue-800">
            <FaFacebook />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-2xl text-pink-600 hover:text-pink-800">
            <FaInstagram />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-2xl text-blue-400 hover:text-blue-600">
            <FaTwitter />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-2xl text-blue-700 hover:text-blue-900">
            <FaLinkedin />
          </a>
        </div>
      </div>
      <div className="mt-8 text-center text-sm text-gray-600">
        © {new Date().getFullYear()} Sanjeevani. All Rights Reserved.
      </div>
    </footer>
  );
}
