import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Home, Search, Bell, Mail, User, ChevronDown } from "lucide-react"; // Icônes de Lucide

function NavBar() {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <nav className="bg-blue-800 text-white p-4 flex justify-between items-center">
      {/* Logo */}
      <div>
        <Link to="/" className="text-xl font-bold flex items-center space-x-2">
          <Home className="h-6 w-6" /> {/* Icône de la maison */}
          <span>EKO</span>
        </Link>
      </div>

      {/* Icônes principales */}
      <div className="space-x-6 flex items-center">
        <Link to="/" className="text-2xl">
          <Home className="h-6 w-6" /> {/* Home icon */}
        </Link>
        <Link to="/explore" className="text-2xl">
          <Search className="h-6 w-6" /> {/* Search icon */}
        </Link>
        <Link to="/notifications" className="text-2xl">
          <Bell className="h-6 w-6" /> {/* Notifications icon */}
        </Link>
        <Link to="/messages" className="text-2xl">
          <Mail className="h-6 w-6" /> {/* Messages icon */}
        </Link>
        <Link to="/profile" className="text-2xl">
          <User className="h-6 w-6" /> {/* Profile icon */}
        </Link>
      </div>

      {/* Menu déroulant */}
      <div className="relative">
        <button
          onClick={toggleDropdown}
          className="flex items-center space-x-1 text-white hover:text-gray-200"
        >
          <span>Menu</span>
          <ChevronDown className="h-5 w-5" />
        </button>

        {dropdownOpen && (
          <div className="absolute right-0 mt-2 bg-white text-gray-800 rounded-lg shadow-lg w-48">
            <Link
              to="/settings"
              className="block px-4 py-2 hover:bg-gray-100"
              onClick={() => setDropdownOpen(false)}
            >
              Paramètres
            </Link>
            <Link
              to="/favorites"
              className="block px-4 py-2 hover:bg-gray-100"
              onClick={() => setDropdownOpen(false)}
            >
              Signets
            </Link>
            <Link
              to="/privacy-policy"
              className="block px-4 py-2 hover:bg-gray-100"
              onClick={() => setDropdownOpen(false)}
            >
              Politique de confidentialité
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}

export default NavBar;
