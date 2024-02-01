import express from "express"
import cors from "cors"
import {db} from "./connection.js"

const app = express();
app.use(express.json())
app.use(cors())



app.post("/postFormData", (req, res) => {
    console.log("form");
    console.log(req.body);

    const { vrNo,vrDate, status, acName, acAmt } = req.body.formData;

 
    const q1 = `INSERT INTO header (vrNo, vrDate, status, acName, acAmt) VALUES (?,?, ?, ?, ?)`;
    db.query(q1, [vrNo , vrDate, status, acName, acAmt], (error, data) => {
        if (error) throw error;

     
        const lastInsertedHeaderId = vrNo;

      
        const q2 = `INSERT INTO detail (vrNo,itemCode, itemName, qty, rate, amount) VALUES (?, ?, ?, ?, ?, ?)`;

        req.body.tableData.forEach((row) => {
            db.query(
                q2,
                [
                    lastInsertedHeaderId, 
                    row.itemCode,
                    row.itemName,
                    row.qty,
                    row.rate,
                    row.amount,
                ],
                (error, data) => {
                    if (error) throw error;
                }
            );
        });

        res.json({ success: true, message: 'Data inserted successfully.' });
    });
});
    

app.post("/postData",(req,res)=>{
console.log("gett")
console.log(req.body)

});






app.listen(3500,()=>{
    console.log("api running")
})