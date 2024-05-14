import Contact from "../../Contact/Contact";
import Feedback from "../../Feedback/Feedback";
import ModalFeedback from "../../Feedback/ModalFeedback";

import Allskill from "../../SkillsProgress/Allskill";
import SkillProgress from "../../SkillsProgress/SkillProgress";
import SkillProgressBars from "../../SkillsProgress/Tailwindcss";
import Aboutus from "../Aboutus/AboutUs";
import Banner from "../Banner/Banner";
import Certificate from "../Certificate/certificate";
import Motionportfolli from "../Portfolliosite/Site1/Motionportfollio";
import { Slider } from "../slider/Slider";

const Home = () => {
  return (
    <div>
      <div className="mx-auto ">
        {/* <Banner></Banner> */}
        <Slider></Slider>
      </div>
      <div>
        <Aboutus></Aboutus>
      </div>
      <div>
        <Allskill></Allskill>
      </div>
      <div className="grid ">
        <SkillProgressBars></SkillProgressBars>
      </div>
      <div>
        <Motionportfolli></Motionportfolli>
      </div>

      <div>
        <Contact></Contact>
      </div>
      <div>
        <Feedback></Feedback>
      </div>
      <div className="bg-red-500">
        <ModalFeedback></ModalFeedback>
      </div>
      <Certificate></Certificate>
    </div>
  );
};

export default Home;
