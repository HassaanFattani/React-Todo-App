import axios from "axios";
import { BaseURL } from "./BaseURL";

function getData() {
  return axios({
    method: "get",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    },
    url: BaseURL
  })
    .then(function(response) {
      return response;
    })
    .catch(function(error) {
      console.log(error);
    });
}

export default getData;
