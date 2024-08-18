import { Link } from "react-router-dom";
import logo from "../../../assets/logo.png";
import CV from "../../../assets/portfollio/CV/shahsultan inslam JOY.png";

import { Button } from "keep-react";

const Navbar = () => {
  const Navlinks = (
    <>
      <li>
        <Link to="">Home</Link>
      </li>

      <li>
        <Link to="/certificate">Certificate</Link>
      </li>
      <li>
        <Link to="/contact">Contact Us</Link>
      </li>
      {/* -------dashboad----------- */}
      <li>
        {" "}
        <Link to="/ContactInfo">
          {" "}
          {/* ---------message button---------- */}
          <button
            type="button"
            className="px-5 py-2.5 flex items-center  text-sm tracking-wider font-semibold border-r-2 border-[#333] outline-none text-white bg-[#333] active:bg-[#111] transition-all"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="17px"
              fill="currentColor"
              className="mr-3"
              viewBox="0 0 512 512"
            >
              <path
                d="m331.756 277.251-42.881 43.026c-17.389 17.45-47.985 17.826-65.75 0l-42.883-43.026L26.226 431.767C31.959 434.418 38.28 436 45 436h422c6.72 0 13.039-1.58 18.77-4.232L331.756 277.251z"
                data-original="#000000"
              ></path>
              <path
                d="M467 76H45c-6.72 0-13.041 1.582-18.772 4.233l164.577 165.123c.011.011.024.013.035.024a.05.05 0 0 1 .013.026l53.513 53.69c5.684 5.684 17.586 5.684 23.27 0l53.502-53.681s.013-.024.024-.035c0 0 .024-.013.035-.024L485.77 80.232C480.039 77.58 473.72 76 467 76zM4.786 101.212C1.82 107.21 0 113.868 0 121v270c0 7.132 1.818 13.79 4.785 19.788l154.283-154.783L4.786 101.212zm502.428-.002L352.933 256.005 507.214 410.79C510.18 404.792 512 398.134 512 391V121c0-7.134-1.82-13.792-4.786-19.79z"
                data-original="#000000"
              ></path>
            </svg>
            Message
          </button>
        </Link>
      </li>
    </>
  );
  return (
    <div>
      <div className="navbar bg-[#3C2A7E]  text-white shadow-2xl border-cyan-200 mb-4">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="text-3xl  menu  menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-200 rounded-box w-52"
            >
              {Navlinks}
            </ul>
          </div>
          {/* --------icon ------ */}

          <Link to="/">
            <a className="rounded-2xl">
              <img className="w-15 h-12" src={logo} alt="logo" />
            </a>
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 ">{Navlinks}</ul>
        </div>
        <div className="navbar-end gap-4">
       

          {/* ----------download resume----------- */}
          <div>
            <a href={CV} download>
              <Button className="align-middle  select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg bg-gray-900 text-amber-400 shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none">
                Download CV
              </Button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
