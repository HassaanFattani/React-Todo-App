import axios from "axios";
import { BaseURL } from "./BaseURL";

function editData(data, todoId) {
  return axios({
    method: "Patch",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    },
    url: BaseURL + todoId,
    data: data
  })
    .then(function(response) {
      return response;
    })
    .catch(function(error) {
      console.log(error);
    });
}

export default editData;
