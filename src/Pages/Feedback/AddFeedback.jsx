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
    imageUrl: "display_url",
  });

  const AxiosIssuFeedbck = useFeedback();

  const handleInputChange = async (e) => {
    const { id, value, files } = e.target;

    if (id === "fileUpload" && files.length > 0) {
      const file = files[0];
      const formData = new FormData();
      formData.append("image", file);
      formData.append("key", image_hosting_key);

      try {
        const response = await axios.post(image_hosting_api, formData);
        const imageUrl = response.data.data.url;

        setFormData((prevData) => ({
          ...prevData,
          [id]: imageUrl,
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
    <div>
      <div className="max-w-4xl p-6 mx-auto bg-indigo-600 rounded-md shadow-md">
        <form onSubmit={handleFormSubmit}>
          <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
            <div>
              <label className="text-white">Email Address</label>
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
              <label className="text-white">Name</label>
              <input
                id="name"
                type="text"
                placeholder="Name"
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md focus:border-blue-500 focus:outline-none"
                value={formData.name}
                onChange={handleInputChange}
              />
            </div>
            {/* Add the rest of your fields */}
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
