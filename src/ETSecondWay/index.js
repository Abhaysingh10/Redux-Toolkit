import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useForm, Controller } from 'react-hook-form';
import { setEditingCell, clearEditingCell, updateCell } from './secondSlice';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const parseDate = (dateString) => (dateString ? new Date(dateString) : null);
const formatDate = (date) => (date ? date.toISOString().split('T')[0] : '');

const ETSecondWay = () => {
  const {data, editingCell} = useSelector((state) => state.secondTable);
  const dispatch = useDispatch();

  const {
    control,
    trigger,
    setValue,
    formState: { errors },
  } = useForm();

  const handleCellClick = (id, field, value) => {
    dispatch(setEditingCell({ id, field }));
    setValue(field, value); // Set the initial value for the field
  };

  const handleInputBlur = async (id, field, value) => {
    const isValid = await trigger(field); // Trigger validation on blur
    if (isValid) {
      dispatch(updateCell({ id, field, value }));
      dispatch(clearEditingCell());
    }
  };

  const handleDateChange = async (id, field, date) => {
    const formattedDate = formatDate(date);
    await trigger(field); // Validate when the date is selected
    dispatch(updateCell({ id, field, value: formattedDate }));
    dispatch(clearEditingCell());
  };

  return (
    <table className='table'>
      <thead>
        <tr>
          <th>Name</th>
          <th>Age</th>
          <th>Email</th>
          <th>Start Date</th>
          <th>End Date</th>
        </tr>
      </thead>
      <tbody>
        {data.map((row) => (
          <tr key={row.id}>
            {/* Name Field */}
            <td onClick={() => handleCellClick(row.id, 'name', row.name)}>
              {editingCell?.id === row.id && editingCell.field === 'name' ? (
                <Controller
                  name="name"
                  control={control}
                  defaultValue={row.name}
                  rules={{
                    required: 'Name is required',
                    maxLength: { value: 50, message: 'Name must be less than 50 characters' },
                  }}
                  render={({ field }) => (
                    <>
                      <input
                        {...field}
                        autoFocus
                        onBlur={(e) => handleInputBlur(row.id, 'name', e.target.value)}
                      />
                      {errors.name && <span style={{ color: 'red' }}>{errors.name.message}</span>}
                    </>
                  )}
                />
              ) : (
                row.name
              )}
            </td>

            {/* Age Field */}
            <td onClick={() => handleCellClick(row.id, 'age', row.age)}>
              {editingCell?.id === row.id && editingCell.field === 'age' ? (
                <Controller
                  name="age"
                  control={control}
                  defaultValue={row.age}
                  rules={{
                    required: 'Age is required',
                    min: { value: 1, message: 'Age must be at least 1' },
                    max: { value: 120, message: 'Age must be below 120' },
                  }}
                  render={({ field }) => (
                    <>
                      <input
                        type="number"
                        {...field}
                        autoFocus
                        onBlur={(e) => handleInputBlur(row.id, 'age', e.target.value)}
                      />
                      {errors.age && <span style={{ color: 'red' }}>{errors.age.message}</span>}
                    </>
                  )}
                />
              ) : (
                row.age
              )}
            </td>

            {/* Email Field */}
            <td onClick={() => handleCellClick(row.id, 'email', row.email)}>
              {editingCell?.id === row.id && editingCell.field === 'email' ? (
                <Controller
                  name="email"
                  control={control}
                  defaultValue={row.email}
                  rules={{
                    required: 'Email is required',
                    pattern: { value: /^\S+@\S+\.\S+$/, message: 'Invalid email address' },
                  }}
                  render={({ field }) => (
                    <>
                      <input
                        type="email"
                        {...field}
                        autoFocus
                        onBlur={(e) => handleInputBlur(row.id, 'email', e.target.value)}
                      />
                      {errors.email && <span style={{ color: 'red' }}>{errors.email.message}</span>}
                    </>
                  )}
                />
              ) : (
                row.email
              )}
            </td>

            {/* Start Date Field */}
            <td onClick={() => handleCellClick(row.id, 'startDate', row.startDate)}>
              {editingCell?.id === row.id && editingCell.field === 'startDate' ? (
                <Controller
                  name="startDate"
                  control={control}
                  defaultValue={parseDate(row.startDate)}
                  rules={{ required: 'Start Date is required' }}
                  render={({ field }) => (
                    <>
                      <DatePicker
                        selected={field.value}
                        onChange={(date) => handleDateChange(row.id, 'startDate', date)}
                        maxDate={parseDate(row.endDate)}
                        onBlur={() => dispatch(clearEditingCell())}
                        autoFocus
                      />
                      {errors.startDate && (
                        <span style={{ color: 'red' }}>{errors.startDate.message}</span>
                      )}
                    </>
                  )}
                />
              ) : (
                row.startDate
              )}
            </td>

            {/* End Date Field */}
            <td onClick={() => handleCellClick(row.id, 'endDate', row.endDate)}>
              {editingCell?.id === row.id && editingCell.field === 'endDate' ? (
                <Controller
                  name="endDate"
                  control={control}
                  defaultValue={parseDate(row.endDate)}
                  rules={{ required: 'End Date is required' }}
                  render={({ field }) => (
                    <>
                      <DatePicker
                        selected={field.value}
                        onChange={(date) => handleDateChange(row.id, 'endDate', date)}
                        minDate={parseDate(row.startDate)}
                        onBlur={() => dispatch(clearEditingCell())}
                        autoFocus
                      />
                      {errors.endDate && (
                        <span style={{ color: 'red' }}>{errors.endDate.message}</span>
                      )}
                    </>
                  )}
                />
              ) : (
                row.endDate
              )}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ETSecondWay;
