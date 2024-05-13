import Skilljs from "./SkillJs";
import SkillNodejs from "./SkillNodejs";
import SkillProgress from "./SkillProgress";
import Typewriter from "typewriter-effect";
const Allskill = () => {
  return (
    <div>
      <div className="text-center items-center text-sky-400 shadow-md text-4xl ">
        {/* ----------type writing---------------- */}
        <Typewriter
          options={{
            strings: [
              "My",
              "skills",
              "All the best popular programming skills",
            ],
            autoStart: true,
            loop: true,
          }}
        />
      </div>
      <div className="shadow-2xl gap-3 mb-3 mt-2 grid lg:grid-cols-4 sm:grid-cols-2 mx-auto  p-3">
        <SkillProgress></SkillProgress>
        <SkillNodejs></SkillNodejs>
        <Skilljs></Skilljs>
      </div>
    </div>
  );
};

export default Allskill;
