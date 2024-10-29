import AnimationComponent from "../../Animation/animatedbg";
import Contact from "../../Contact/Contact";
import Feedback from "../../Feedback/Feedback";
import ModalFeedback from "../../Feedback/ModalFeedback";

import Allskill from "../../SkillsProgress/Allskill";
import SkillProgressBars from "../../SkillsProgress/Progressbar";

import Aboutus from "../Aboutus/AboutUs";
import LatestProject from "../LatestProject/LatestProject";

import Motionportfolli from "../Portfolliosite/Site1/Motionportfollio";

import Myself from "./../Myself/newabout";



const Home = () => {
  return (
    <div>
      <AnimationComponent></AnimationComponent>
      <div className="mx-auto ">
     
      <Myself/>
      </div>
      <div>
        <Aboutus></Aboutus>
     
      </div>
      <div>
        <Allskill></Allskill>
      </div>
      <div>
        <SkillProgressBars></SkillProgressBars>
      </div>
      <div>
        <Motionportfolli></Motionportfolli>
      </div>

      <div>
        <LatestProject></LatestProject>
      </div>
      <div>
        <Contact></Contact>
      </div>
      <div>
        <Feedback></Feedback>
      </div>

      <div className="">
        <ModalFeedback></ModalFeedback>
      </div>
    </div>
  );
};

export default Home;
