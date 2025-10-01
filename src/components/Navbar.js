import { useState } from "react";
import { FaShoppingCart, FaUser, FaHeart, FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white px-12 py-4 flex items-center justify-between relative">
      
      <div className="flex items-center gap-4 md:gap-12">
        <h1 className="text-2xl font-semibold">AIKE</h1>
        <ul className="hidden md:flex gap-4 md:gap-8">
          <li className="hover:text-black cursor-pointer">Category</li>
          <li className="hover:text-black cursor-pointer">Promo</li>
          <li className="hover:text-black cursor-pointer">Interior Design</li>
          <li className="hover:text-black cursor-pointer">Product Recommendation</li>
        </ul>
      </div>

      <div className="hidden md:flex items-center gap-4">
        <input
          type="text"
          placeholder="Product Search"
          className="border rounded-md px-2 py-1 w-64"
        />
        <FaShoppingCart size={24} />
        <FaUser size={24} />
        <FaHeart size={28} />
      </div>


      <div className="md:hidden">
        <button onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </div>

      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-white shadow-md flex flex-col gap-4 p-4 md:hidden">
          <input
            type="text"
            placeholder="Product Search"
            className="border rounded-md px-2 py-1 w-full"
          />
          <div className="flex gap-4">
            <FaShoppingCart size={24} />
            <FaUser size={24} />
            <FaHeart size={28} />
          </div>
          <ul className="flex flex-col gap-2 mt-2">
            <li className="hover:text-black cursor-pointer">Category</li>
            <li className="hover:text-black cursor-pointer">Promo</li>
            <li className="hover:text-black cursor-pointer">Interior Design</li>
            <li className="hover:text-black cursor-pointer">Product Recommendation</li>
          </ul>
        </div>
      )}
    </nav>
  );
}
