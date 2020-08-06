import axios from "axios";
const BASEURL = "https://reqres.in/api/users?page=2";

export default {
  searchEmployee: function() {
    return axios.get(BASEURL);
  }
};
