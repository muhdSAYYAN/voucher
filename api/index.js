import express from "express"
import {  postData } from "./Route/Insert.js";
import cors from "cors"
import {db} from "./connection.js"

const app = express();
app.use(express.json())
app.use(cors())

// const router = express.Router();

app.post("/postFormData", (req, res) => {
    console.log("form");
    console.log(req.body);

    const { vrNo,vrDate, status, acName, acAmt } = req.body.formData;

    // Insert data into the header table
    const q1 = `INSERT INTO header (vrNo, vrDate, status, acName, acAmt) VALUES (?,?, ?, ?, ?)`;
    db.query(q1, [vrNo , vrDate, status, acName, acAmt], (error, data) => {
        if (error) throw error;

        // Get the generated vrNo value (assuming it's auto-incrementing)
        const lastInsertedHeaderId = vrNo;

        // Insert data into the detail table
        const q2 = `INSERT INTO detail (vrNo,itemCode, itemName, qty, rate, amount) VALUES (?, ?, ?, ?, ?, ?)`;

        req.body.tableData.forEach((row) => {
            db.query(
                q2,
                [
                    lastInsertedHeaderId, // vrNo from the header table
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