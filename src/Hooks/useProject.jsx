import axios from "axios";

// eslint-disable-next-line react-refresh/only-export-components
const AxiosProject = axios.create({
  baseURL: "https://portfollio-server-seven.vercel.app",
});

const useProject = () => {
  return AxiosProject;
};

export default useProject;
