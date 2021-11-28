import axios from "axios";

export const getChartData = async () => {
  let response = null;
  try {
    response = await axios.get(
      "https://s3-ap-southeast-1.amazonaws.com/he-public-data/chart2986176.json"
    );
    return response;
  } catch (error) {
    response = error.message;
  }
  return response;
};
