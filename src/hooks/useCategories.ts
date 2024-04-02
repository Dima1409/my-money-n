import { useSelector } from "react-redux";
import {
  selectCategories,
  selectLoading,
  selectError,
} from "../redux/Categories/selectors";

const useCategories = () => {
  const categories = useSelector(selectCategories);
  const isLoading = useSelector(selectLoading);
  const isError = useSelector(selectError);

  return {
    categories,
    isLoading,
    isError,
  };
};

export default useCategories;
