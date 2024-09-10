import React from "react";
import { FiMenu, FiSearch, FiShoppingBag } from "react-icons/fi"; 

const NavBar = () => {
  return (
    <nav className="flex items-center justify-between p-4 bg-white shadow-md">
      {/* Sol Taraf: Menü Iconu */}
      <div className="text-2xl">
        <FiMenu />
      </div>

      {/* Orta: Logo */}
      <div className="text-xl font-bold">StyleSage</div>

      {/* Sağ Taraf: Arama ve Sepet Iconu */}
      <div className="flex items-center space-x-4">
        <FiSearch className="text-2xl" />
        <FiShoppingBag className="text-2xl" />
      </div>
    </nav>
  );
};

export default NavBar;
