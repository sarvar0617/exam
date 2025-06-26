import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProduct } from "../redux/productSlice";

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
  useEffect(() => {
    console.log("Products:", products);
  }, [products]);
  return <div>Home</div>;
};

export default Home;
