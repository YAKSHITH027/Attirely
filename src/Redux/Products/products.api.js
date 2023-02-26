import axios from "axios";
const url = process.env.REACT_APP_JSON_SERVER_KEY;
export const getProductAPI = async (field, params) => {
  let res = await axios.get(
    `https://rc201-jsondata-serverapi.onrender.com/${field}`,
    params
  );
  let data = res.data;
  let totalCount = res.headers.get("x-total-count");

  return { data, totalCount };
};
