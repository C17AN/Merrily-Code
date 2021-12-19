import axios, { AxiosResponse } from "axios";
import endpoints from "constants/endpoints";
import { useEffect, useState } from "react";

const useFetchWakaTime = () => {
  const [wakaTimeData, setWakaTimeData] = useState<null | AxiosResponse>(null);

  const getWakaTimeData = async () => {
    const result = await axios.get(endpoints.WAKATIME);
    setWakaTimeData(result);
  };

  useEffect(() => {
    getWakaTimeData();
  }, []);

  return wakaTimeData;
};

export default useFetchWakaTime;
