import SkillExpress from "./Expressjs";
import Skilljs from "./SkillJs";
import SkillNodejs from "./SkillNodejs";
import SkillProgress from "./SkillProgress";
import Typewriter from "typewriter-effect";
const Allskill = () => {
  return (
    <div>
      <div className="text-center ml-2 items-center text-sky-400 shadow-md text-4xl m-4  ">
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
      <div className="shadow-2xl gap-2  grid lg:grid-cols-4 sm:grid-cols-2 m-4  ">
        <SkillProgress></SkillProgress>
        <SkillNodejs></SkillNodejs>
        <Skilljs></Skilljs>
        <SkillExpress></SkillExpress>
      </div>
    </div>
  );
};

export default Allskill;
