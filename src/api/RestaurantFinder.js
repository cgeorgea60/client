import axios from "axios";

export default axios.create({
  baseURL: "https://restaurants-api/api/v1/restaurants",
});
