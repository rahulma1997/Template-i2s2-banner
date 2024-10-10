import React from 'react';
import i2s2 from "../image/i2s2logo1.png";

const Header = () => {
  return (
    <header className="header sticky top-0 flex items-center bg-white shadow-md z-50">
      <div className="container mx-auto flex items-center justify-between px-4 py-2">
        <a href="index.html" className="logo flex items-center">
          <img src={i2s2} className='h-12' alt="i2s2 Logo" />
        </a>

        <nav className="navmenu">
          <ul className="flex space-x-9 font-light">
            <li><a href="index.html" className="active text-blue-500">Home</a></li>
            <li className="relative group">
              <a href="#" className="hover:text-blue-500">Product</a>
              <ul className="absolute hidden w-44 pt-4 bg-white shadow-lg group-hover:block">
                <li><a href="#" className="block px-4 py-2">Industrial</a></li>
                <li><a href="#" className="block px-4 py-2">Lifestyle</a></li>
                <li><a href="#" className="block px-4 py-2">Medical</a></li>
                <li><a href="#" className="block px-4 py-2">Jewelry</a></li>
                <li><a href="#" className="block px-4 py-2">Retail</a></li>
                <li><a href="#" className="block px-4 py-2">Waterproof</a></li>
                <li><a href="#" className="block px-4 py-2">Commercial Scales</a></li>
              </ul>
            </li>
            <li className="relative group">
              <a href="#" className="hover:text-blue-500">Weighbridge</a>
              <ul className="absolute hidden w-60 pt-4 bg-white shadow-lg group-hover:block">
                <li><a href="#" className="block px-4 py-2">Pit weighbridges</a></li>
                <li><a href="#" className="block px-4 py-2">Pitless weighbridges</a></li>
                <li><a href="#" className="block px-4 py-2">Surface mount weighbridges</a></li>
                <li><a href="#" className="block px-4 py-2">Load cells</a></li>
                <li><a href="#" className="block px-4 py-2">Junction Box</a></li>
                <li><a href="#" className="block px-4 py-2">Digital weighing Terminal</a></li>
                <li><a href="#" className="block px-4 py-2">Remote Display</a></li>
                <li><a href="#" className="block px-4 py-2">Weighing Software</a></li>
              </ul>
            </li>
            <li className="relative group">
              <a href="#" className="hover:text-blue-500">System and Solutions</a>
              <ul className="absolute hidden w-60 pt-4 bg-white shadow-lg group-hover:block">
                <li><a href="#" className="block px-4 py-2">Check Weighing System</a></li>
                <li><a href="#" className="block px-4 py-2">Tank Weighing System</a></li>
                <li><a href="#" className="block px-4 py-2">Hopper Weighing System</a></li>
                <li><a href="#" className="block px-4 py-2">Silo Weighing System</a></li>
                <li><a href="#" className="block px-4 py-2">Axle Pads System</a></li>
              </ul>
            </li>
            <li className="relative group">
              <a href="#" className="hover:text-blue-500">Gallery</a>
              <ul className="absolute hidden w-60 pt-4 bg-white shadow-lg group-hover:block">
                <li><a href="#" className="block px-4 py-2">Our Factory</a></li>
                <li><a href="#" className="block px-4 py-2">Corporate Office</a></li>
                <li><a href="#" className="block px-4 py-2">Customer Experience Center</a></li>
                <li><a href="#" className="block px-4 py-2">Training Room</a></li>
                <li><a href="#" className="block px-4 py-2">Clean Room</a></li>
                <li><a href="#" className="block px-4 py-2">Testing & Calibration</a></li>
                <li><a href="#" className="block px-4 py-2">Project Rooms</a></li>
                <li><a href="#" className="block px-4 py-2">M.Tech Workshop</a></li>
                <li><a href="#" className="block px-4 py-2">WB Testing And Calibration</a></li>
                <li><a href="#" className="block px-4 py-2">Stores</a></li>
                <li><a href="#" className="block px-4 py-2">Cafeteria</a></li>
                <li><a href="#" className="block px-4 py-2">Activities</a></li>
              </ul>
            </li>
            <li><a href="about.html" className="hover:text-blue-500">About</a></li>
            <li className="relative group">
              <a href="services.html" className="hover:text-blue-500">Services</a>
              <ul className="absolute hidden w-52 pt-4 bg-white shadow-lg group-hover:block">
                <li><a href="#" className="block px-4 py-2">Services Provided</a></li>
                <li><a href="#" className="block px-4 py-2">Request for Support</a></li>
                <li><a href="#" className="block px-4 py-2">Calibration and Services</a></li>
              </ul>
            </li>
            <li className="relative group">
              <a href="#" className="hover:text-blue-500">Product Video</a>
              <ul className="absolute hidden w-80 pt-4 bg-white shadow-lg group-hover:block">
                <li><a href="#" className="block px-4 py-2">Splash Series Platform Scale</a></li>
                <li><a href="#" className="block px-4 py-2">Aqua Table Top Scale</a></li>
                <li><a href="#" className="block px-4 py-2">Axle Pad Light Vehicle 1</a></li>
                <li><a href="#" className="block px-4 py-2">Axle Pad Light Vehicle 2</a></li>
                <li><a href="#" className="block px-4 py-2">Axle Pad Heavy Vehicle 1</a></li>
                <li><a href="#" className="block px-4 py-2">Axle Pad Heavy Vehicle 2</a></li>
                <li><a href="#" className="block px-4 py-2">H2O Series Platform Scale</a></li>
                <li><a href="#" className="block px-4 py-2">Conveyor Weighing System for Bags</a></li>
                <li><a href="#" className="block px-4 py-2">Conveyor Weighing System for Boxes</a></li>
                <li><a href="#" className="block px-4 py-2">Conveyor Weighing System</a></li>
                <li><a href="#" className="block px-4 py-2">Conveyor Weighing System for Cartons</a></li>
              </ul>
            </li>
            <li><a href="blog-details.html" className="hover:text-blue-500">Blog</a></li>
            <li><a href="contact.html" className="hover:text-blue-500">Contact</a></li>
          </ul>
        </nav>

        <a className="btn-getstarted bg-red-600 text-white px-4 py-2 rounded" href="about.html">Get Started</a>
      </div>
    </header>
  );
};

export default Header;
