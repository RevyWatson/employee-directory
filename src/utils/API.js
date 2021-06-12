import axios from "axios";

const BASEURL = "https://randomuser.me/api/";
const APIKEY = "";

export default {
    getRandomEmployees: function(query) {
        return axios.get(BASEURL + query + APIKEY);
    }
};