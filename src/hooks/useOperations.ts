import { useSelector } from "react-redux";
import {
  selectOperations,
  selectLoading,
  selectError,
} from "../redux/Operations/selectors";
import { ISearchOperation } from "../types/types";

const useOperations = () => {
  const isLoading = useSelector(selectLoading);
  const isError = useSelector(selectError);
  const operations: ISearchOperation[] = useSelector(selectOperations);

  return {
    isLoading,
    isError,
    operations,
  };
};

export default useOperations;
