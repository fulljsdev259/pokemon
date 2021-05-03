import axios from "axios";
import { BASE_URL } from "../config";

export default function fireAjax(method, URL, headers, data) {
  console.log(method, URL, headers, data,'method, URL, headers, data');
  
  const url = BASE_URL + URL;    
  let config = {};
  if (headers != undefined && headers != "") {
    config = {
      headers
    };
  } else {
    config = {
      headers: {
        "Content-Type": "application/json"
      }
    };
  }
  if (method === "GET") {
    return axios.get(url, config, data);
  } else if (method === "POST") {      
    return axios.post(url, data, config);
  } else if (method === "PUT") {
    return axios.put(url, data, config);
  }
}
