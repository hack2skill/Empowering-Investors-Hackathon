import React from "react";
import Arrow from "../assets/img/45_tilted_arrow.svg";
import { Link } from "react-router-dom";
import moment from "moment";
export default function BlogCard({ item }) {
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sept",
    "Oct",
    "Nov",
    "Dec",
  ];
  return (
    <Link
      className="bg-primarybg-100 w-full p-6 relative flex flex-col justify-between cursor-pointer hover:translate-y-[-12px] duration-500"
      to={{
        pathname: `/blog`,
        search: `?id=${item.id}`,
      }}
    >
      <div>
        <p className="font-montserrat font-semibold text-primaryblue-200 text-xs sm:text-sm mt-8">
          {item.domain}
        </p>
        <div className="flex justify-between w-full items-start mt-3">
          <h2 className="max-w-[80%] font-montserrat text-[#FCFCFD] font-semibold text-sm sm:text-xl">
            {item.title.split(0, 50)}
          </h2>
          <img src={Arrow} alt="err" className="sm:mt-2" />
        </div>
        <p className="mt-3 font-montserrat font-normal text-sm text-[#989CA4]">
          {item.content.length > 350
            ? item.content.slice(0, 350) + "..."
            : item.content}
        </p>
      </div>
      <div className="mt-12 flex">
        <div className="ml-3">
          <p className="font-montserrat text-[#9B9CA4] text-sm font-medium">
            {moment(item.publish_date).format("DD MMM[,] YYYY")}
          </p>
        </div>
      </div>
    </Link>
  );
}
