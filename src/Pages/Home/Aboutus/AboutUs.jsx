import { useState } from "react";
import Typewriter from "typewriter-effect";
import about from "../../../assets/slide/about us.gif";
const Aboutus = () => {
  const accordionData = [
    {
      title: "Programming Skill",
      subTitle: [
        "expert:-React,html5,css3,json web token,shopify",
        "Comfortable:- React router,Next js,Bootstrap,rechart,React query ,nodejs",
        "Fontend:- Tailwind css, daisy ui, matarial ui,React Flowbit, keep react",
      ],
      svg: (
        <svg
          width={20}
          fill="white"
          viewBox="0 0 1920 1920"
          xmlns="http://www.w3.org/2000/svg"
        >
          ...
        </svg>
      ),
    },
    {
      title: "Skills",
      subTitle: [
        "web Application and app Design",
        "Full stack web Development with",
        "App interface/ Website into app",
      ],
      svg: (
        <svg
          width={20}
          version="1.1"
          id="_x32_"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
          fill="white"
        >
          ...
        </svg>
      ),
    },
    {
      title: "Experience",
      subTitle: [
        "Full stack Developer internship",
        "c program,java script expert",
        " App interface/ Website into app/app published anmazon store",
      ],
      svg: (
        <svg
          width={20}
          fill="white"
          viewBox="0 -1.5 35 35"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
        >
          ...
        </svg>
      ),
    },

    {
      title: "Education",
      subTitle: [
        "Computer science and engineering (CSE)",
        "Jonior School Certificate Nabarun Public School",
        "srcondery school certificate in Nabarun Public school",
        "Higher school certificate in Royal Media college",
      ],
      svg: (
        <svg
          width={20}
          viewBox="0 0 16 16"
          xmlns="http://www.w3.org/2000/svg"
          fill="white"
          className="bi bi-gear-fill"
        >
          ...
        </svg>
      ),
    },
    {
      title: "Language",
      subTitle: [
        "Bangla:-(Native)",
        "English:-(Communication)",
        "Hindi:-(Limited working proficiency) ",
      ],
      svg: (
        <svg
          width={20}
          fill="white"
          viewBox="0 0 1920 1920"
          xmlns="http://www.w3.org/2000/svg"
        >
          ...
        </svg>
      ),
    },
  ];

  // Toggle State and Function
  const [isActive, setIsActive] = useState(null);
  const [subTitle, setSubTitle] = useState(null);

  const handleToggle = (idx) => {
    if (accordionData[idx].title === "Education") {
      setIsActive(idx);
      setSubTitle(accordionData[idx].subTitle);
    } else {
      setIsActive((prevIdx) => (prevIdx === idx ? null : idx));
      if (
        accordionData[idx].title === "Skills" ||
        accordionData[idx].title === "Experience" ||
        accordionData[idx].title === "Language" ||
        accordionData[idx].title === "Programming Skill"
      ) {
        setSubTitle(accordionData[idx].subTitle);
      } else {
        setSubTitle(null);
      }
    }
  };

  return (
    <div>
      <div className="text-center items-center text-sky-400 shadow-md text-4xl ">
        {/* ----------type writing---------------- */}
        <Typewriter
          options={{
            strings: ["ABOUT", "US", "SHAHSULTAN ISLAM JOY"],
            autoStart: true,
            loop: true,
          }}
        />
      </div>

      {/* -----about us---- */}
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <img src={about} alt="" />
          </div>
          <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            {/* ------  all tabs ------------ */}

            <div
              className={`max-w-[400px] my-10 overflow-hidden border-x ${
                isActive === accordionData.length - 1
                  ? "border-x border-b"
                  : "border-x"
              } border-[#03BF70] rounded-lg`}
            >
              {accordionData?.map((data, idx) => (
                <div key={idx}>
                  {/* header / title  */}
                  <div
                    onClick={() => handleToggle(idx)}
                    className="relative flex cursor-pointer items-center gap-6  p-5"
                  >
                    {data?.svg}
                    <h5 className=" font-medium">{data?.title}</h5>
                    <span className="w-0 h-0 border-b-[15px] border-b-[#03BF70] border-r-[15px] border-r-transparent absolute -bottom-[7px] left-10 -rotate-45"></span>
                  </div>
                  {/* body / content  */}
                  <div
                    className={`grid overflow-hidden transition-all duration-300 ease-in-out  ${
                      isActive === idx
                        ? "grid-rows-[1fr] opacity-100"
                        : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="overflow-hidden">
                      {/* ------- subtitle if it's the section that was clicked --------*/}
                      {subTitle &&
                        subTitle.map((subData, irx) => (
                          <div
                            key={irx}
                            className="w-full  py-4 pl-16 pr-4 transition-all duration-500 hover:text-black hover:bg-green-100 border-l-4 border-white hover:border-[#03BF70]"
                          >
                            {irx + 1}. {subData}
                          </div>
                        ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Aboutus;
