import React, { useContext } from 'react';
import './Detail.css';
import { FormContext } from '../context/Context';

const Detail = () => {
  const { tableData, handleInsertData, handleInputChange, newRowData, setNewRowData,totalAmount } = useContext(FormContext);


  
  return (
    <div className='detail'>
      <span>Details</span>
      <form action="" className='form-detail'>
        <table>
          <thead>
            <tr>
              <th>Sr No</th>
              <th>Item Code</th>
              <th>Item Name</th>
              <th>Qty</th>
              <th>Rate</th>
              <th>Amount</th>
            </tr>
          </thead>
          <tbody>
            {tableData.map((row, index) => (
              <tr key={index}>
                <td>{index+1}</td>
                <td>{row.itemCode}</td>
                <td>{row.itemName}</td>
                <td>{row.qty}</td>
                <td>{row.rate}</td>
                <td>{row.amount}</td>
              </tr>
            ))}
            <tr>
              <td>
                {/* <input
                  className='table-input'
                  type="text"
                  name="srNo"
                  value={newRowData.srNo}
                  onChange={handleInputChange}
                /> */}
                <span>{tableData.length+1}</span>
              </td>
              <td>
                <input
                  className='table-input'
                  type="text"
                  name="itemCode"
                  value={newRowData.itemCode}
                  onChange={handleInputChange}
                />
              </td>
              <td>
                <input
                  className='table-input'
                  type="text"
                  name="itemName"
                  value={newRowData.itemName}
                  onChange={handleInputChange}
                />
              </td>
              <td>
                <input
                  className='table-input'
                  type="text"
                  name="qty"
                  value={newRowData.qty}
                  onChange={handleInputChange}
                />
              </td>
              <td>
                <input
                  className='table-input'
                  type="text"
                  name="rate"
                  value={newRowData.rate}
                  onChange={handleInputChange}
                />
              </td>
              <td>
                <input
                  className='table-input'
                  type="text"
                  name="amount"
                  value={newRowData.qty * newRowData.rate}
                  readOnly
                />
              </td>
            </tr>
            <tr>
              <td colSpan="5" style={{ textAlign: 'right' }}>
                Total Amount:
              </td>
              <td>{totalAmount}</td>
            </tr>
          </tbody>
        </table>
      </form>
    </div>
  );
};

export default Detail;
