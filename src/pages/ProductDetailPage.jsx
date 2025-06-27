import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchProduct } from "../redux/productSlice";
import useCartStore from "../redux/cartStore";

const ShoppingDetailPage = () => {
  const [showMore, setShowMore] = useState(false);
  const [selectedColor, setSelectedColor] = useState("black");
  const [selectedStorage, setSelectedStorage] = useState("1TB");
  const [wishlisted, setWishlisted] = useState(false);
  const [addedToCart, setAddedToCart] = useState(false);

  const dispatch = useDispatch();
  const { id } = useParams();
  const {
    data: products,
    error,
    isLoading,
  } = useSelector((state) => state.product);
  const { addToCart } = useCartStore();

  useEffect(() => {
    dispatch(fetchProduct());
  }, [dispatch]);

  const prod = products.find((item) => item.id === Number(id));
  const colors = ["black", "purple", "red", "yellow", "gray"];
  const storageOptions = ["128GB", "256GB", "512GB", "1TB"];

  if (!prod || isLoading) {
    return <div className="text-center text-2xl">Loading....</div>;
  }

  if (error) {
    return (
      <div className="text-center text-2xl text-red-500">
        Error loading product
      </div>
    );
  }

  const handleAddToCart = () => {
    setAddedToCart(true);
    addToCart(prod);
  };

  return (
    <div className="bg-white h-auto">
      <div className="container mx-auto flex flex-col lg:flex-row mt-20 gap-8 p-6">
        <div className="flex-1 flex justify-center overflow-hidden items-center">
          <img src={prod.images[0]} alt={prod.title} className="max-w-sm" />
        </div>

        <div className="flex-1 flex flex-col gap-5">
          <h1 className="text-3xl font-bold">{prod.title}</h1>
          <span className="text-black font-semibold text-lg">
            ${prod.price}
          </span>

          <div className="flex items-center gap-2">
            <span>Select color:</span>
            {colors.map((color) => (
              <div
                key={color}
                onClick={() => setSelectedColor(color)}
                className={`w-5 h-5 rounded-full cursor-pointer border ${
                  color === "black"
                    ? "bg-black"
                    : color === "purple"
                    ? "bg-purple-800"
                    : color === "red"
                    ? "bg-red-600"
                    : color === "yellow"
                    ? "bg-yellow-400"
                    : "bg-gray-200"
                } ${
                  selectedColor === color
                    ? "ring-2 ring-offset-2 ring-black"
                    : ""
                }`}
              />
            ))}
          </div>

          <div className="flex flex-wrap gap-2">
            {storageOptions.map((option) => (
              <button
                key={option}
                onClick={() => setSelectedStorage(option)}
                className={`px-6 py-3 border border-gray-200 rounded ${
                  option === selectedStorage
                    ? "bg-black text-white"
                    : "bg-white text-black"
                }`}
              >
                {option}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-3 gap-3 text-sm">
            <div className="bg-gray-100 p-5">📱 Screen size: 6.7"</div>
            <div className="bg-gray-100 p-5">⚙️ CPU: Apple A16 Bionic</div>
            <div className="bg-gray-100 p-5">🧠 Cores: 6</div>
            <div className="bg-gray-100 p-5">📸 Main: 48+12+12 MP</div>
            <div className="bg-gray-100 p-5">🤳 Front: 12 MP</div>
            <div className="bg-gray-100 p-5">🔋 Battery: 4323 mAh</div>
          </div>

          <p className="text-sm text-gray-600 leading-snug">
            Enhanced capabilities thanks to an enlarged display of 6.7 inches...
          </p>

          <div className="flex gap-4">
            <button
              onClick={() => setWishlisted(!wishlisted)}
              className={`px-4 py-2 border rounded ${
                wishlisted ? "bg-green-100" : ""
              }`}
            >
              {wishlisted ? "Wishlisted ✓" : "Add to Wishlist"}
            </button>
            <button
              onClick={handleAddToCart}
              className={`px-4 py-2 rounded text-white ${
                addedToCart ? "bg-green-600" : "bg-black"
              }`}
            >
              {addedToCart ? "Added ✓" : "Add to Cart"}
            </button>
          </div>

          <div className="flex gap-8 mt-4 text-sm">
            <div>
              🚚 Free Delivery <br />
              <span className="text-gray-500">1-2 day</span>
            </div>
            <div>
              📦 In Stock <br />
              <span className="text-gray-500">Today</span>
            </div>
            <div>
              ✅ Guaranteed <br />
              <span className="text-gray-500">1 year</span>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-gray-100 pt-15 pb-15">
        <div className="bg-white  p-6 container mx-auto  rounded-lg ">
          <h2 className="text-2xl font-semibold mb-4">Details</h2>

          <p className="text-gray-600 text-sm leading-relaxed mb-6">
            Just as a book is judged by its cover, the first thing you notice
            when you pick up a modern smartphone is the display. Nothing
            surprising, because advanced technologies allow you to practically
            level the display frames and cutouts for the front camera and
            speaker, leaving no room for bold design solutions. And how good
            that in such realities Apple everything is fine with displays. Both
            critics and mass consumers always praise the quality of the picture
            provided by the products of the Californian brand. And last year's
            6.7-inch Retina panels, which had ProMotion, caused real admiration
            for many.
          </p>

          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-3">Screen</h3>
            <div className="grid grid-cols-2 border-t border-gray-200 text-sm">
              <div className="border-b border-gray-200 p-3 font-medium">
                Screen diagonal
              </div>
              <div className="border-b border-gray-200 p-3">6.7"</div>

              <div className="border-b border-gray-200 p-3 font-medium">
                The screen resolution
              </div>
              <div className="border-b border-gray-200 p-3">2796×1290</div>

              <div className="border-b border-gray-200 p-3 font-medium">
                The screen refresh rate
              </div>
              <div className="border-b border-gray-200 p-3">120 Hz</div>

              <div className="border-b border-gray-200 p-3 font-medium">
                The pixel density
              </div>
              <div className="border-b border-gray-200 p-3">460 ppi</div>

              <div className="border-b border-gray-200 p-3 font-medium">
                Screen type
              </div>
              <div className="border-b border-gray-200 p-3">OLED</div>

              <div className="border-b border-gray-200 p-3 font-medium">
                Additionally
              </div>
              <div className="border-b border-gray-200 p-3">
                Dynamic Island
                <br />
                Always-On display
                <br />
                HDR display
                <br />
                True Tone
                <br />
                Wide color (P3)
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-3">CPU</h3>
            <div className="grid grid-cols-2 border-t border-gray-200 text-sm">
              <div className="border-b border-gray-200 p-3 font-medium">
                CPU
              </div>
              <div className="border-b border-gray-200 p-3">A16 Bionic</div>

              <div className="border-b border-gray-200 p-3 font-medium">
                Number of cores
              </div>
              <div className="border-b border-gray-200 p-3">6</div>
            </div>
          </div>

          <div className="text-center mt-6">
            <button
              onClick={() => setShowMore(!showMore)}
              className="px-6 py-3 border rounded-md text-md text-gray-700 hover:bg-gray-100 transition"
            >
              {showMore ? "View Less ▲" : "View More ▼"}
            </button>
          </div>
        </div>
      </div>
      <div>
        <div class="p-6 bg-white   space-y-6 container mt-15 mx-auto">
          <h2 class="text-2xl font-semibold">Reviews</h2>

          <div class="flex flex-col lg:flex-row gap-6">
            <div class="text-center space-y-1">
              <div class="text-4xl font-bold">4.8</div>
              <div class="text-sm text-gray-500">of 125 reviews</div>
              <div class="text-yellow-400 text-lg">★ ★ ★ ★ ★</div>
            </div>

            <div class="flex-1 space-y-2">
              <div class="flex items-center gap-3 text-sm">
                <span class="w-24">Excellent</span>
                <div class="flex-1 h-1.5 bg-gray-200 rounded">
                  <div class="bg-yellow-400 h-1.5 rounded w-[95%]"></div>
                </div>
                <span>100</span>
              </div>
              <div class="flex items-center gap-3 text-sm">
                <span class="w-24">Good</span>
                <div class="flex-1 h-1.5 bg-gray-200 rounded">
                  <div class="bg-yellow-400 h-1.5 rounded w-[60%]"></div>
                </div>
                <span>11</span>
              </div>
              <div class="flex items-center gap-3 text-sm">
                <span class="w-24">Average</span>
                <div class="flex-1 h-1.5 bg-gray-200 rounded">
                  <div class="bg-yellow-400 h-1.5 rounded w-[20%]"></div>
                </div>
                <span>3</span>
              </div>
              <div class="flex items-center gap-3 text-sm">
                <span class="w-24">Below Average</span>
                <div class="flex-1 h-1.5 bg-gray-200 rounded">
                  <div class="bg-yellow-400 h-1.5 rounded w-[40%]"></div>
                </div>
                <span>8</span>
              </div>
              <div class="flex items-center gap-3 text-sm">
                <span class="w-24">Poor</span>
                <div class="flex-1 h-1.5 bg-gray-200 rounded">
                  <div class="bg-yellow-400 h-1.5 rounded w-[10%]"></div>
                </div>
                <span>1</span>
              </div>
            </div>
          </div>

          <textarea
            placeholder="Leave Comment"
            class="w-full p-3 border outline-none border-gray-300 rounded-md resize-none"
          ></textarea>

          <div class="bg-gray-100 p-4 py-5 rounded-md ">
            <div class="flex items-center gap-4 mb-2">
              <img
                src="https://i.pravatar.cc/40?img=1"
                alt=""
                class="w-10 h-10 rounded-full"
              />
              <div>
                <div class="font-semibold">Grace Carey</div>
                <div class="text-xs text-gray-500">24 January, 2023</div>
              </div>
              <div class="ml-auto text-yellow-400">★★★★☆</div>
            </div>
            <p class="text-sm text-gray-700">
              I was a bit nervous to be buying a secondhand phone from Amazon,
              but I couldn’t be happier with my purchase...
            </p>
          </div>

          <div class="bg-gray-100 p-4 py-5 rounded-md ">
            <div class="flex items-center gap-4 mb-2">
              <img
                src="https://i.pravatar.cc/40?img=2"
                alt=""
                class="w-10 h-10 rounded-full"
              />
              <div>
                <div class="font-semibold">Ronald Richards</div>
                <div class="text-xs text-gray-500">24 January, 2023</div>
              </div>
              <div class="ml-auto text-yellow-400">★★★★★</div>
            </div>
            <p class="text-sm text-gray-700">
              This phone has 1T storage and is durable. Plus all the new iPhones
              have a C port! ...
            </p>
          </div>

          <div class="bg-gray-100 p-4 py-5 rounded-md ">
            <div class="flex items-center gap-4 mb-2">
              <img
                src="https://i.pravatar.cc/40?img=3"
                alt=""
                class="w-10 h-10 rounded-full"
              />
              <div>
                <div class="font-semibold">Darcy King</div>
                <div class="text-xs text-gray-500">24 January, 2023</div>
              </div>
              <div class="ml-auto text-yellow-400">★★★★☆</div>
            </div>
            <p class="text-sm text-gray-700 mb-2">
              The camera is a little funky. Hoping it will change with a
              software update...
            </p>
          </div>

          <div class="text-center">
            <button class="px-5 py-2 border rounded-md text-sm text-gray-700 hover:bg-gray-100">
              View More ▼
            </button>
          </div>
        </div>
      </div>
      <div className="container mx-auto px-6 mt-10 mb-10">
        <h1 className="text-3xl font-semibold">Related Products</h1>
        <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-6 mt-8">
          {products.slice(23, 28).map((product) => (
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
    </div>
  );
};

export default ShoppingDetailPage;
