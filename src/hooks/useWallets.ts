import { useSelector } from "react-redux";
import {
  selectWallets,
  selectLoading,
  selectError,
} from "../redux/Wallets/selectors";

const useWallets = () => {
  const isLoading = useSelector(selectLoading);
  const isError = useSelector(selectError);
  const wallets = useSelector(selectWallets);

  return {
    isLoading,
    isError,
    wallets,
  };
};

export default useWallets;
