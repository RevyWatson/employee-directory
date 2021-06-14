import axios from "axios";


let API = {
  // Gets all users
  getRandomEmployees: function() {
    return axios.get("https://randomuser.me/api/?results=50&nat=us");
  }
};

export default API;