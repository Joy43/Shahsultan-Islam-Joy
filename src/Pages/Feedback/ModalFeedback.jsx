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
          <img className="w-56 " src={feedbackimg} alt="" />
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
                <div className="stat-figure bg-green text-primary"></div>
                <div className="stat-title  ">
                  <button
                    className="bg-white text-gray-800
                   font-bold rounded border-b-2 border-green-500
                    hover:border-green-600 hover:bg-green-500 hover:text-white shadow-md py-2 px-6 inline-flex items-center"
                  >
                    {/* <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="currentcolor"
                        d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"
                      ></path>
                    </svg> */}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      width="24"
                      height="24"
                    >
                      <path d="M21.5 11.2l-18-11c-.3-.2-.7-.2-1 0-.3.2-.5.5-.5.8v20c0 .3.2.6.5.8.1.1.2.1.3.1.2 0 .4-.1.5-.2l18-11c.2-.2.3-.5.3-.8s-.1-.6-.3-.8z" />
                    </svg>

                    <span className="mr-2">Send Feedback</span>
                  </button>
                </div>
                <div className="stat-value text-center text-lg ">
                  +10 Feedback
                </div>
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
                {/* <button
                  onClick={() => {
                    setOpenModal(false);
                  }}
                  className="mr-0 mx-auto flex bg-slate-950 text-white px-3 py-2 rounded-lg mb-6"
                >
                  Close
                </button> */}
                <button
                  onClick={() => {
                    setOpenModal(false);
                  }}
                  className="bg-white text-gray-800 font-bold rounded border-b-2 border-red-500 hover:border-red-600 hover:bg-red-500 hover:text-white shadow-md py-2 px-6 inline-flex items-center"
                >
                  <span className="mr-2">Close</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="currentcolor"
                      d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z"
                    />
                  </svg>
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
