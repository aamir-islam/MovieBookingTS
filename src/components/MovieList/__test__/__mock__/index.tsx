import { apiUrl } from "../../../../constants/global";
const axios = require("axios");

async function getMovieData(apiUrl: string) {
  const response = await axios.get(apiUrl);
  return response.data;
}
module.exports = getMovieData;
