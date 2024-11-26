// Redux slice
import { createSlice } from '@reduxjs/toolkit';
import users from '../JSON/users.json'

const initialState = {
  usersListing: users,
  isBulkEditing:false,
  editableRowId: null, // Track the row being edited
}

const tableSlice = createSlice({
  name: 'table',
  initialState,
  reducers: {
    setEditableRowId: (state, action) => {
      state.editableRowId = action.payload;
    },
    updateRowData: (state, action) => {
      const { id, field, value } = action.payload;
      const row = state.usersListing.find(row => row.id === id);
      if (row) row[field] = value;
    },
    toggleBulkEdit: (state) => {
      state.isBulkEditing = !state.isBulkEditing;
    },
    setData: (state, action) => {
      state.usersListing = action.payload;
    },
    setStartDate: (state, action) => {
      const { id, date } = action.payload;
      const row = state.data.find((row) => row.id === id);
      if (row) {
        row.startDate = date;
      }
    },
    setEndDate: (state, action) => {
      const { id, date } = action.payload;
      const row = state.data.find((row) => row.id === id);
      if (row) {
        row.endDate = date;
      }
  }}
});

export const { setEditableRowId, updateRowData, setData, setEndDate, setStartDate, toggleBulkEdit } = tableSlice.actions;
export default tableSlice.reducer;
