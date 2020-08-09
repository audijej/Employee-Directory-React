import axios from "axios";
const BASEURL = "https://my-json-server.typicode.com/audijej/demo/db";

export default {
  searchEmployee: function() {
    return axios.get(BASEURL);
  }
};


