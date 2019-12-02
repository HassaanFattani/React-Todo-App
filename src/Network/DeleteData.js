import axios from "axios";
import { BaseURL } from "./BaseURL";

function DeleteTodo(todoId) {
  return axios({
    method: "DELETE",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    },
    url: BaseURL + todoId
  })
    .then(function(response) {
      console.log("delete", response);
      return response;
    })
    .catch(function(error) {
      console.log(error);
    });
}

export default DeleteTodo;
