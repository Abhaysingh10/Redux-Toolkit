import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setEditableRowId, setEndDate, setStartDate, toggleBulkEdit, updateRowData } from "./tableSlice";
import users from '../JSON/users.json'
import { Controller, useForm } from "react-hook-form";
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css'
// import 'react-datepicker/dist/react-datepicker.css';


// Utility function to convert date string to Date object
const parseDate = (dateString) => (dateString ? new Date(dateString) : null);

// Utility function to format Date object as YYYY-MM-DD string
const formatDate = (date) => {
  if (!date) return '';
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
};

export const EditableTable = () => {
  const { usersListing, editableRowId, isBulkEditing  } = useSelector((state) => state.table);
  const dispatch = useDispatch();
  const { control, handleSubmit, reset, formState: { errors } } = useForm();

  const handleEditClick = (id) => {
    dispatch(setEditableRowId(id));
  };

  const handleInputChange = (id, field, value) => {
    console.log("id->", id)
    console.log("field ->", id)
    console.log("value ->", value)
    dispatch(updateRowData({ id, field, value }));
  };

  
  
  useEffect(() => {
      console.table("userListing", usersListing)
      console.table("Actual Data", users )
  
    return () => {
      
    }
  }, [usersListing])
  
const handleSaveClick = (formData) => { 
    console.log("data", formData)
    Object.entries(formData).forEach(([id, fields]) => {
      Object.entries(fields).forEach(([field, value]) => {
        dispatch(updateRowData({ id: Number(id), field, value }));
      });
    });
    dispatch(toggleBulkEdit());
 }

 const handleBulkEditToggle = () => {
  dispatch(toggleBulkEdit());
  if (!isBulkEditing) {
    reset(usersListing.reduce((acc, row) => ({ ...acc, [row.id]: row }), {}));
  }
};


  return (
    // <form action="" onSubmit={handleSubmit(handleSaveClick)}>
    //     <table>
    //       <thead>
    //         <tr>
    //           <th scope="col">Name</th>
    //           <th scope="col">Email</th>
    //           <th scope="col">Phone</th>
    //           <th scope="col">Start Date</th>
    //           <th scope="col">End Date</th>
    //           <th scope="col">Action</th>
    //         </tr>
    //       </thead>
    //       <tbody>
    //         {usersListing.map((row) => (
    //           <tr key={row.id}>
    //             <td>
    //               {editableRowId === row.id ? (
    //                 <Controller
    //                 name="name"
    //                 control={control}
    //                 defaultValue={row.name}
    //                 rules={{ required: 'Name is required',  }}
    //                 render={({ field }) => (
    //                   <div>
    //                     <input {...field} type="text" />
    //                     {errors.name && <span style={{ color: 'red' }}>{errors.name.message}</span>}
    //                   </div>
    //                 )}
    //               />
    //               ) : (
    //                 row.name
    //               )}
    //             </td>
    //             <td>
                    
    //             {editableRowId === row.id ? (
    //               <Controller
    //                 name="email"
    //                 control={control}
    //                 defaultValue={row.email}
    //                 rules={{ 
    //                   required: 'Email is required',
    //                   pattern: {
    //                     value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
    //                     message: 'Invalid email address',
    //                   },
    //                 }}
    //                 render={({ field }) => (
    //                   <div>
    //                     <input {...field} type="email" />
    //                     {errors.email && <span style={{ color: 'red' }}>{errors.email.message}</span>}
    //                   </div>
    //                 )}
    //               />
    //             ) : (
    //               row.email
    //             )}
    //             </td>
    //             <td>
    //             {editableRowId === row.id ? (<Controller
    //                 name="phone"
    //                 control={control}
    //                 defaultValue={row.phone}
    //                 rules={{ required: 'Phone is required' }}
    //                 render={({ field }) => (
    //                   <div>
    //                     <input {...field} type="number" />
    //                     {errors.phone && <span style={{ color: 'red' }}>{errors.phone.message}</span>}
    //                   </div>
    //                 )}
    //               />
    //               ) : (
    //                 row.phone
    //               )}
    //             </td>
    //             <td>
    //             {editableRowId === row.id ? (
    //            <Controller
    //            name="startDate"
    //            control={control}
    //            defaultValue={parseDate(row.startDate)}
    //            rules={{
    //              required: 'Start Date is required',
    //              validate: (value) => !row.endDate || value <= parseDate(row.endDate) || 'Start Date cannot be after End Date'
    //            }}
    //            render={({ field }) => (
    //              <div>
    //                <DatePicker
    //                  {...field}
    //                  selected={parseDate(row.startDate)}
    //                  onChange={(date) => {
    //                    dispatch(setStartDate({ id: row.id, date: formatDate(date) }));
    //                    field.onChange(date);
    //                  }}
    //                  maxDate={parseDate(row.endDate)}
    //                  dateFormat="yyyy-MM-dd"
    //                />
    //                {errors.startDate && <span style={{ color: 'red' }}>{errors.startDate.message}</span>}
    //              </div>
    //            )}
    //          />
    //             ) : (
    //               row.startDate ? new Date(row.startDate).toLocaleDateString() : ''
    //             )}
    //           </td>
    //           <td>
    //             {editableRowId === row.id ? (
    //             <Controller
    //             name="endDate"
    //             control={control}
    //             defaultValue={parseDate(row.endDate)}
    //             rules={{
    //               required: 'End Date is required',
    //               validate: (value) => !row.startDate || value >= parseDate(row.startDate) || 'End Date cannot be before Start Date'
    //             }}
    //             render={({ field }) => (
    //               <div>
    //                 <DatePicker
    //                   {...field}
    //                   selected={parseDate(row.endDate)}
    //                   onChange={(date) => {
    //                     dispatch(setEndDate({ id: row.id, date: formatDate(date) }));
    //                     field.onChange(date);
    //                   }}
    //                   minDate={parseDate(row.startDate)}
    //                   dateFormat="yyyy-MM-dd"
    //                 />
    //                 {errors.endDate && <span style={{ color: 'red' }}>{errors.endDate.message}</span>}
    //               </div>
    //             )}
    //           />
    //             ) : (
    //               row.endDate ? new Date(row.endDate).toLocaleDateString() : ''
    //             )}
    //           </td>
    //             <td>
    //             {editableRowId === row.id ? (
    //               <button type="submit">Save</button>
    //             ) : (
    //               <button type="button" onClick={() => handleEditClick(row.id)}>✏️</button>
    //             )}
    //             </td>
    //           </tr>
    //         ))}
    //       </tbody>
    //     </table>
    // </form>
    <div>
      <button onClick={handleBulkEditToggle}>
        {isBulkEditing ? 'Cancel Edit' : 'Edit All'}
      </button>
      {isBulkEditing && (
        <button onClick={handleSubmit(handleSaveClick)}>Save All</button>
      )}
      <form onSubmit={handleSubmit(handleSaveClick)}>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Name</th>
              <th scope="col">Age</th>
              <th scope="col">Email</th>
              {/* <th scope="col">Start Date</th>
              <th scope="col">End Date</th> */}
            </tr>
          </thead>
          <tbody>
            {usersListing.map((row) => (
              <tr key={row.id}>
                <td>
                  {isBulkEditing ? (
                    <Controller
                      name={`${row.id}.name`}
                      control={control}
                      defaultValue={row.name}
                      rules={{ required: 'Name is required' }}
                      render={({ field }) => (
                        <div>
                          <input {...field} type="text" />
                          {errors[row.id]?.name && <span style={{ color: 'red' }}>{errors[row.id].name.message}</span>}
                        </div>
                      )}
                    />
                  ) : (
                    row.name
                  )}
                </td>
                <td>
                  {isBulkEditing ? (
                    <Controller
                      name={`${row.id}.age`}
                      control={control}
                      defaultValue={row.age}
                      rules={{ required: 'Age is required' }}
                      render={({ field }) => (
                        <div>
                          <input {...field} type="number" />
                          {errors[row.id]?.age && <span style={{ color: 'red' }}>{errors[row.id].age.message}</span>}
                        </div>
                      )}
                    />
                  ) : (
                    row.age
                  )}
                </td>
                <td>
                  {isBulkEditing ? (
                    <Controller
                      name={`${row.id}.email`}
                      control={control}
                      defaultValue={row.email}
                      rules={{
                        required: 'Email is required',
                        pattern: {
                          value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                          message: 'Invalid email address',
                        },
                      }}
                      render={({ field }) => (
                        <div>
                          <input {...field} type="email" />
                          {errors[row.id]?.email && <span style={{ color: 'red' }}>{errors[row.id].email.message}</span>}
                        </div>
                      )}
                    />
                  ) : (
                    row.email
                  )}
                </td>
                {/* <td>
                  {isBulkEditing ? (
                    <Controller
                      name={`${row.id}.startDate`}
                      control={control}
                      defaultValue={parseDate(row.startDate)}
                      rules={{
                        required: 'Start Date is required',
                        validate: (value) =>
                          !row.endDate || value <= parseDate(row.endDate) || 'Start Date cannot be after End Date',
                      }}
                      render={({ field }) => (
                        <div>
                          <DatePicker
                            {...field}
                            selected={parseDate(row.startDate)}
                            onChange={(date) => {
                              dispatch(setStartDate({ id: row.id, date: formatDate(date) }));
                              field.onChange(date);
                            }}
                            maxDate={parseDate(row.endDate)}
                            dateFormat="yyyy-MM-dd"
                          />
                          {errors[row.id]?.startDate && <span style={{ color: 'red' }}>{errors[row.id].startDate.message}</span>}
                        </div>
                      )}
                    />
                  ) : (
                    row.startDate
                  )}
                </td>
                <td>
                  {isBulkEditing ? (
                    <Controller
                      name={`${row.id}.endDate`}
                      control={control}
                      defaultValue={parseDate(row.endDate)}
                      rules={{
                        required: 'End Date is required',
                        validate: (value) =>
                          !row.startDate || value >= parseDate(row.startDate) || 'End Date cannot be before Start Date',
                      }}
                      render={({ field }) => (
                        <div>
                          <DatePicker
                            {...field}
                            selected={parseDate(row.endDate)}
                            onChange={(date) => {
                              dispatch(setEndDate({ id: row.id, date: formatDate(date) }));
                              field.onChange(date);
                            }}
                            minDate={parseDate(row.startDate)}
                            dateFormat="yyyy-MM-dd"
                          />
                          {errors[row.id]?.endDate && <span style={{ color: 'red' }}>{errors[row.id].endDate.message}</span>}
                        </div>
                      )}
                    />
                  ) : (
                    row.endDate
                  )}
                </td> */}
              </tr>
            ))}
          </tbody>
        </table>
      </form>
    </div>
  )
};
