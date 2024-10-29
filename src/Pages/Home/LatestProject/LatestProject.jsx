import { useEffect, useRef } from "react";
import { Card } from "keep-react";
import Dblearn from "../../../assets/portfollio/latest/Dblearn.png";
import Techworld from "../../../assets/portfollio/latest/worldteach.png";
import Emedicine from "../../../assets/portfollio/latest/emedicine.png";
import Estore from "../../../assets/portfollio/latest/estore.png";
import Typewriter from "typewriter-effect";
// Custom hook for continuous auto-scrolling effect
const useAutoScroll = (refs) => {
  useEffect(() => {
    const scrollRefsArray = refs.current;
    let isScrolling = true;

    const scrollImage = () => {
      if (!isScrolling) return;

      scrollRefsArray.forEach((scrollRef) => {
        if (scrollRef) {
          scrollRef.scrollTop += 1;
          if (
            scrollRef.scrollTop >=
            scrollRef.scrollHeight - scrollRef.clientHeight
          ) {
            scrollRef.scrollTop = 0;
          }
        }
      });

      requestAnimationFrame(scrollImage);
    };

    scrollImage();

    return () => {
      isScrolling = false;
    };
  }, [refs]);
};

const LatestProject = () => {
  const scrollRefs = useRef([]);

  // Use custom hook for auto-scrolling
  useAutoScroll(scrollRefs);

  // project info
  const projects = [
    {
      id: 1,
      title: "Learning system management",
      description:
        " Learning Management System (LMS) for online educational platforms.Easy and efficient enrolled course.Structured, chapter-wise videos with recording options",
      imgSrc: Dblearn,
      buttonText: "Live site",
      buttonLink: "https://db-learn.vercel.app/",
    },
    {
      id: 2,
      title: "Word teachnology LTD",
      description:
        "World Technologies .A company that produces electronics components.update Product editing and deletion User can buy products through international payment system(Stripe)",
      imgSrc: Techworld,
      buttonText: "Live site",
      buttonLink: "https://worldtecnoloy.vercel.app/",
    },
    {
      id: 3,
      title: "E-sore world",
      description:
        "World Technologies. A company that produces electronic components. Update product editing and deletion. Users can buy products through an international payment system (Stripe).",
      imgSrc: Estore, // Using the imported image
      buttonText: "Live site",
      buttonLink: "https://worldtecnoloy.vercel.app/",
    },
    {
      id: 4,
      title: "E- Medicine store",
      description:
        "World Technologies. A company that produces electronic components. Update product editing and deletion. Users can buy products through an international payment system (Stripe).",
      imgSrc: Emedicine, 
   
      buttonText: "Live site",
      buttonLink: "https://worldtecnoloy.vercel.app/",
    },
  ];

  return (
    <>
      <div className="text-center m-4 items-center text-sky-400 shadow-md font-serif text-4xl ">
        {/* ----------type writing---------------- */}
        <Typewriter
          options={{
            strings: ["Latest", "Popular Project"],
            autoStart: true,
            loop: true,
          }}
        />
      </div>
      <div className="gap-6 grid lg:grid-cols-2 sm:grid-cols-1 md:grid-cols-1 text-white m-6">
        {projects.map((project, index) => (
          <Card
            key={project.id}
            className="w-[580px] bg-[#17184dee] hover:border hover:border-primary grid rounded-lg shadow-lg borde"
          >
            <div
              className="h-[400px] overflow-auto rounded-s-md scrollbar-hide"
              ref={(el) => (scrollRefs.current[index] = el)}
            >
              <img
                className="ease-in-out duration-[3s] rounded-2xl"
                src={project.imgSrc}
                alt={project.title}
              />
            </div>
            <div className="p-4">
              <h1 className="text-lg font-semibold">{project.title}</h1>
              <p className="mt-3 text-sm text-gray-100">
                {project.description}
              </p>
              <div className="text-center">
                <a
                  href={project.buttonLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button
                    type="button"
                    className="mt-4 text-lg rounded-sm bg-black px-2.5 py-1 text-[10px] font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                  >
                    {project.buttonText}
                  </button>
                </a>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </>
  );
};

export default LatestProject;
