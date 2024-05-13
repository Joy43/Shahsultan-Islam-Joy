import { useState, useEffect } from "react";
import { CircularProgressbarWithChildren } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

import { TbBrandJavascript } from "react-icons/tb";
const Skilljs = () => {
  const [percentage, setPercentage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      // Update the percentage value every 1 second until it reaches 100%
      if (percentage < 70) {
        setPercentage((prevPercentage) => prevPercentage + 1);
      } else {
        setPercentage(0); // Reset the percentage to 0 after reaching 90%
      }
    }, 180); // Adjust the interval timing as needed for smoother animation

    return () => clearInterval(interval); // Cleanup function
  }, [percentage]);

  return (
    <div style={{ width: "250px", height: "250px" }}>
      <CircularProgressbarWithChildren
        value={percentage}
        styles={{
          path: {
            stroke: `rgba(255, 255, 0, ${percentage / 100})`, // Yellow color (255, 255, 0)
            strokeLinecap: "butt",
            transition: "stroke-dashoffset 0.5s ease 0s",
            transform: "rotate(0.25turn)",
            transformOrigin: "center center",
          },

          trail: {
            stroke: "#ffc",
            strokeLinecap: "butt",
            transform: "rotate(0.25turn)",
            transformOrigin: "center center",
          },
          text: {
            fill: "#f88",
            fontSize: "16px",
          },
          background: {
            fill: "#448D40",
          },
        }}
      >
        {/* Arbitrary content */}
        <div className="items-center justify-center text-lg text-yellow-500">
          <TbBrandJavascript className="text-4xl text-center ml-16" />
          <strong className="text-2xl">
            {percentage}% <span>Javascript</span>
          </strong>
        </div>
      </CircularProgressbarWithChildren>
    </div>
  );
};
export default Skilljs;
