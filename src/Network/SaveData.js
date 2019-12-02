import axios from "axios";
import { BaseURL } from "./BaseURL";

function addData(data) {
  console.log("data", data);
  return axios({
    method: "post",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    },
    url: BaseURL,
    data: data
  })
    .then(function(response) {
      console.log("response", response);
      return response;
    })
    .catch(function(error) {
      console.log(error);
    });
}

export default addData;
