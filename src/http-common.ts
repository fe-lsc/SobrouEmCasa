import axios from "axios";

export default axios.create({
  baseURL: "https://sobrou-em-casa-api.herokuapp.com/",
  headers: {
    "Content-type": "application/json"
  }
});