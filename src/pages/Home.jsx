import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProduct } from "../redux/productSlice";

import iphone from "../assets/images/iphone.svg";
import playstation from "../assets/images/PlayStation.svg";
import macbook from "../assets/images/mackbok.svg";
import vision from "../assets/images/applevision.svg";
import airpods from "../assets/images/appleairpods.svg";
import CategorySlider from "../components/CategorySlider";
import hyawi from "../assets/images/hyawie.svg";
import ipad from "../assets/images/ipad.svg";
import samsung from "../assets/images/samsing.svg";
import mcbok from "../assets/images/mcbok.svg";
import banner from "../assets/images/footbanner.svg";
import iphonee from "../assets/iphonee.svg";
import playstationn from "../assets/playstation.svg";
import airpodss from "../assets/airpods.svg";
import macboook from "../assets/mackbook.svg";
import visionn from "../assets/vision.svg";
import { Link } from "react-router-dom";
const Home = () => {
  const {
    data: products,
    isLoading,
    error,
  } = useSelector((state) => state.product);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProduct());
  }, [dispatch]);
  const [isMd, setIsMd] = useState(window.innerWidth >= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMd(window.innerWidth >= 768);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <div>
      <div>
        <div>
          <div className="bg-[#1c1c1e] text-white pt-[67px]">
            <div className="container mx-auto px-6">
              <div className="flex flex-col md:flex-row justify-between items-center gap-10">
                <div className="md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left">
                  <p className="text-gray-400">Pro.Beyond.</p>
                  <h1 className="text-5xl font-light">
                    iPhone 14 <span className="font-bold">Pro</span>
                  </h1>
                  <p className="text-gray-400 mt-4">
                    Created to change everything for the better. For everyone.
                  </p>
                  <button className="mt-6 border px-6 py-2 rounded hover:bg-white hover:text-black transition">
                    Shop Now
                  </button>
                </div>
                <img
                  src={isMd ? iphone : iphonee}
                  alt="iPhone 14 Pro"
                  className="md:w-1/3 w-full"
                />
              </div>
            </div>
          </div>

          <div className="flex flex-col xl:flex-row">
            <div className="w-full xl:w-1/2 flex-row">
              <div className="bg-white text-black pt-6 md:py-0 py-6 flex t items-center gap-6 md:flex-row flex-col">
                <img
                  src={isMd ? playstation : playstationn}
                  alt="PlayStation 5"
                  className=""
                />
                <div className="text-center md:text-left">
                  <h2 className="text-3xl font-semibold mb-2">Playstation 5</h2>
                  <p className="text-gray-600 text-sm">
                    Incredibly powerful CPUs, GPUs, and an SSD with integrated
                    I/O will redefine your PlayStation experience.
                  </p>
                </div>
              </div>

              <div className="flex flex-col md:flex-row  mt-6 w-full">
                <div className="bg-gray-100 text-black py-6 flex h-80 md:h-auto gap-5 flex-col md:flex-row md:text-left text-center items-center  w-full md:w-1/2">
                  <img
                    src={isMd ? airpods : airpodss}
                    alt="AirPods Max"
                    className=""
                  />
                  <div>
                    <h3 className="font-semibold text-lg mb-1">
                      Apple AirPods Max
                    </h3>
                    <p className="text-gray-600 text-sm">
                      Computational audio. Listen, it's powerful.
                    </p>
                  </div>
                </div>

                <div className="bg-[#1c1c1e] text-white flex items-center gap-5 flex-col md:flex-row md:text-left text-center w-full h-80 md:h-auto md:w-1/2">
                  <img
                    src={isMd ? vision : visionn}
                    alt="Vision Pro"
                    className=""
                  />
                  <div>
                    <h3 className="font-semibold text-lg mb-1">
                      Apple Vision <span className="font-bold">Pro</span>
                    </h3>
                    <p className="text-gray-400 text-sm">
                      An immersive way to experience entertainment
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="xl:w-1/2 w-full">
              <div className="bg-gray-100 text-black flex-col md:flex-row  py-8 pl-8 flex items-center  justify-between h-full">
                <div className="max-w-md flex flex-col items-center md:items-start text-center md:text-left">
                  <h2 className="text-3xl font-light">
                    Macbook <span className="font-semibold">Air</span>
                  </h2>
                  <p className="text-gray-600 mt-4 text-sm">
                    The new 15-inch MacBook Air makes room for more of what you
                    love with a spacious Liquid Retina display.
                  </p>
                  <button className="mt-6 border px-6 py-2 rounded hover:bg-black hover:text-white transition">
                    Shop Now
                  </button>
                </div>
                <img
                  src={isMd ? macbook : macboook}
                  alt="Macbook Air"
                  className=""
                />
              </div>
            </div>
          </div>
        </div>
        <CategorySlider />
        <div className="container mx-auto px-6 mt-10">
          <p>New Arrival</p>
          <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-6 mt-8">
            {products.slice(0, 10).map((product) => (
              <div
                key={product.id}
                className="w-full max-w-[268px] h-80 md:h-auto bg-gray-100 rounded-xl shadow-md p-4 hover:shadow-lg transition mx-auto flex flex-col"
              >
                <div className="w-full h-[160px] sm:h-[200px] overflow-hidden rounded-md">
                  <Link to={`/product/${product.id}`}>
                    <img
                      src={product.images[0]}
                      alt={product.title}
                      className="w-full h-full object-cover"
                    />
                  </Link>
                </div>
                <div className="flex-grow mt-4 flex flex-col justify-between items-center text-center gap-3">
                  <h1 className="font-semibold text-sm sm:text-md min-h-[36px] sm:min-h-[48px] line-clamp-2">
                    {product.title}
                  </h1>
                  <p className="font-semibold text-lg sm:text-2xl text-black">
                    ${product.price}
                  </p>
                  <button className="w-full cursor-pointer  sm:w-[188px] h-[40px] sm:h-[48px] rounded bg-black text-white border border-transparent hover:bg-white hover:text-black hover:border-black transition-all duration-300">
                    Buy now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4  mt-10 px-4">
          <div className="w-full 2xl:h-[680px] lg:h-[550px]  bg-white   p-6 flex flex-col">
            <div className="w-full h-[320px] overflow-hidden rounded-lg mb-4">
              <img
                src={hyawi}
                alt="Product 1"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="text-center flex flex-col flex-grow">
              <h1 className="text-2xl font-semibold mb-3">Popular Products</h1>
              <p className="text-[17px] text-gray-700 mb-6">
                iPad combines a magnificent 10.2-inch Retina display, incredible
                performance, multitasking and ease of use.
              </p>
              <button className="mt-auto border px-6 py-3 rounded text-lg font-medium cursor-pointer hover:bg-black hover:text-white transition">
                Shop Now
              </button>
            </div>
          </div>

          <div className="w-full 2xl:h-[680px] lg:h-[550px] h-auto bg-[#F9F9F9]   p-6 flex flex-col">
            <div className="w-full h-[320px] overflow-hidden rounded-lg mb-4">
              <img
                src={ipad}
                alt="Product 2"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="text-center flex flex-col flex-grow">
              <h1 className="text-2xl font-semibold mb-3">Popular Products</h1>
              <p className="text-[17px] text-gray-700 mb-6">
                iPad combines a magnificent 10.2-inch Retina display, incredible
                performance, multitasking and ease of use.
              </p>
              <button className="mt-auto border px-6 py-3 rounded text-lg font-medium cursor-pointer hover:bg-black hover:text-white transition">
                Shop Now
              </button>
            </div>
          </div>

          <div className="w-full 2xl:h-[680px] lg:h-[550px]  bg-[#EAEAEA]   p-6 flex flex-col">
            <div className="w-full h-[320px] overflow-hidden rounded-lg mb-4">
              <img
                src={samsung}
                alt="Product 3"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="text-center flex flex-col flex-grow">
              <h1 className="text-2xl font-semibold mb-3">Popular Products</h1>
              <p className="text-[17px] text-gray-700 mb-6">
                iPad combines a magnificent 10.2-inch Retina display, incredible
                performance, multitasking and ease of use.
              </p>
              <button className="mt-auto border px-6 py-3 rounded text-lg font-medium cursor-pointer hover:bg-black hover:text-white transition">
                Shop Now
              </button>
            </div>
          </div>

          <div className="w-full 2xl:h-[680px] lg:h-[550px]  bg-[#2C2C2C] text-white   p-6 flex flex-col">
            <div className="w-full h-[320px] overflow-hidden rounded-lg mb-4">
              <img
                src={mcbok}
                alt="Product 4"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="text-center flex flex-col flex-grow">
              <h1 className="text-2xl font-semibold mb-3">Popular Products</h1>
              <p className="text-[17px]  text-white mb-6">
                iPad combines a magnificent 10.2-inch Retina display, incredible
                performance, multitasking and ease of use.
              </p>
              <button className="mt-auto border px-6 py-3 rounded text-lg font-medium cursor-pointer hover:bg-white hover:text-black transition">
                Shop Now
              </button>
            </div>
          </div>
        </div>
        {/* ////// */}
        <div className="container mx-auto px-6 mt-10">
          <p className="text-3xl">Discount 50%</p>
          <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-6 mt-8">
            {products.slice(15, 20).map((product) => (
              <div
                key={product.id}
                className="w-full max-w-[268px] h-80 md:h-auto bg-gray-100 rounded-xl shadow-md p-4 hover:shadow-lg transition mx-auto flex flex-col"
              >
                <div className="w-full h-[160px] sm:h-[200px] overflow-hidden rounded-md">
                  <img
                    src={product.images[0]}
                    alt={product.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-grow mt-4 flex flex-col justify-between items-center text-center gap-3">
                  <h1 className="font-semibold text-sm sm:text-md min-h-[36px] sm:min-h-[48px] line-clamp-2">
                    {product.title}
                  </h1>
                  <p className="font-semibold text-lg sm:text-2xl text-black">
                    ${product.price}
                  </p>
                  <button className="w-full cursor-pointer  sm:w-[188px] h-[40px] sm:h-[48px] rounded bg-black text-white border border-transparent hover:bg-white hover:text-black hover:border-black transition-all duration-300">
                    Buy now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div
          className="bg-cover bg-center bg-no-repeat h-[448px] flex justify-center items-center  w-full mt-10"
          style={{ backgroundImage: `url(${banner})` }}
        >
          <div className=" mx-auto flex justify-center items-center  flex-col px-6 py-16">
            <h1 className="text-6xl text-center font-extralight text-white mb-4">
              Big Summer <span className="font-bold">Sale</span>
            </h1>
            <p className="text-lg text-center text-gray-200 mb-6">
              Commodo fames vitae vitae leo mauris in. Eu consequat.
            </p>
            <button className="border px-6 py-3 rounded text-lg font-medium cursor-pointer  text-white hover:text-black hover:bg-gray-200 transition">
              Shop Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
