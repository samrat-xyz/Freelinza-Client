import React from "react";
import { Link } from "react-router";
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10 px-6 mt-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
       
        <div>
          <h2 className="text-white text-2xl font-bold mb-3">Freelinza</h2>
          <p className="text-sm leading-relaxed">
            Connect, collaborate, and create with top freelancers around the world.
          </p>
        </div>

        
        <div>
          <h3 className="text-white font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><Link to="/" className="hover:text-pink-400">Home</Link></li>
            <li><Link to="/jobs" className="hover:text-pink-400">All Jobs</Link></li>
            <li><Link to="/add-job" className="hover:text-pink-400">Add a Job</Link></li>
            <li><Link to="/tasks" className="hover:text-pink-400">My Accepted Tasks</Link></li>
          </ul>
        </div>

       
        <div>
          <h3 className="text-white font-semibold mb-3">Support</h3>
          <ul className="space-y-2 text-sm">
            <li><Link to="/help" className="hover:text-pink-400">Help Center</Link></li>
            <li><Link to="/privacy" className="hover:text-pink-400">Privacy Policy</Link></li>
            <li><Link to="/terms" className="hover:text-pink-400">Terms & Conditions</Link></li>
            <li><Link to="/contact" className="hover:text-pink-400">Contact Us</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="text-white font-semibold mb-3">Follow Us</h3>
          <div className="flex space-x-4">
            <Link to="#" className="hover:text-pink-400"><Facebook size={20} /></Link>
            <Link to="#" className="hover:text-pink-400"><Twitter size={20} /></Link>
            <Link to="#" className="hover:text-pink-400"><Instagram size={20} /></Link>
            <Link to="#" className="hover:text-pink-400"><Linkedin size={20} /></Link>
          </div>
        </div>
      </div>
      <div className="border-t border-gray-700 mt-8 pt-5 text-center text-sm text-gray-400">
        © {new Date().getFullYear()} Freelinza. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
