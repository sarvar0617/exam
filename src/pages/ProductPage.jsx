import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { fetchProduct } from "../redux/productSlice";

const ProductPage = () => {
  const { category } = useParams();
  const dispatch = useDispatch();
  const {
    data: products,
    error,
    isLoading,
  } = useSelector((state) => state.product);
  const filterProducts = products.filter(
    (product) => product.category === category
  );

  console.log(filterProducts);
  console.log(category);
  useEffect(() => {
    dispatch(fetchProduct());
  }, [dispatch]);
  return (
    <div>
      <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-6 mt-8">
        {filterProducts.map((product) => (
          <div
            key={product.id}
            className="w-full max-w-[268px] h-80 md:h-auto bg-gray-100 rounded-xl shadow-md p-4 hover:shadow-lg transition mx-auto flex flex-col"
          >
            <Link to={`/product/${product.id}`}>
              <div className="w-full h-[160px] sm:h-[200px] overflow-hidden rounded-md">
                <img
                  src={product.images[0]}
                  alt={product.title}
                  className="w-full h-full object-cover"
                />
              </div>
            </Link>
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
  );
};

export default ProductPage;
