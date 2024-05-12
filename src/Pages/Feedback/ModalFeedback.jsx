import { useState } from "react";
import AddFeedback from "./AddFeedback";
import feedbackimg from "../../assets/portfollio/feedback/Feedback Request.png";
import { TbArrowBigRightLineFilled } from "react-icons/tb";
const ModalFeedback = () => {
  const [openModal, setOpenModal] = useState(false);
  return (
    <div>
      <div className="flex flex-col w-full lg:flex-row">
        <div className="grid flex-grow h-32 card bg-base-300 rounded-box place-items-center">
          <img className="w-56" src={feedbackimg} alt="" />
        </div>

        {/*------------- divider---------- */}

        <div className="divider lg:divider-horizontal">
          <TbArrowBigRightLineFilled className="text-8xl bg-blue-500 "></TbArrowBigRightLineFilled>
        </div>
        <div className="grid flex-grow h-32 card bg-base-300 rounded-box place-items-center">
          {/* -------left side----- */}
          <div className="w-72 mx-auto flex items-center justify-center">
            <div className="stats shadow">
              <div onClick={() => setOpenModal(true)} className="stat">
                <div className="stat-figure bg-green text-primary">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    className="inline-block w-8 h-8 stroke-current"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                    ></path>
                  </svg>
                </div>
                <div className="stat-title">
                  {" "}
                  <button className="btn font-bold text-xl btn-success text-text p-2 rounded-lg">
                    Adding Feedback
                  </button>
                </div>
                <div className="stat-value text-primary">+9</div>
              </div>
            </div>
            {/* -------right side--------- */}
            <div
              onClick={() => setOpenModal(false)}
              className={`fixed flex justify-center items-center z-[100] ${
                openModal ? "visible opacity-1" : "invisible opacity-0"
              } inset-0 w-full h-full backdrop-blur-sm bg-black/20 duration-100`}
            >
              <div
                onClick={(e_) => e_.stopPropagation()}
                className={`absolute w-full lg:w-[500px] bg-white drop-shadow-2xl rounded-lg ${
                  openModal
                    ? "opacity-1 duration-300 translate-y-0"
                    : "-translate-y-20 opacity-0 duration-150"
                }`}
              >
                <button
                  onClick={() => {
                    setOpenModal(false);
                  }}
                  className="mr-0 mx-auto flex bg-slate-950 text-white px-3 py-2 rounded-lg mb-6"
                >
                  Close
                </button>
                <AddFeedback></AddFeedback>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalFeedback;
