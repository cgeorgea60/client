import axios from "axios";

export default axios.create({
  baseURL: "https://restaurants-api.up.railway.app/api/v1/restaurants",
});
