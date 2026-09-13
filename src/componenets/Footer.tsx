import React from 'react';
import logo from "../assets/logo-text.png"
const Footer = () => {
    return (
      <footer className="w-full bg-white text-gray-500 font-sans pt-12 pb-8 px-8">
  <div className="max-w-6xl mx-auto">
    <div className="flex sm:flex-row flex-col justify-between items-start pb-12">
      <div className="w-80">
        <div className="flex gap-2 mb-3">
         <img src={logo} alt="" />
        </div>
        <p className="text-xs text-gray-400 leading-relaxed mb-4">
          Curated tools, technologies, and resources for developers building modern software.
        </p>
        <div className="flex gap-4 text-xs font-semibold text-gray-700">
          <a href="#">GitHub</a>
          <a href="#">Twitter</a>
          <a href="#">LinkedIn</a>
        </div>
      </div>
      <div className="flex sm:gap-20 gap-2.5 text-xs">
        <div>
          <h4 className="font-bold text-gray-900 mb-3 tracking-wider">PRODUCT</h4>
          <div className="flex flex-col gap-2">
            <a href="#">Home</a>
            <a href="#">Technologies</a>
            <a href="#">Projects</a>
          </div>
        </div>
       <div>
          <h4 className="font-bold text-gray-900 mb-3 tracking-wider">COMPANY</h4>
          <div className="flex flex-col gap-2">
            <a href="#">About</a>
            <a href="#">Contact</a>
            <a href="#">Careers</a>
          </div>
        </div>
        <div>
          <h4 className="font-bold text-gray-900 mb-3 tracking-wider">LEGAL</h4>
          <div className="flex flex-col gap-2">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
          </div>
        </div>
      </div>

    </div>
        <div className="border-t border-gray-100 pt-6 flex justify-between items-center text-xs text-gray-400">
      <p>© 2026 Dev Stack. All rights reserved.</p>
          <div className="flex gap-4">
        <a href="#">Privacy</a>
        <a href="#">Terms</a>
      </div>
    </div>
  </div>
</footer>
    );
};

export default Footer;