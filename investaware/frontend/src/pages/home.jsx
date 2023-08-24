import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import InvestedgeLogo from "../assets/img/investedge_header.svg";
import Illustration from "../assets/img/login_illustration.svg";
import BackToHome from "../assets/img/mobile_back_to_home.svg";
import WhiteLogo from "../assets/img/beyondirr_header_logo.png";
import api from "../api";
function Login() {
  const navigate = useNavigate();
  const [appState, setAppState] = useState({
    display: "hide",
    isLoggedIn: false,
    user: null,
    loading: false,
  });

  const [formState, setFormState] = useState({
    username: "",
    password: "",
    display: "show",
  });

  useEffect(() => {
    (async () => {
      setAppState({ ...appState, loading: true });
      let accessToken = localStorage.getItem("accessToken");
      if (accessToken) {
        try {
          setAppState({
            ...appState,
            display: "show",
            isLoggedIn: true,
            loading: false,
          });
          setFormState({ ...formState, display: "hide" });
        } catch (error) {
          alert(error.response.data.error);
          setAppState({ ...appState, loading: false });
        }
      }
    })(); // eslint-disable-next-line
  }, []);

  //   useEffect(() => {
  //     const accessToken = localStorage.getItem("accessToken");
  //     if (accessToken) {
  //       dispatch(UserDetails(history));
  //       dispatch(GetSettingsAbout());
  //     }
  //     return () => {
  //       dispatch(EmptyInvalidCredentials());
  //     }; // eslint-disable-next-line
  //   }, [tokendata]);

  const handleChange = (e) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setAppState({ ...appState, loading: true });
    try {
      const { data } = await api.login({
        email: formState.username,
        password: formState.password,
      });
      localStorage.setItem("accessToken", data.access);
      localStorage.setItem("refreshToken", data.refresh);
      navigate("/blogs");
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <>
      <div
        className="p-[20px] bg-primarybg-300 md:hidden"
        style={{ boxShadow: "inset 0px -1px 0px #1F2032" }}
      >
        <div className="flex">
          <Link to="/" className="mt-[6px]">
            <img src={BackToHome} alt="err" />
          </Link>

          <div className="flex ml-[20px]">
            <img
              src={InvestedgeLogo}
              alt="logo"
              className="w-4"
              style={{
                filter:
                  "drop-shadow(0px 0px 40px #F02763) drop-shadow(0px 0px 24px #D74E77)",
              }}
            />
            <p className="font-montserrat font-sm leading-[21px] font-medium text-[#FCFCFD] ml-2 mb-0">
              Investware
            </p>
          </div>
        </div>
      </div>
      <div
        className="min-w-[100vw] relative md:hidden bg-primarybg-300 p-[20px] pt-[32px]"
        style={{ minHeight: "calc(100vh - 61px)" }}
      >
        <p className="mb-0  text-xs font-montserrat  text-[#B1B5C4]">
          Username / Mobile Number
        </p>
        <input
          name="username"
          value={formState.username}
          onChange={(e) => handleChange(e)}
          type="email"
          placeholder="Enter your email"
          className="w-full h-[48px] px-3 py-[16px] rounded-xl bg-primarybg-100 border border-[#D9D9D9] focus:border-2 focus:border-primaryblue-200 placeholder:font-montserrat placeholder:text-[#B1B5C4] text-[#B1B5C4] mt-2"
        />
        <p className="mb-0  text-xs font-montserrat  text-[#B1B5C4] pt-[24px]">
          Password
        </p>
        <input
          type="password"
          name="password"
          title="Must contain at least one number and one  and lowercase letter, and at least 8 or more characters"
          required
          data-eye
          value={formState.password}
          onChange={(e) => handleChange(e)}
          placeholder="Enter your Password"
          className="w-full h-[48px] px-3 py-[16px] rounded-xl bg-primarybg-100 border border-[#D9D9D9] focus:border-2 focus:border-primaryblue-200 placeholder:font-montserrat placeholder:text-[#B1B5C4] text-[#B1B5C4] mt-2"
        />
        <button
          type="submit"
          className="bg-primaryblue-200 w-full text-center py-[12px] rounded-[90px] font-montserrat text-[#FCFCFD] text-sm  mt-[24px]"
          onClick={(e) => handleSubmit(e)}
        >
          Login
        </button>
      </div>
      <div
        className="hidden md:flex justify-between md:fixed md:top-0 md:z-50 md:w-full md:px-20 md:py-5"
        style={{ boxShadow: "inset 0px -1px 0px #1F2032" }}
      >
        <a href={process.env.REACT_APP_beyondirrhome}>
          <img src={WhiteLogo} alt="err" className="h-[35px]" />
        </a>

        <Link to="/" className="flex w-[170px] items-center">
          <img
            src={InvestedgeLogo}
            alt="err"
            className="ml-6 w-5"
            style={{
              filter:
                "drop-shadow(0px 0px 40px #F02763) drop-shadow(0px 0px 24px #D74E77)",
            }}
          />
          <p className="font-montserrat font-medium text-[#FCFCFD] ml-3 mb-0">
            Investware
          </p>
        </Link>
      </div>
      <div
        className="hidden bg-primarybg-300 min-h-full min-w-full pt-28 pb-10 px-20 md:flex justify-between relative"
        style={{ minHeight: "100vh" }}
      >
        <div className="pt-[1%]">
          <p className="text-[#FCFCFD] font-montserrat font-medium text-2xl leading-[36px] pt-4 mb-0">
            Exceed Client Expectations,
            <br />
            Deliver Highest Quality Insights
          </p>
          <p className="font-montserrat text-sm leading-[21px] text-[#B1B5C4] mt-4 text-justify w-[80%]">
            Dive into the world of finance and stocks! <br /> Master investing
            with essential lessons on stocks vs. shares,
            <br /> candlestick patterns, risk management, and crafting winning
            strategies.
          </p>
          <img src={Illustration} alt="err" className=" w-[80%]" />
        </div>
        <form
          className="bg-primarybg-100 min-h-full w-[40%] rounded-xl flex flex-col justify-center items-center px-[64px]"
          onSubmit={handleSubmit}
        >
          <h2 className="font-montserrat text-2xl leading-[36px] text-[#FCFCFD]">
            Login
          </h2>
          <div className="pt-6 w-full">
            <p className="mb-0  text-xs font-montserrat  text-[#B1B5C4]">
              Username / Mobile Number
            </p>
            <input
              name="username"
              value={formState.username}
              onChange={(e) => handleChange(e)}
              type="email"
              placeholder="Enter your email"
              className="w-full h-[48px] px-3 py-[16px] rounded-xl bg-primarybg-100 border border-[#D9D9D9] focus:border-2 focus:border-primaryblue-200 placeholder:font-montserrat placeholder:text-[#B1B5C4] text-[#B1B5C4] mt-2"
            />
          </div>
          <div className="pt-6 w-full">
            <p className="mb-0  text-xs font-montserrat  text-[#B1B5C4]">
              Password
            </p>
            <input
              type="password"
              name="password"
              title="Must contain at least one number and one  and lowercase letter, and at least 8 or more characters"
              required
              data-eye
              value={formState.password}
              onChange={(e) => handleChange(e)}
              placeholder="Enter your Password"
              className="w-full h-[48px] px-3 py-[16px] rounded-xl bg-primarybg-100 border border-[#D9D9D9] focus:border-2 focus:border-primaryblue-200 placeholder:font-montserrat placeholder:text-[#B1B5C4] text-[#B1B5C4] mt-2"
            />
          </div>

          <button
            type="submit"
            className="bg-primaryblue-200 w-full text-center py-[16px] rounded-[90px] font-montserrat text-[#FCFCFD] mt-8"
          >
            Login
          </button>
        </form>
      </div>
    </>
  );
}

export default Login;
