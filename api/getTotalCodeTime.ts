import axios from "axios";
import endpoints from "constants/endpoints";

const getTotalCodeTime = async () => {
  try {
    const { data } = await axios.get(endpoints.WAKATIME);
    return data;
  } catch (error) {
    return error;
  }
};

export default getTotalCodeTime;
