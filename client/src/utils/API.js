import axios from "axios";
axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem('id_token')}`;
export default {
  // Gets a single user by id
  getUser: function(id) {
    // axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem('id_token')}`;
    return axios.get(`/user/${id}`);
  }
};