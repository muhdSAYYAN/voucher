import React, { useContext } from 'react'
import "./Header.css";
import { FormContext } from '../context/Context';

const Buttons = ({print}) => {
 
    const {handleInsertData,handleSaveData,handleRefresh} = useContext(FormContext)

  return (
    <div className="buttons">
    <button className="btn" onClick={handleRefresh}>New</button>
    <button className="btn" onClick={handleInsertData}>Insert</button>
    <button className="btn" onClick={handleSaveData}>Save</button>
    <button className="btn" onClick={print}>Print</button>
</div>
  )
}

export default Buttons