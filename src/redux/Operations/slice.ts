import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  getAllOperations,
  incomeOperations,
  expensesOperation,
  transfersOperation,
  deleteOperation,
  editOperation,
  editOperationTransfer,
} from "./operations";

interface Operation {
  id: string;
  amount: number;
  type?: string;
  wallet?: string;
  walletFrom?: string;
  walletTo?: string;
  category?: string;
  comment?: string;
}

interface OperationsState {
  operations: Operation[];
  isLoading: boolean;
  error: string | null;
}

const initialState: OperationsState = {
  operations: [],
  isLoading: false,
  error: null,
};

const handlePending = (state: OperationsState) => {
  state.isLoading = true;
};
const handleRejected = (state: OperationsState, action: any) => {
  state.isLoading = false;
  state.error = action.payload;
};

const OperationsSlice = createSlice({
  name: "operations",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(
        getAllOperations.fulfilled,
        (state: OperationsState, action: PayloadAction<Operation[]>) => {
          state.isLoading = false;
          state.error = null;
          state.operations = action.payload;
        }
      )
      .addCase(
        incomeOperations.fulfilled,
        (state: OperationsState, action: PayloadAction<Operation>) => {
          state.isLoading = false;
          state.error = null;
          state.operations.push(action.payload);
        }
      )
      .addCase(
        expensesOperation.fulfilled,
        (state: OperationsState, action: PayloadAction<Operation>) => {
          state.isLoading = false;
          state.error = null;
          state.operations.push(action.payload);
        }
      )
      .addCase(
        transfersOperation.fulfilled,
        (state: OperationsState, action: PayloadAction<Operation>) => {
          state.isLoading = false;
          state.error = null;
          state.operations.push(action.payload);
        }
      )
      .addCase(
        deleteOperation.fulfilled,
        (state: OperationsState, action: PayloadAction<Operation>) => {
          state.isLoading = false;
          state.error = null;
          const index = state.operations.findIndex(
            (operation) => operation.id === action.payload.id
          );
          state.operations.splice(index, 1);
        }
      )
      .addCase(
        editOperation.fulfilled,
        (state: OperationsState, action: PayloadAction<Operation>) => {
          state.isLoading = false;
          state.error = null;
          state.operations.push(action.payload);
        }
      )
      .addCase(
        editOperationTransfer.fulfilled,
        (state: OperationsState, action: PayloadAction<Operation>) => {
          state.isLoading = false;
          state.error = null;
          state.operations.push(action.payload);
        }
      )
      .addCase(getAllOperations.pending, handlePending)
      .addCase(incomeOperations.pending, handlePending)
      .addCase(expensesOperation.pending, handlePending)
      .addCase(deleteOperation.pending, handlePending)
      .addCase(transfersOperation.pending, handlePending)
      .addCase(editOperation.pending, handlePending)
      .addCase(editOperationTransfer.pending, handlePending)
      .addCase(getAllOperations.rejected, handleRejected)
      .addCase(incomeOperations.rejected, handleRejected)
      .addCase(expensesOperation.rejected, handleRejected)
      .addCase(deleteOperation.rejected, handleRejected)
      .addCase(transfersOperation.rejected, handleRejected)
      .addCase(editOperation.rejected, handleRejected)
      .addCase(editOperationTransfer.rejected, handleRejected);
  },
});

export const operationsReducer = OperationsSlice.reducer;
