import React from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const Results = () => {
  const successRate = 64;
  const cycles = 1; // IVF Cycles

  return (
    <div
      className="bg-gray-900 min-h-screen text-white"
      style={{ fontFamily: "Poppins" }}
    >
  
      <div className="w-full px-4 py-3 text-xs sm:text-sm text-gray-400">
        <nav className="hidden sm:block">
          <span className="cursor-pointer hover:text-orange-500 font-medium">
            Home
          </span>
          <span className="mx-2">/</span>
          <span className="cursor-pointer hover:text-orange-500 font-medium">
            IVF Success Rate Calculator
          </span>
          <span className="mx-2">/</span>
          <span className="font-bold">Results</span>
        </nav>
        <div className="sm:hidden text-white font-medium text-base">
          ← IVF Success Rate Calculator
        </div>
      </div>

      
      <div className="flex flex-col lg:flex-row items-center">
        
        <div
          className="flex flex-col items-center lg:items-start w-full lg:w-1/2 px-4 sm:px-6 left-0"
        >
          <div className="flex flex-col-reverse items-center lg:items-start w-full mb-6 sm:mb-10">
            <div className="flex items-center mb-4">
              <div className="w-12 sm:w-5 h-0.5 bg-orange-500"></div>
              <div className="w-2 h-2 sm:w-3 sm:h-3 bg-orange-500 rounded-full ml-0"></div>
              <h2 className="text-lg sm:text-2xl lg:text-3xl font-semibold">
                Your estimated IVF Success Rate is
              </h2>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center w-full">
            <div className="w-32 h-32 sm:w-40 sm:h-40 mb-4">
              <CircularProgressbar
                value={64}
                text={successRate + "%"}
                strokeWidth={12}
                styles={buildStyles({
                  textSize: "22px",
                  textColor: "#FFFFFF",
                  pathColor: "#57D38C",
                  trailColor: "#2B2B2B",
                  backgroundColor: "#000000",
                  strokeLinecap: "butt",
                })}
              />
            </div>
            <p className="text-gray-300 text-sm sm:text-base">
              With {cycles} IVF Cycle
            </p>
          </div>
        </div>

        <div className="relative w-full lg:w-1/2 h-64 sm:h-96 lg:h-[720px] order-last lg:order-none">
          <img
            src="https://s3-alpha-sig.figma.com/img/3083/cfdf/a3342bdeb14d22fce3f84a7131648fe0?Expires=1733702400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=m3rcPSzyYXFQ3av1UzjVwX~ywz9ut1Jmpzmx6Z~RWwUd~~r9UxNnyNl4R9JldCD4zDCW7Q2IeQvOvnDs6u4pyH3CTfoUnO5v492UL1iuyJt3I3zHG387QUApgjGytHwEVS51em2fW5HQXigaiOLgI6ldEf-XgFWD-AZPB6squ7fJ1sPU5SEgs04SJJgSlkJzl1Ka-Ed1OsDBqFXjBxAf7zZ~60XEh1fn~sDWw58OaB~z-10gRcakHkeVapNSDVELmye3t0JjF7zlsu5d9JV7LvBxi6ry6D-l1bYi0r8uWHVFccwd~tuvdXccvuZZNeoqnR6oiSRnQkxLHAzIzIkmVQ__"
            alt="Couple"
            className="relative z-10 w-full h-full object-cover drop-shadow-[0_0px_50px_rgba(255,135,35,0.4)]"
          />
        </div>
      </div>

      
      <div className="sticky top-0 bg-gray-900 w-full px-4 py-4 z-20 sm:hidden">
        <button className="w-full bg-red-500 text-white py-3 rounded-md font-medium text-sm">
          Start Private Conversation
        </button>
      </div>
    </div>
  );
};

export default Results;
