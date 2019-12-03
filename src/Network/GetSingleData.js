import axios from "axios";
import { BaseURL } from "./BaseURL";

function getSingleData(todoId) {
  return axios({
    method: "get",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    },
    url: BaseURL + todoId
  })
    .then(function(response) {
      return response;
    })
    .catch(function(error) {
      console.log(error);
    });
}

export default getSingleData;
