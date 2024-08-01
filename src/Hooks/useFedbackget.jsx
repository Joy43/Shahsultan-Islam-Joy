import axios from "axios";

const AxiosIssuFeedbck = axios.create({
  baseURL: "https://portfollio-server-seven.vercel.app",
});

const useFeedbackget = () => {
  const getFeedbackData = async (portfollio) => {
    try {
      const response = await AxiosIssuFeedbck.get(portfollio);
      return response.data;
    } catch (error) {
      throw new Error("Error fetching feedback data:", error);
    }
  };

  return getFeedbackData;
};

export default useFeedbackget;
