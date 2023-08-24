import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";

export default function LandingPage() {
  return (
    <div className="flex relative flex-col w-full">
      <Navbar />

      <div className="p-3 h-screen bg-gradient-to-bl from-violet-300 to-slate-100 dark:from-slate-950 dark:to-slate-800 w-screen flex items-center justify-center">
        <div className="w-fit gap-5 justify-between flex lg:flex-row flex-col items-center">
          <div className="flex flex-1 justify-center w-fit flex-col items-center">
            <div className="type text-slate-900 text-center w-fit md:whitespace-nowrap dark:text-slate-200 text-[clamp(36px,6vw,54px)] leading-[1.1] font-semibold">
              AI-Powered Personalization
            </div>
            <div className="appear text-slate-700 text-center dark:text-slate-400 text-[clamp(24px,6vw,30px)] leading-[1] font-semibold">
              Tailored content, interactive experiences
            </div>
            <Link to="/login">
              <button
                type="button"
                className="mt-6 appear2 px-5 py-2 rounded-full bg-violet-500 text-slate-200"
              >
                Get Started
              </button>
            </Link>
          </div>

          <div className=" max-w-[320px]">
            <img src={"./Landing.png"} alt="LandingImage" />
          </div>
        </div>
      </div>
    </div>
  );
}
