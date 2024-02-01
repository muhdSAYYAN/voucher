import React, { createContext, useEffect, useState } from 'react';
import axios from "axios"

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

  const totalAmount = tableData.reduce((acc, row) => acc + parseFloat(row.amount || 0), 0).toFixed(2);
const [amt,setAmt] = useState(0)
useEffect(()=>{
  setAmt(totalAmount)
},[totalAmount])

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


  const [formData, setFormData] = useState({
    vrNo:"",
    vrDate: "",
    status: "",
    acName: "",
    acAmt: amt,
  });
  
  useEffect(() => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      acAmt: amt, 
    }));
  }, [amt]);


  console.log('tamt',totalAmount)
  console.log('amt',amt)


  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();


    setFormData({
      vrNo:"",
      vrDate: "",
      status: "",
      acName: "",
      acAmt: "",
    });
  };

  console.log(formData)
  console.log(tableData)

  // const [voucher,setVoucher] = useState({
  //   tableDt: tableData,
  //   formdt:formData
  // })


  // const data = async()=>{
  //   await axios.post("http://localhost:3500/postFormData", {formData,tableData});
    

  // }

  const handleSaveData = async () => {
    try{
  //  data()
   await axios.post("http://localhost:3500/postFormData", {formData,tableData});
      
    }catch(err){
      console.log(err)
    }
  };


  const handleRefresh =()=>{
    setFormData({
      vrNo:"",
      vrDate: "",
      status: "",
      acName: "",
      acAmt: "",
    });
    setTableData([]);
  }


  return (
    <FormContext.Provider value={{ tableData, handleInsertData, handleInputChange, newRowData, setNewRowData, totalAmount ,formData,setFormData,handleFormChange,handleSubmit,handleSaveData,handleRefresh}}>
      {children}
    </FormContext.Provider>
  );
};

export default Context;
