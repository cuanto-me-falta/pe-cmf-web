import axios from "axios";
import { notes } from "../types/types";
export const fetchNotas = async ({ file }: any) => {
  const URL = "https://cuantomefalta.app:2797/card-report/upload";
  const headers = { "Content-Type": "multipart/form-data" };
  const data = await axios.post(
    URL,
    {
      card_report: file,
    },
    { headers: headers }
  );
  return data;
};
