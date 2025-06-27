import React from "react";
import { FaTwitter, FaFacebookF, FaTiktok, FaInstagram } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-12 ">
      <div className="container mx-auto text-center grid px-5 grid-cols-1 md:grid-cols-3 gap-8">
        {/* Company Info */}
        <div>
          <h2 className="text-2xl font-bold mb-4">cyber</h2>
          <p className="text-gray-400 mb-6">
            We are a residential interior design firm located in Portland. Our boutique-studio offers more than
          </p>
          <div className="flex gap-4 justify-center text-xl">
            <FaTwitter className="cursor-pointer hover:text-[#ff0096]" />
            <FaFacebookF className="cursor-pointer hover:text-[#ff0096]" />
            <FaTiktok className="cursor-pointer hover:text-[#ff0096]" />
            <FaInstagram className="cursor-pointer hover:text-[#ff0096]" />
          </div>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-lg font-bold mb-4">Services</h3>
          <ul className="space-y-2 text-gray-400">
            <li className="hover:text-white cursor-pointer">Bonus program</li>
            <li className="hover:text-white cursor-pointer">Gift cards</li>
            <li className="hover:text-white cursor-pointer">Credit and payment</li>
            <li className="hover:text-white cursor-pointer">Service contracts</li>
            <li className="hover:text-white cursor-pointer">Non-cash account</li>
            <li className="hover:text-white cursor-pointer">Payment</li>
          </ul>
        </div>

        {/* Assistance */}
        <div>
          <h3 className="text-lg font-bold mb-4">Assistance to the buyer</h3>
          <ul className="space-y-2 text-gray-400">
            <li className="hover:text-white cursor-pointer">Find an order</li>
            <li className="hover:text-white cursor-pointer">Terms of delivery</li>
            <li className="hover:text-white cursor-pointer">Exchange and return of goods</li>
            <li className="hover:text-white cursor-pointer">Guarantee</li>
            <li className="hover:text-white cursor-pointer">Frequently asked questions</li>
            <li className="hover:text-white cursor-pointer">Terms of use of the site</li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
