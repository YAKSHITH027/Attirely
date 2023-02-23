import axios from "axios";
const url = process.env.REACT_APP_JSON_SERVER_KEY;
export const getProductAPI = async (field, params) => {
  let res = await axios.get(
    `https://rc201-jsondata-serverapi.onrender.com/MensData`,
    params
  );
  return res.data;
};
