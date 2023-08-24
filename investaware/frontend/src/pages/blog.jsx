import React, { useEffect, useState } from "react";
import Copy from "../assets/img/copy_link_button.svg";
import Twitter from "../assets/img/twitter_blog_logo.svg";
import Linkedin from "../assets/img/in_blog_logo.svg";
import Facebook from "../assets/img/fb_blog_logo.svg";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { useLocation } from "react-router-dom";
import axios from "axios";
import {
  FacebookShareButton,
  LinkedinShareButton,
  TwitterShareButton,
} from "react-share";
import moment from "moment";
import Typewriter from "typewriter-effect";
import { Bars } from "react-loader-spinner";

export default function Blog() {
  const { search } = useLocation();
  const queryParams = new URLSearchParams(search);
  const [query, setQuery] = useState("");
  const id = queryParams.get("id");
  const [data, setData] = useState({ content: "", tag: [] });
  const [date, setDate] = useState([]);
  const [askMeAnythingResponse, setAskMeAnythingResponse] = useState({
    content: "",
  });
  const handleAskAnything = (e) => {
    e.preventDefault();
    setAskMeAnythingResponse({ content: "loading" });
    axios
      .post(
        `{{url}}blogs/chatgpt/?id=${id}&query=${query}`
      )
      .then((response) => {
        setAskMeAnythingResponse({
          content: response.data.content,
        });
      })
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    var imgTags = document
      .getElementById("blog-content")
      .querySelectorAll("img");
    for (var i = 0; i < imgTags.length; i++)
      imgTags[i].style.backgroundColor = "100%";
  }, []);

  useEffect(() => {
    axios
      .get("{{url}}blogs/", {
        params: {
          id: id,
        },
      })
      .then((response) => {
        setData(response.data);
        setDate(moment(response.data.publish_date).format("DD MMM[,] YYYY"));
      })
      .catch(function (err) {
        console.log(err);
      });
  }, [id]);

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
    <div>
      <div className="bg-primarybg-300 sm:px-20 sm:py-24 px-5 py-20">
        <p className="text-[#3B71FE] font-montserrat font-semibold text-sm leading-[24px] text-center">
          {date[2] &&
            `Published on ${date[2]} ${months[parseInt(date[1]) - 1]} ${
              date[0]
            }`}
        </p>
        <h1 className="text-center font-semibold text-4xl text-montserrat text-[#FCFCFD] mt-3">
          {data.title}
        </h1>
        {/* <p className="text-[#9B9CA4] leading-[24px] font-montserrat text-sm font-normal text-center mt-2">
          {data.subtitle}
        </p> */}
        <div className="w-full mt-6 flex flex-col items-center">
          <div className="sm:w-[60%] w-[100%]">
            <p
              className="font-inter sm:text-xl text-[#B1B5C4] sm:leading-[30px] pb-8 text-sm leading-[21px] text-justify"
              style={{ borderBottom: "1px solid #353945" }}
            >
              {data.brief_text}
            </p>
            <div
              className="font-inter sm:text-xl text-[#B1B5C4] sm:leading-[30px] pb-8 divide-y-reverse divide-[#353945] mt-8 text-sm leading-[21px] text-justify"
              id="blog-content"
            >
              {data.content}
            </div>
            <div className="pt-8 border-t border-t-[##EAECF0] sm:flex justify-end block">
              <div className="flex items-center mt-8 sm:mt-0">
                <CopyToClipboard text={window.location.href}>
                  <button className="active:opacity-50">
                    <img
                      src={Copy}
                      alt="err"
                      className="h-[35px] cursor-pointer"
                    />
                  </button>
                </CopyToClipboard>
                <TwitterShareButton
                  url={window.location.href}
                  quote={"BeyondIRR - The future of wealth management!"}
                  hashtag="#beyondirr"
                >
                  <img src={Twitter} alt="err" className="h-[35px] ml-3" />
                </TwitterShareButton>
                <LinkedinShareButton
                  url={window.location.href}
                  quote={"BeyondIRR - The future of wealth management!"}
                  hashtag="#beyondirr"
                >
                  <img src={Linkedin} alt="err" className="h-[35px] ml-3" />
                </LinkedinShareButton>
                <FacebookShareButton
                  url={window.location.href}
                  quote={"BeyondIRR - The future of wealth management!"}
                  hashtag="#beyondirr"
                >
                  <img src={Facebook} alt="err" className="h-[35px] ml-3" />
                </FacebookShareButton>
              </div>
            </div>
            <h1 className="font-inter font-medium text-base sm:text-[20px] not-italic leading-6 mt-8 text-[#FCFCFD]">
              Ask Me Anything regarding this blog
            </h1>
            <div className="w-full mt-4">
              <form onSubmit={handleAskAnything}>
                <div className="w-full flex justify-between mt-8">
                  <input
                    name="username"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    type="query"
                    placeholder="Enter Query"
                    className="h-[48px] px-3 py-[16px] rounded-xl bg-primarybg-100 border border-[#D9D9D9] focus:border-2 focus:border-primaryblue-200 placeholder:font-montserrat placeholder:text-[#B1B5C4] text-[#B1B5C4] w-[300px]"
                  />{" "}
                  <button
                    type="submit"
                    className="bg-primaryblue-200 w-[200px] text-center py-[16px] rounded-[90px] font-montserrat text-[#FCFCFD] "
                  >
                    Get Answer
                  </button>
                </div>
              </form>
            </div>
            {askMeAnythingResponse.content ? (
              <div className="p-[1rem] rounded-[0.5rem] w-full ml-0 mt-4 overflow-auto">
                {askMeAnythingResponse.content === "loading" ? (
                  <div className="h-[100px] flex justify-center items-center">
                    <Bars color="#1982f8" height="60" width="60" />
                  </div>
                ) : (
                  <>
                    <div className="w-full flex justify-between cursor-pointer">
                      <p className="font-medium text-[#FCFCFD]">
                        Answer based on current query
                      </p>
                      <CopyToClipboard text={askMeAnythingResponse.content}>
                        <div className="flex items-center">
                          <p className="text-sm text-primary-200">
                            Copy to Clipboard
                          </p>
                        </div>
                      </CopyToClipboard>
                    </div>
                    <p className="text-sm text-justify mt-4 leading-[20px] text-[#B1B5C4]">
                      <Typewriter
                        onInit={(typewriter) => {
                          typewriter
                            .typeString(askMeAnythingResponse.content)
                            .start();
                        }}
                      />
                    </p>
                  </>
                )}
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
}
