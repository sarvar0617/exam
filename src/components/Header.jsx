import React, { useEffect, useRef, useState } from "react";
import logo from "../assets/Logo.svg";
import { FaRegHeart } from "react-icons/fa";
import { BsCart3 } from "react-icons/bs";
import { IoSearchOutline } from "react-icons/io5";
import { FiUser, FiMenu, FiX } from "react-icons/fi";
import { Link } from "react-router-dom";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [products, setProducts] = useState([]);
  const [query, setQuery] = useState("");
  const [showSearchResults, setShowSearchResults] = useState(false);
  const [cache, setCache] = useState({});
  const searchRef = useRef();

  const fetchSearchedProducts = async () => {
    if (cache[query]) {
      setProducts(cache[query]);
      return;
    }
    const res = await fetch(`https://dummyjson.com/products/search?q=${query}`);
    const data = await res.json();
    setProducts(data?.products);
    setCache((prev) => ({ ...prev, [query]: data?.products }));
  };

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (query.trim()) fetchSearchedProducts();
      else setProducts([]);
    }, 400);
    return () => clearTimeout(timeout);
  }, [query]);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (searchRef.current && !searchRef.current.contains(e.target)) {
        setShowSearchResults(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-4">
          <img src={logo} alt="Logo" className="h-10" />
        </Link>

        <div
          ref={searchRef}
          className="hidden md:flex relative bg-gray-100 items-center px-3 py-2 w-[360px] rounded"
        >
          <IoSearchOutline size={20} className="text-gray-500" />
          <input
            type="text"
            placeholder="Search"
            className="outline-none pl-2 w-full text-base bg-transparent"
            onChange={(e) => setQuery(e.target.value)}
            onFocus={() => setShowSearchResults(true)}
          />

          {showSearchResults && products.length > 0 && (
            <div className="absolute top-full left-0 right-0 bg-white z-10 shadow max-h-[400px] overflow-y-auto rounded-b">
              {products.map((product) => (
                <Link
                  to={`/product/${product.id}`}
                  key={product.id}
                  onClick={() => setShowSearchResults(false)}
                >
                  <div className="flex items-center gap-3 p-2 hover:bg-gray-100 cursor-pointer">
                    <div className="w-12 h-12 overflow-hidden rounded bg-gray-100 shrink-0">
                      <img
                        src={product.images[0]}
                        alt={product.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <h1 className="text-sm font-medium text-gray-800 line-clamp-1">
                      {product.title}
                    </h1>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>

        <ul className="hidden lg:flex gap-6 text-base font-medium text-gray-700">
          <li className="cursor-pointer hover:text-blue-600">
            <Link to="/">Home</Link>
          </li>
          <li className="cursor-pointer hover:text-blue-600">About</li>
          <li className="cursor-pointer hover:text-blue-600">Contact Us</li>
          <li className="cursor-pointer hover:text-blue-600">Blog</li>
        </ul>

        <nav className="hidden lg:flex gap-4 items-center">
          <FaRegHeart className="cursor-pointer hover:text-red-500" size={22} />
          <Link to="/cart">
            <BsCart3 className="cursor-pointer hover:text-green-400" size={22} />
          </Link>
          <FiUser className="cursor-pointer hover:text-gray-700" size={22} />
        </nav>

        <div className="lg:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <FiX size={28} /> : <FiMenu size={28} />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="lg:hidden bg-white px-4 pb-4 border-t">
          <ul className="flex flex-col gap-3 text-base font-medium text-gray-700">
            <li className="cursor-pointer hover:text-blue-600">Home</li>
            <li className="cursor-pointer hover:text-blue-600">About</li>
            <li className="cursor-pointer hover:text-blue-600">Contact Us</li>
            <li className="cursor-pointer hover:text-blue-600">Blog</li>
          </ul>
          <nav className="flex gap-4 items-center mt-4">
            <FaRegHeart className="cursor-pointer hover:text-red-500" size={22} />
            <Link to="/cart">
              <BsCart3 className="cursor-pointer hover:text-green-600" size={22} />
            </Link>
            <FiUser className="cursor-pointer hover:text-gray-700" size={22} />
          </nav>
        </div>
      )}
    </div>
  );
};

export default Header;