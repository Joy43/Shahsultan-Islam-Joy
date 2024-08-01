import "./Loadding.css";
import ssjoy from "../../../assets/logo.png";
const Loader = () => {
  return (
    <div className="loader">
      <div className="svg-wrapper grid  bg-slate-900 ">
        {/* copy svg image and past it here */}
        <div className="inline-block animate-bounce  rounded-lg">
          <img className="w-36 h-36" src={ssjoy} alt="logo" />
        </div>

        <div className="loading-text text-center">Loading ...</div>
      </div>
    </div>
  );
};

export default Loader;
