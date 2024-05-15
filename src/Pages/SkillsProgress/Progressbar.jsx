import { useState, useEffect } from "react";
import { CircularProgressbarWithChildren } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { SiTailwindcss, SiNextdotjs, SiRedux, SiHtml5 } from "react-icons/si";

const commonStyle = {
  path: {
    strokeLinecap: "butt",
    transition: "stroke-dashoffset 0.5s ease 0s",
    transform: "rotate(0.25turn)",
    transformOrigin: "center center",
  },
  trail: {
    stroke: "#dfdf",
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
};

const skillsData = [
  {
    id: 1,
    name: "Tailwind CSS",
    percentage: 80,
    icon: SiTailwindcss,
    style: {
      ...commonStyle,
      path: {
        ...commonStyle.path,
        stroke: `rgba(62, 199, 152, 0.8)`,
      },
    },
  },
  {
    id: 2,
    name: "Next js",
    percentage: 50,
    icon: SiNextdotjs,
    style: {
      ...commonStyle,
      path: {
        ...commonStyle.path,
        stroke: `rgba(245, 60, 86, 0.8)`,
      },
    },
  },
  {
    id: 3,
    name: "Redux",
    percentage: 65,
    icon: SiRedux,
    style: {
      ...commonStyle,
      path: {
        ...commonStyle.path,
        stroke: `rgb(122,80,190)`,
      },
    },
  },
  {
    id: 4,
    name: "HTML/CSS",
    percentage: 85,
    icon: SiHtml5,
    style: {
      ...commonStyle,
      path: {
        ...commonStyle.path,
        stroke: `rgb(45,83,229)`,
      },
    },
  },
];

const CircularProgressBar = ({ percentage, Icon, Name, style }) => {
  const [displayPercentage, setDisplayPercentage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setDisplayPercentage((prevPercentage) => {
        const nextPercentage =
          prevPercentage >= percentage ? 0 : prevPercentage + 1;
        return nextPercentage;
      });
    }, 250); // Duration for each step

    return () => clearInterval(interval); // Cleanup function
  }, [percentage]);

  return (
    <div style={{ width: "250px", height: "250px" }}>
      <CircularProgressbarWithChildren
        value={displayPercentage}
        styles={style}
        counterClockwise
      >
        <Icon style={{ width: 50, height: 50 }} />
        <div style={{ fontSize: "20px", marginTop: "6px" }}>{Name}</div>
        <div style={{ fontSize: "24px", marginTop: "10px" }}>
          {Math.round(displayPercentage)}%
        </div>
      </CircularProgressbarWithChildren>
    </div>
  );
};

const SkillProgressBars = () => {
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    setSkills(skillsData);
  }, []);

  return (
    <div className="grid lg:grid-cols-4 gap-6 sm:grid-cols-1  md:grid-cols-1 ">
      {skills.map((skill) => (
        <div key={skill.id} className="">
          <CircularProgressBar
            percentage={skill.percentage}
            Icon={skill.icon}
            Name={skill.name}
            style={skill.style}
          />
        </div>
      ))}
    </div>
  );
};

export default SkillProgressBars;
