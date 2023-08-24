import React, { useEffect, useState } from "react";
import Arrow from "../assets/img/load_down_arrow.svg";
import BlogCard from "./blogcard";
import api from "../api";

export default function Blogs() {
  const [blogs, setBlogs] = useState([]);
  const [blogsNumber, setblogsNumber] = useState(1);
  const getBlogs = async () => {
    try {
      const { data } = await api.getBlogs();
      setBlogs(data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getBlogs();
  }, []);

  return (
    <div
      className="bg-primarybg-300 w-full py-5 md:py-16 px-6 md:px-28 h-[100vh]"
      id="insights"
    >
      <h2 className="text-center text-[#FCFCFD] font-montserrat font-bold md:text-4xl mb-7">
        Insights
      </h2>
      <div className="hidden sm:grid sm:grid-cols-2 md:grid-cols-3 gap-8">
        {blogs.map((item, index) => (
          <BlogCard item={item} key={index} />
        ))}
      </div>
      <div className="sm:hidden grid grid-cols-1 gap-8">
        {blogs.slice(0, blogsNumber).map((item, index) => (
          <BlogCard item={item} key={index} />
        ))}
      </div>
      <div
        className={
          blogsNumber === blogs.length
            ? "hidden"
            : "flex sm:hidden bg-primaryblue-200 py-3 justify-center mt-12 rounded-lg"
        }
        onClick={() => setblogsNumber(blogs.length)}
      >
        <img src={Arrow} alt="err" />
        <p className="font-inter font-medium text-[#FCFCFD] ml-2">Load more</p>
      </div>
    </div>
  );
}
