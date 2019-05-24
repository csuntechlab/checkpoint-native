import axios from "./config";

const getUserProfileAPI = (success, error) => {
  axios.API.get(`/api/user/profile`).then(
    response => success(response),
    response => error(response)
  );
};

export default {
  getUserProfileAPI
};
