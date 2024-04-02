import { useSelector } from "react-redux";
import {
  selectIsLoggedIn,
  selectUser,
  selectPending,
  refreshUser,
} from "../redux/Auth/selectors";

const useAuth = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const user = useSelector(selectUser);
  const isRefreshing = useSelector(refreshUser);
  const isPending = useSelector(selectPending);
  return {
    isLoggedIn,
    user,
    isRefreshing,
    isPending,
  };
};

export default useAuth;
