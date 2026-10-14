import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, GraduationCap } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Facilities', path: '/facilities' },
    { name: 'Admissions', path: '/admissions' },
    { name: 'Events & Notices', path: '/events' },
  ];

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <div className="bg-teal-600 text-white p-2.5 rounded-xl">
              <GraduationCap className="h-7 w-7" />
            </div>
            <div>
              <span className="text-xl font-extrabold text-slate-900 block leading-tight">EAK International</span>
              <span className="text-xs text-slate-500 font-medium tracking-wider">SCHOOL</span>
            </div>
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`text-sm font-semibold transition ${
                    isActive ? 'text-teal-600 font-bold' : 'text-slate-600 hover:text-teal-600'
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
            <Link
              to="/admissions"
              className="bg-teal-600 hover:bg-teal-700 text-white text-sm font-bold px-5 py-2.5 rounded-xl shadow-sm transition"
            >
              Apply Now
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-700 hover:text-teal-600 focus:outline-none"
            >
              {isOpen ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-slate-100 px-4 pt-4 pb-6 space-y-3 shadow-lg">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              onClick={() => setIsOpen(false)}
              className="block px-3 py-2 rounded-lg text-base font-medium text-slate-700 hover:bg-teal-50 hover:text-teal-600"
            >
              {link.name}
            </Link>
          ))}
          <Link
            to="/admissions"
            onClick={() => setIsOpen(false)}
            className="block text-center w-full bg-teal-600 text-white font-bold py-3 rounded-xl mt-4"
          >
            Apply Now
          </Link>
        </div>
      )}
    </nav>
  );
}