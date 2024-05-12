import Swal from "sweetalert2";
import { useState } from "react";

import useProject from "../../../../Hooks/useProject";
import axios from "axios";

const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const AddSite = () => {
  const AxiosProject = useProject();
  const [formData, setFormData] = useState({
    name: "",
    Title: "",

    visitURL: "",
    textarea: "",
    siteIcon: "",
    coverImage: "",
    leftSiteImage: "",
    rightSiteImage: "",
  });

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const handleFileChange = (e) => {
    const { id } = e.target;
    const file = e.target.files[0];
    setFormData((prevData) => ({
      ...prevData,
      [id]: file,
    }));
  };

  const uploadImage = async (file) => {
    if (!file) return null;
    const formData = new FormData();
    formData.append("image", file);
    try {
      const response = await axios.post(image_hosting_api, formData);
      return response.data.data.url;
    } catch (error) {
      console.error("Error uploading image:", error);
      return null;
    }
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    const siteIconUrl = await uploadImage(formData.siteIcon);
    const coverImageUrl = await uploadImage(formData.coverImage);
    const leftSiteImageUrl = await uploadImage(formData.leftSiteImage);
    const rightSiteImageUrl = await uploadImage(formData.rightSiteImage);

    const dataToSubmit = {
      ...formData,
      siteIcon: siteIconUrl,
      coverImage: coverImageUrl,
      leftSiteImage: leftSiteImageUrl,
      rightSiteImage: rightSiteImageUrl,
    };

    try {
      const response = await AxiosProject.post("/project", dataToSubmit);

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
      <div className="max-w-4xl  p-6 mx-auto  bg-indigo-600 rounded-md shadow-md ">
        <form onSubmit={handleFormSubmit}>
          <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
            {/* ---------visted url] */}
            <div>
              <label className="text-white dark:text-gray-200">
                visite URL
              </label>
              <input
                id="visitURL"
                type="text"
                placeholder="visitURL"
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                value={formData.visitURL}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <label className="text-white dark:text-gray-200">Name</label>
              <input
                id="name"
                type="text"
                placeholder="Name"
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                value={formData.name}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <label className="text-white dark:text-gray-200">Title</label>
              <input
                id="Title"
                type="text"
                placeholder="Title"
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                value={formData.Title}
                onChange={handleInputChange}
              />
            </div>

            {/* -----------text area------- */}
            <div>
              <label className="text-white dark:text-gray-200">
                Description
              </label>
              <textarea
                id="textarea"
                placeholder="Text Area"
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                value={formData.textarea}
                onChange={handleInputChange}
              ></textarea>
            </div>

            {/* Site icon upload */}
            <div>
              <label className="block text-sm font-medium text-white">
                Site Icon Upload
              </label>
              <div className="mt-1 grid justify-center p-3 px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                <div className="space-y-1 text-center">
                  <div className="flex text-sm text-gray-600">
                    <label
                      htmlFor="siteIconUpload"
                      className="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"
                    >
                      <input
                        id="siteIcon"
                        name="siteIconUpload"
                        type="file"
                        accept="image/jpeg/png"
                        onChange={handleFileChange}
                      />
                    </label>
                  </div>
                  <p className="text-xs text-white">PNG, JPG</p>
                </div>
              </div>
            </div>
            {/* -----------cover image upload------- */}
            <div>
              <label className="block text-sm font-medium text-white">
                Cover Image
              </label>
              <div className="mt-1 grid justify-center p-3 px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                <div className="space-y-1 text-center">
                  <div className="flex text-sm text-gray-600">
                    <label
                      htmlFor="file-upload"
                      className="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600
                    hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2
                     focus-within:ring-indigo-500"
                    >
                      <input
                        id="coverImage"
                        name="coverImage"
                        type="file"
                        accept="image/jpeg/png"
                        onChange={handleInputChange}
                      />
                    </label>
                  </div>
                  <p className="text-xs text-white">PNG, JPG</p>
                </div>
              </div>
            </div>
            {/* -----------left site upload------- */}
            <div>
              <label className="block text-sm font-medium text-white">
                left Picture upload
              </label>
              <div className="mt-1 grid justify-center p-3 px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                <div className="space-y-1 text-center">
                  <div className="flex text-sm text-gray-600">
                    <label
                      htmlFor="file-upload"
                      className="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600
                    hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2
                     focus-within:ring-indigo-500"
                    >
                      <input
                        id="leftSiteImage"
                        name="leftSiteImage"
                        type="file"
                        accept="image/jpeg/png"
                        onChange={handleInputChange}
                      />
                    </label>
                  </div>
                  <p className="text-xs text-white">PNG, JPG</p>
                </div>
              </div>
            </div>
            {/* ----------- rigt site------- */}
            <div>
              <label className="block text-sm font-medium text-white">
                Right Picture
              </label>
              <div className="mt-1 grid justify-center p-3 px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                <div className="space-y-1 text-center">
                  <div className="flex text-sm text-gray-600">
                    <label
                      htmlFor="file-upload"
                      className="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600
                    hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2
                     focus-within:ring-indigo-500"
                    >
                      <input
                        id="rightSiteImage"
                        name="rightSiteImage"
                        type="file"
                        accept="image/jpeg/png"
                        onChange={handleInputChange}
                      />
                    </label>
                  </div>
                  <p className="text-xs text-white">PNG, JPG</p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-center mt-6">
            <button
              type="submit"
              className=" px-6 py-2 leading-5 text-white transition-colors duration-200 transform bg-pink-500 rounded-md hover:bg-pink-700 focus:outline-none focus:bg-gray-600"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddSite;
