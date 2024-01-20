import React, { createContext, useState } from 'react';

export const FormContext = createContext();

const Context = ({ children }) => {
  const [tableData, setTableData] = useState([]);
  const [newRowData, setNewRowData] = useState({
    srNo: '',
    itemCode: '',
    itemName: '',
    qty: '',
    rate: '',
    amount: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewRowData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleInsertData = () => {
    
    const amount = parseFloat(newRowData.qty) * parseFloat(newRowData.rate);


    const newRow = {
      srNo: newRowData.srNo,
      itemCode: newRowData.itemCode,
      itemName: newRowData.itemName,
      qty: newRowData.qty,
      rate: newRowData.rate,
      amount: amount.toFixed(2),
    };


    setTableData((prevData) => [...prevData, newRow]);

   
    setNewRowData({
      srNo: '',
      itemCode: '',
      itemName: '',
      qty: '',
      rate: '',
      amount: '',
    });
  };

  const totalAmount = tableData.reduce((acc, row) => acc + parseFloat(row.amount || 0), 0).toFixed(2);


  return (
    <FormContext.Provider value={{ tableData, handleInsertData, handleInputChange, newRowData, setNewRowData, totalAmount }}>
      {children}
    </FormContext.Provider>
  );
};

export default Context;
