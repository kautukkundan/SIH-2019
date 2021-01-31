import { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { logout } from "../../services/authService";
import { useStoreActions } from "easy-peasy";

import ReactGa from "react-ga";

const Logout = () => {
  const history = useHistory();

  const setToken = useStoreActions(action => action.user.setToken);
  const setUser = useStoreActions(action => action.user.setUser);

  useEffect(() => {
    logout();
    setToken(null);
    setUser({
      user: { email: null, first_name: null, last_name: null, avatar: null }
    });
    history.push("/login");
    //eslint-disable-next-line
  }, []);

  return null;
};

export default Logout;
