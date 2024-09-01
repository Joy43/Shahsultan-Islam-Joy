import { useState } from "react";
import AddFeedback from "./AddFeedback";
import feedbackimg from "../../assets/feedback.gif";
import { TbArrowBigRightLineFilled } from "react-icons/tb";

const ModalFeedback = () => {
  const [openModal, setOpenModal] = useState(false);

  return (
    <div className="flex flex-col w-full lg:flex-row items-center shadow-2xl justify-center">
      <div className="flex-grow max-h-96  bg-base-300 rounded-lg p-4">
        <img className="w-[800px] mx-auto h-80" src={feedbackimg} alt="Feedback" />
      </div>

      <div className="divider lg:divider-horizontal mx-4">
        <TbArrowBigRightLineFilled className="text-6xl text-blue-500" />
      </div>

      <div className="flex-grow h-auto bg-base-300 rounded-lg p-4">
        <div className="w-full flex items-center justify-center">
          <div className="stats shadow-lg w-full">
            <div
              onClick={() => setOpenModal(true)}
              className="stat cursor-pointer text-center"
            >
              <div className="stat-title">
                <button
                  className="bg-white text-gray-800 font-semibold rounded-lg border-b-2 border-green-500 hover:border-green-600 hover:bg-green-500 hover:text-white shadow-md py-2 px-4 flex items-center justify-center"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="24"
                    height="24"
                    className="mr-2"
                  >
                    <path d="M21.5 11.2l-18-11c-.3-.2-.7-.2-1 0-.3.2-.5.5-.5.8v20c0 .3.2.6.5.8.1.1.2.1.3.1.2 0 .4-.1.5-.2l18-11c.2-.2.3-.5.3-.8s-.1-.6-.3-.8z" />
                  </svg>
                  Send Feedback
                </button>
              </div>
              <div className="stat-value text-center text-lg">+10 Feedback</div>
            </div>
          </div>
        </div>

        {/* Modal */}
        <div
          onClick={() => setOpenModal(false)}
          className={`fixed flex justify-center items-center z-[100] ${
            openModal ? "visible opacity-1" : "invisible opacity-0"
          } inset-0 w-full h-full backdrop-blur-sm bg-black/20 transition-opacity duration-300`}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className={`relative w-full max-w-lg bg-white drop-shadow-2xl rounded-lg p-6 ${
              openModal
                ? "opacity-1 translate-y-0"
                : "-translate-y-20 opacity-0 transition-transform duration-200"
            }`}
          >
            <button
              onClick={() => setOpenModal(false)}
              className="bg-white text-gray-800 font-bold rounded-lg border-b-2 border-red-500 hover:border-red-600 hover:bg-red-500 hover:text-white shadow-md py-2 px-4 mb-4 inline-flex items-center"
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
            <AddFeedback />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalFeedback;
