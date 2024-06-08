import { AnimatePresence, motion, spring } from "framer-motion";
import { useState } from "react";
import Typewriter from "typewriter-effect";

// Import project images
// ---tech world----
import techcover from "../../../../assets/portfollio/texchworld/tecg-cover.png";
import tecgleft from "../../../../assets/portfollio/texchworld/rtech-left.png";
import techright from "../../../../assets/portfollio/texchworld/right.png";
// -------our convert----------
import convertcover from "../../../../assets/portfollio/texchworld/convert -cover.png";
import convertleft from "../../../../assets/portfollio/texchworld/convertleft.png";
import convetright from "../../../../assets/portfollio/texchworld/convet--right.png";
// -----hotel world-------
import hotelCover from "../../../../assets/portfollio/texchworld/hotel-cover.png";
import hotelRight from "../../../../assets/portfollio/texchworld/hotel-left.png";
import hotelLeft from "../../../../assets/portfollio/texchworld/hotel-right.png";
// --------scanner app-----------
import scannerCover from "../../../../assets/portfollio/scanner/work-1.png";
import scannerleft from "../../../../assets/portfollio/scanner/work-2.png";
import scannerright from "../../../../assets/portfollio/scanner/work-3.png";
// ------------donate now_----------
import donateicon from "../../../../assets/icon/Donation.png";
import coverdonation from "../../../../assets/portfollio/donation/cover.png";
import leftdonation from "../../../../assets/portfollio/donation/left.png";
import rightdonation from "../../../../assets/portfollio/donation/right.png";
// -------------icon------------
import techicon from "../../../../assets/icon/tech.png";
import hotel from "../../../../assets/icon/logo.png";
import convert from "../../../../assets/icon/ourconvert.png";
import scanner from "../../../../assets/icon/scannerpre.png";
// -------------lms----------
import Homelms from "../../../../assets/portfollio/lms/DB-Learn.png";
import coverlms from "../../../../assets/portfollio/lms/Cover-img.png";
import leftImagelms from "../../../../assets/portfollio/lms/left side.png";
import iconlmd from "../../../../assets/portfollio/lms/Favicon.png";

const projects = [
  {
    icon: techicon,
    name: "World Technology",
    cover: techcover,
    leftImage: techright,
    rightImage: tecgleft,
    description: "A company that produces electronics components.",
    link: "https://bespoke-pothos-a257c1.netlify.app/",
  },
  {
    icon: iconlmd,
    name: "DB-Learn(lms)",
    cover: coverlms,
    leftImage: Homelms,
    rightImage: leftImagelms,
    description: "Online learning system management(lms)",
    link: "https://db-learn.vercel.app",
  },
  {
    icon: hotel,
    name: "World Hotel",
    cover: hotelCover,
    leftImage: hotelLeft,
    rightImage: hotelRight,
    description: "A company that produces Hotel Room Booking.",
    link: "https://dapper-daffodil-9c8959.netlify.app/",
  },
  {
    icon: convert,
    name: "Our Converter",
    cover: convertcover,
    leftImage: convetright,
    rightImage: convertleft,
    description: "Our converter provides any type file Convert.",
    link: "https://65e7529ab4d1303a91b40734--eloquent-choux-c790a4.netlify.app/",
  },
  {
    icon: scanner,
    name: "Scanner Premium App",
    cover: scannerCover,
    leftImage: scannerleft,
    rightImage: scannerright,
    description: "Scanner Premium Plus Android app.",
    link: "https://www.amazon.com/codingx-Scanner-Premium-Plus/dp/B0BVXQXPQF/ref=sr_1_2?crid=2BL15ZLHX18P9&keywords=Scanner+Premium+Plus&qid=1702374500&sprefix=scanner+premium+plus%2Caps%2C336&sr=8-2https://www.amazon.com/codingx-Scanner-Premium-Plus/dp/B0BVXQXPQF/ref=sr_1_2?crid=2BL15ZLHX18P9&keywords=Scanner+Premium+Plus&qid=1702374500&sprefix=scanner+premium+plus%2Caps%2C336&sr=8-2",
  },
  {
    icon: donateicon,
    name: "",
    cover: coverdonation,
    leftImage: leftdonation,
    rightImage: rightdonation,
    description: "Blood Donation.",
    link: "https://chic-babka-6805ba.netlify.app/",
  },
];

const Motionportfolli = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <div className="text-center  m-4 items-center text-sky-400 shadow-md text-4xl ">
        <Typewriter
          options={{
            strings: ["MY EXCLUSIVE", "UNIQUE PORTFOLIO"],
            autoStart: true,
            loop: true,
          }}
        />
      </div>
      <div className="grid md:grid-cols-3 sm:grid-cols-2">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            layout
            transition={{ layout: { duration: 1, type: spring } }}
            onClick={() => setIsOpen(!isOpen)}
            className="mx-auto my-6 max-w-[350px] rounded-lg border font-sans shadow-2xl"
          >
            <motion.div
              layout="position"
              className="rounded-lg border w-full inline-flex font-sans  p-4 text-center shadow-2xl "
            >
              <img src={project.icon} className="rounded-lg h-20" alt="" />
              <span className="text-3xl font-extrabold  text-[#FF444A]">
                {project.name}
              </span>
            </motion.div>
            {isOpen && (
              <AnimatePresence>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1 }}
                >
                  <div className="flex flex-col shadow-md gap-1">
                    <div className="w-full">
                      <img
                        width={400}
                        height={200}
                        className="h-[150px] w-full bg-black/40"
                        src={project.cover}
                        alt=""
                      />
                    </div>
                    <div className="flex gap-1 shadow-lg overflow-hidden">
                      <img
                        width={201}
                        height={201}
                        className="h-[150px] w-[49.5%] bg-black/40"
                        src={project.leftImage}
                        alt=""
                      />
                      <img
                        width={202}
                        height={202}
                        className="h-[150px] w-[49.5%]  bg-black/40"
                        src={project.rightImage}
                        alt=""
                      />
                    </div>
                  </div>
                  <div className="p mt-3 space-y-2 px-4">
                    <h2 className=" text-xl font-semibold">
                      {project.description}
                    </h2>
                    <h2 className=" text-sm">
                      Multiple role-based sites where individuals can log in as
                      typical clients and a few particular individuals can log
                      in as admins.
                    </h2>
                  </div>
                  {/* ----------button--------------- */}
                  <div className="text-center m-6">
                    <a href={project.link}>
                      <button className="btn btn-active btn-secondary">
                        <a href={project.link}>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="30"
                            height="30"
                            viewBox="0 0 24 24"
                          >
                            <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm3.203 17.198a5.973 5.973 0 0 1-8.4-.015l-.001-.001a5.965 5.965 0 0 1-.131-8.589l4.968 4.969a1.5 1.5 0 0 0 2.121 2.121l4.969-4.969a5.96 5.96 0 0 1-.014 8.401l-.002.002a5.963 5.963 0 0 1-4.51 2.01zM12 5.25c-2.488 0-4.5 2.012-4.5 4.5s2.012 4.5 4.5 4.5 4.5-2.012 4.5-4.5-2.012-4.5-4.5-4.5z" />
                          </svg>
                        </a>
                        Visit Now
                      </button>
                    </a>
                  </div>
                </motion.div>
              </AnimatePresence>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Motionportfolli;
