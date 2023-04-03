import { useDispatch } from "react-redux";
import { logoutUsers } from "../../../Redux/actions";
import { useHistory } from "react-router-dom";

const Logout = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  dispatch(logoutUsers());
  history.push("/home");

  return <div></div>;
};

export default Logout;
