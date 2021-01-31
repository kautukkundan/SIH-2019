import http from "./httpService";
import APIURL from "../utils/apiUrl";

import cookie from "react-cookies";
import getAvatar from "../utils/createAvatar";

const isLoggedIn = () => {
  const userToken = cookie.load("COOKIE_NAME");
  if (userToken) {
    http.setUserToken(userToken);
    return userToken;
  } else {
    return false;
  }
};

const login = async (username, password) => {
  console.log({
    username: username,
    password: password
  });

  const response = await http
    .post(APIURL.LOGIN, {
      username: username,
      password: password
    })
    .catch(error => {
      if (error.response) {
        return error.response;
      }
    });
  if (response.status === 200) {
    cookie.save("COOKIE_NAME", response.data.token, { path: "/" });
  }
  return response;
};

const logout = () => {
  cookie.remove("COOKIE_NAME", { path: "/" });
};

const registerNewUser = async (fname, lname, gender, emailid, password) => {
  console.log({
    user: {
      email: emailid,
      username: emailid,
      password: password,
      first_name: fname,
      last_name: lname
    },
    gender: gender,
    avatar: getAvatar(gender)
  });

  const response = await http
    .post(APIURL.CREATE_NEW_USER, {
      user: {
        email: emailid,
        username: emailid,
        password: password,
        first_name: fname,
        last_name: lname
      },
      gender: gender,
      avatar: getAvatar(gender)
    })
    .catch(error => {
      if (error.response) {
        return error.response;
      }
    });
  return response;
};

export { login, logout, isLoggedIn, registerNewUser };
