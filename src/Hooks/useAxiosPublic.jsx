import axios from "axios";

const axiosPublic = axios.create({
  baseURL: "https://portfollio-server-seven.vercel.app",
});

const useAxiosPublic = () => {
  return axiosPublic;
};

export default useAxiosPublic;
