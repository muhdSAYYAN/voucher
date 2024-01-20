import express from "express"
import { getData } from "./Route/Insert.js";

const app = express();


const router = express.Router();

router.get("/getData",getData);





app.listen(3500,()=>{
    console.log("api running")
})