import { Link } from "react-router-dom";
import logo from "../../../assets/logo.png";

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
      <li>
        <Link to="/ContactInfo">
          <button
            type="button"
            className="px-4 py-2 flex items-center text-sm font-semibold border border-[#333] text-white bg-[#333] hover:bg-[#111] transition duration-300 rounded-lg shadow-lg"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="17px"
              fill="currentColor"
              className="mr-2"
              viewBox="0 0 512 512"
            >
              <path d="m331.756 277.251-42.881 43.026c-17.389 17.45-47.985 17.826-65.75 0l-42.883-43.026L26.226 431.767C31.959 434.418 38.28 436 45 436h422c6.72 0 13.039-1.58 18.77-4.232L331.756 277.251z" />
              <path d="M467 76H45c-6.72 0-13.041 1.582-18.772 4.233l164.577 165.123c.011.011.024.013.035.024a.05.05 0 0 1 .013.026l53.513 53.69c5.684 5.684 17.586 5.684 23.27 0l53.502-53.681s.013-.024.024-.035c0 0 .024-.013.035-.024L485.77 80.232C480.039 77.58 473.72 76 467 76zM4.786 101.212C1.82 107.21 0 113.868 0 121v270c0 7.132 1.818 13.79 4.785 19.788l154.283-154.783L4.786 101.212zm502.428-.002L352.933 256.005 507.214 410.79C510.18 404.792 512 398.134 512 391V121c0-7.134-1.82-13.792-4.786-19.79z" />
            </svg>
            Message
          </button>
        </Link>
      </li>
    </>
  );

  return (
    <div className="fixed top-0 left-0 w-full bg-[#3C2A7E] text-white shadow-lg z-50">
      <div className="navbar container mx-auto px-4 py-2 flex justify-between items-center">
        <div className="navbar-start">
          <Link to="/">
          <a className="rounded-2xl">
              <img className="w-15 h-12" src={logo} alt="logo" />
            </a>
          </Link>
          <div className="dropdown lg:hidden">
            <div tabIndex={0} role="button" className="btn btn-ghost">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
              </svg>
            </div>
            <ul tabIndex={0} className="menu dropdown-content mt-3 p-2 shadow bg-base-200 rounded-box w-52">
              {Navlinks}
            </ul>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{Navlinks}</ul>
        </div>
        <div className="navbar-end">
          {/* Add other buttons or elements here if needed */}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
