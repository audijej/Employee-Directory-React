import axios from "axios";
const BASEURL = "https://randomuser.me/api/?pretty?page=3&results=100&seed=abc";

export default {
  searchEmployee: function() {
    return axios.get(BASEURL);
  }
};
