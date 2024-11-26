import { createSlice } from '@reduxjs/toolkit';

export const secondSlice = createSlice({
  name: 'table',
  initialState: {
    data: [
      { id: 1, name: 'John Doe', age: 30, email: 'john@example.com', startDate: "2024-10-29", endDate: "2024-11-02" },
      { id: 2, name: 'Jane Smith', age: 25, email: 'jane@example.com', startDate: "2024-10-25", endDate: "2024-11-05" },
    ],
    editingCell: null, // Tracks which cell is being edited
  },
  reducers: {
    setEditingCell: (state, action) => {
      state.editingCell = action.payload;
    },
    clearEditingCell: (state) => {
      state.editingCell = null;
    },
    updateCell: (state, action) => {
      const { id, field, value } = action.payload;
      const row = state.data.find((row) => row.id === id);
      if (row) {
        row[field] = value;
      }
    },
  },
});

export const { setEditingCell, clearEditingCell, updateCell } = secondSlice.actions;
export default secondSlice.reducer;
