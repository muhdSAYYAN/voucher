import React, { useContext, useState } from "react";
import "./Header.css";
import { FormContext } from "../context/Context";

const Header = () => {
 
  const {handleInsertData,totalAmount} = useContext(FormContext)

  const [formData, setFormData] = useState({
    vrNo: "",
    vrDate: "",
    status: "",
    acName: "",
    acAmt: totalAmount,
  });

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();


    setFormData({
      vrNo: "",
      vrDate: "",
      status: "",
      acName: "",
      acAmt: totalAmount,
    });
  };


  return (
    <>
    <div className="header">
        
    <form action="" className="formheader" onSubmit={handleSubmit}>
          <span>Header</span>
          <div className="section1">
            <div>
              <label>Vr NO :- </label>
              <input
                type="text"
                className="inp-field"
                name="vrNo"
                value={formData.vrNo}
                onChange={handleFormChange}
              />
            </div>
            <div>
              <label>Vr Date :- </label>
              <input
                type="text"
                className="inp-field"
                name="vrDate"
                value={formData.vrDate}
                onChange={handleFormChange}
              />
            </div>
            <div>
              <label>Status : </label>
              <input
                type="text"
                className="inp-field"
                name="status"
                value={formData.status}
                onChange={handleFormChange}
              />
            </div>
          </div>

          <div className="section1">
            <div>
              <label>Ac Name : </label>
              <input
                type="text"
                className="inp-acname"
                name="acName"
                value={formData.acName}
                onChange={handleFormChange}
              />
            </div>

            <div>
              <label>Ac Amt : </label>
              {/* <input
                type="text"
                className="inp-field"
                value={formData.acAmt}
                readOnly
              /> */}
              <span>{totalAmount}</span>
            </div>
          </div>  
        </form>
    </div>
    
    <div className="buttons">
        <button className="btn">New</button>
        <button className="btn" onClick={handleInsertData}>Insert</button>
        <button className="btn">Save</button>
        <button className="btn">Print</button>
    </div>
</>
  );
};

export default Header;
