import React, { useEffect } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { useDispatch, useSelector } from "react-redux";
import { fetchProduct } from "../redux/productSlice";

const CategorySlider = () => {
  const dispatch = useDispatch();
  const {
    data: products,
    error,
    isLoading,
  } = useSelector((state) => state.product);
  useEffect(() => {
    dispatch(fetchProduct());
  }, [dispatch]);
  const uniqueCategories = [];
  const seenCategories = new Set();
  for (const item of products) {
    if (!seenCategories.has(item.category)) {
      uniqueCategories.push(item);
      seenCategories.add(item.category);
    }
  }
  return (
    <div className="container mx-auto mt-15">
      <div className="flex items-center justify-between mb-4">
        <h1 className="text-xl font-bold ">Browse By Category</h1>
        <div className="flex justify-end gap-2 ">
          <button className="swiper-prev cursor-pointer bg-gray-200 p-2  hover:bg-gray-300">
            <FaArrowLeft size={16} />
          </button>
          <button className="swiper-next  cursor-pointer bg-gray-200 p-2  hover:bg-gray-300">
            <FaArrowRight size={16} />
          </button>
        </div>
      </div>
      <div className="">
        <Swiper
          modules={[Navigation]}
          navigation={{
            nextEl: ".swiper-next",
            prevEl: ".swiper-prev",
          }}
          slidesPerView={6}
          spaceBetween={15}
          breakpoints={{
            320: { slidesPerView: 2 },
            640: { slidesPerView: 4 },
            1024: { slidesPerView: 6 },
          }}
        >
          {uniqueCategories.map((item) => (
            <SwiperSlide key={item.id}>
              <div className="bg-gray-100 h-[180px] w-full p-4 flex flex-col items-center justify-center rounded-lg cursor-pointer hover:bg-gray-200 transition">
                <img
                  src={item.images[0]}
                  alt={item.category}
                  className="h-16 w-16 object-contain mb-3"
                />
                <p className="text-sm font-semibold text-center capitalize">
                  {item.category}
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Navigatsiya tugmalari */}
      </div>
    </div>
  );
};

export default CategorySlider;
