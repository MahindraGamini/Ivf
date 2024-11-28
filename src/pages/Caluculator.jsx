import React, { useState } from "react";
import { Slider } from "@mui/material";
import { useNavigate } from "react-router-dom";

const IVFCalculator = () => {
  const [sliderValue, setSliderValue] = useState(1);
  const [selectedAge, setSelectedAge] = useState("");
  const [selectedICSI, setSelectedICSI] = useState("");
  const [selectedPGT, setSelectedPGT] = useState("");
  const [selectedConditions, setSelectedConditions] = useState([]);
  const navigate = useNavigate();

  const handleSliderChange = (event, newValue) => {
    setSliderValue(newValue);
  };

  const handleConditionChange = (condition) => {
    setSelectedConditions((prev) =>
      prev.includes(condition)
        ? prev.filter((item) => item !== condition)
        : [...prev, condition]
    );
  };

  const handleSubmit = () => {
    if (!selectedAge || !selectedICSI || !selectedPGT) {
      alert("Please complete all the required fields.");
      return;
    }
    navigate("/result", {
      state: {
        age: selectedAge,
        icsi: selectedICSI,
        pgt: selectedPGT,
        conditions: selectedConditions,
        cycles: sliderValue,
      },
    });
  };

  return (
    <div className="p-8 min-h-screen flex flex-col justify-center items-center bg-[#FCFAF5] font-poppins">
  <div>
    
      <div className="text-sm mb-6 text-gray-600 self-start hidden sm:block">
        <a href="/" className="text-gray-700 font-normal">
          Home
        </a>{" "}
        / <span className="font-bold text-gray-900">IVF Success Rate Calculator</span>
      </div>

      <div className="text-sm mb-6 text-gray-600 self-start  lg:hidden">
        <div className="text-white font-medium text-base">
          <button  className="text-[#1E231E]">
            ← IVF Success Rate Calculator
          </button>
        </div>
      </div>
    </div>

      <div className="text-center mb-12">
        <h2 className="text-2xl mb-4 font-medium text-gray-900">
          Which age range applies to you?
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {[
            "Under 30",
            "Between 30 - 34",
            "Between 35 - 37",
            "Between 38 - 40",
            "Between 41 - 43",
            "Above 43",
          ].map((ageRange) => (
            <label
              key={ageRange}
              className={`flex items-center space-x-2 cursor-pointer text-gray-600 ${
                selectedAge === ageRange ? "text-[#F48265] font-medium" : ""
              }`}
            >
              <input
                type="radio"
                name="age"
                value={ageRange}
                onChange={(e) => setSelectedAge(e.target.value)}
                className="hidden"
              />
              <span
                className={`w-6 h-6 border-2 rounded-full flex items-center justify-center transition-all ${
                  selectedAge === ageRange
                    ? "border-[#F48265]"
                    : "border-gray-300"
                }`}
              >
                {selectedAge === ageRange && (
                  <span className="w-3 h-3 bg-[#F48265] rounded-full"></span>
                )}
              </span>
              {ageRange}
            </label>
          ))}
        </div>
      </div>

      <div className="text-center mb-12 w-full md:w-1/5">
        <h2 className="text-2xl font-semibold mb-4 text-gray-900">
          Number of IVF Cycles?
        </h2>
        <Slider
          value={sliderValue}
          onChange={handleSliderChange}
          aria-labelledby="ivf-cycles-slider"
          min={0}
          max={4}
          step={1}
          marks
          valueLabelDisplay="auto"
          sx={{
            color: "#F48265",
          }}
        />
      </div>

      <div className="text-center mb-12 w-full md:w-1/5">
        <h2 className="text-2xl font-semibold mb-4 text-gray-900">
          Have you undergone these procedures before?
        </h2>
        <div className="flex flex-col sm:flex-row justify-around items-center w-full max-w-3xl">
          <div className="flex items-center space-x-4 mb-6 sm:mb-0">
            <span className="font-medium text-gray-700">ICSI Procedure:</span>
            {["Yes", "No"].map((option) => (
              <label
                key={`icsi-${option}`}
                className={`flex items-center space-x-2 cursor-pointer ${
                  selectedICSI === option
                    ? "text-[#F48265] font-medium"
                    : "text-gray-600"
                }`}
              >
                <input
                  type="radio"
                  name="icsi"
                  value={option}
                  onChange={(e) => setSelectedICSI(e.target.value)}
                  className="hidden"
                />
                <span
                  className={`w-6 h-6 border-2 rounded-full flex items-center justify-center transition-all ${
                    selectedICSI === option
                      ? "border-[#F48265]"
                      : "border-gray-300"
                  }`}
                >
                  {selectedICSI === option && (
                    <span className="w-3 h-3 bg-[#F48265] rounded-full"></span>
                  )}
                </span>
                {option}
              </label>
            ))}
          </div>

         
          <div className="flex items-center space-x-4 mb-6 sm:mb-0">
            <span className="font-medium text-gray-700">PGT Testing:</span>
            {["Yes", "No"].map((option) => (
              <label
                key={`pgt-${option}`}
                className={`flex items-center space-x-2 cursor-pointer ${
                  selectedPGT === option
                    ? "text-[#F48265] font-medium"
                    : "text-gray-600"
                }`}
              >
                <input
                  type="radio"
                  name="pgt"
                  value={option}
                  onChange={(e) => setSelectedPGT(e.target.value)}
                  className="hidden"
                />
                <span
                  className={`w-6 h-6 border-2 rounded-full flex items-center justify-center transition-all ${
                    selectedPGT === option
                      ? "border-[#F48265]"
                      : "border-gray-300"
                  }`}
                >
                  {selectedPGT === option && (
                    <span className="w-3 h-3 bg-[#F48265] rounded-full"></span>
                  )}
                </span>
                {option}
              </label>
            ))}
          </div>
        </div>
      </div>

      <div className="text-center mb-12">
        <h2 className="text-2xl font-semibold mb-4 text-gray-900">
          Do you have any of these medical conditions?
        </h2>
        <div className="flex flex-wrap justify-center gap-6">
          {[
            "PCOS",
            "Endometriosis",
            "Low Ovarian Reserve",
            "Male Factor Infertility",
          ].map((condition) => (
            <label
              key={condition}
              className={`flex items-center space-x-2 cursor-pointer ${
                selectedConditions.includes(condition)
                  ? "text-[#F48265] font-medium"
                  : "text-gray-600"
              }`}
            >
              <input
                type="checkbox"
                value={condition}
                onChange={() => handleConditionChange(condition)}
                className="hidden"
              />
              <span
                className={`w-6 h-6 border-2 rounded-md flex items-center justify-center transition-all ${
                  selectedConditions.includes(condition)
                    ? "border-[#F48265] bg-[#F48265]"
                    : "border-gray-300"
                }`}
              >
                {selectedConditions.includes(condition) && (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-4 h-4 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={3}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                )}
              </span>
              {condition}
            </label>
          ))}
        </div>
      </div>

      <button
        onClick={handleSubmit}
        className="bg-[#F48265] text-white px-6 py-2 rounded-lg hover:bg-[#f2644b] "
        style={{ boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)" }}
      >
        Calculate
      </button>
    </div>
  );
};

export default IVFCalculator;
