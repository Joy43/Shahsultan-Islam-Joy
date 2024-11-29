import axios from "axios";
import Swal from "sweetalert2";
import { useState } from "react";
import useFeedback from "../../Hooks/useFeedback";

const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const AddFeedback = () => {
  const [previewImage, setPreviewImage] = useState("");
  const [formData, setFormData] = useState({
    emailAddress: "",
    name: "",
    keyWord: "",
    designation: "",
    date: "",
    textarea: "",
    imageUrl: "",
  });

  const AxiosIssuFeedbck = useFeedback();

  const handleInputChange = async (e) => {
    const { id, value, files } = e.target;

    if (id === "fileUpload" && files.length > 0) {
      const file = files[0];
      const imageData = new FormData();
      imageData.append("image", file);

      try {
        const response = await axios.post(image_hosting_api, imageData);
        const imageUrl = response.data.data.url;

        setFormData((prevData) => ({
          ...prevData,
          imageUrl,
        }));

        setPreviewImage(imageUrl);
      } catch (error) {
        console.error("Error uploading image:", error);
      }
    } else {
      setFormData((prevData) => ({
        ...prevData,
        [id]: value,
      }));
    }
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await AxiosIssuFeedbck.post("/portfollio", formData);

      if (response.status === 200) {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Upload successful",
          showConfirmButton: false,
          timer: 1500,
        });
      } else {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Something went wrong!",
          footer: '<a href="#">Why do I have this issue?</a>',
        });
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="h-screen flex items-center justify-center bg-indigo-600">
      <div className="max-w-4xl p-6 mx-auto bg-white rounded-md shadow-md overflow-y-scroll h-[80%] w-[90%]">
        <form onSubmit={handleFormSubmit}>
          <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
            <div>
              <label className="text-gray-700">Email Address</label>
              <input
                id="emailAddress"
                type="email"
                placeholder="Email Address"
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md focus:border-blue-500 focus:outline-none"
                value={formData.emailAddress}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <label className="text-gray-700">Name</label>
              <input
                id="name"
                type="text"
                placeholder="Name"
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md focus:border-blue-500 focus:outline-none"
                value={formData.name}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <label className="text-gray-700">Key Word</label>
              <input
                id="keyWord"
                type="text"
                placeholder="Key Word"
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md focus:border-blue-500 focus:outline-none"
                value={formData.keyWord}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <label className="text-gray-700">Designation</label>
              <input
                id="designation"
                type="text"
                placeholder="Designation"
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md focus:border-blue-500 focus:outline-none"
                value={formData.designation}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <label className="text-gray-700">Date</label>
              <input
                id="date"
                type="date"
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md focus:border-blue-500 focus:outline-none"
                value={formData.date}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <label className="text-gray-700">Feedback</label>
              <textarea
                id="textarea"
                placeholder="Write your feedback"
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md focus:border-blue-500 focus:outline-none"
                value={formData.textarea}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <label className="text-gray-700">Upload Image</label>
              <input
                id="fileUpload"
                type="file"
                accept="image/*"
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md focus:outline-none"
                onChange={handleInputChange}
              />
              {previewImage && (
                <img
                  src={previewImage}
                  alt="Preview"
                  className="w-32 h-32 mt-4 rounded-md"
                />
              )}
            </div>
          </div>
          <div className="flex justify-center mt-6">
            <button
              type="submit"
              className="px-6 py-2 text-white bg-pink-500 rounded-md hover:bg-pink-700 focus:outline-none"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddFeedback;
