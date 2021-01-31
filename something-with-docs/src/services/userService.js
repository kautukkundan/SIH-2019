import http from "./httpService";
import APIURL from "../utils/apiUrl";

const fetchUserDetails = async token => {
  http.setUserToken(`Token ${token}`);
  const response = await http.get(APIURL.USER_DETAILS).catch(error => {
    if (error.response) {
      return error.response;
    }
  });
  return response;
};

export { fetchUserDetails };
