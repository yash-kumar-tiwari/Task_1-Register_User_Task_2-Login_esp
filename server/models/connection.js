import mongoose from "mongoose";

const url = "mongodb://127.0.0.1:27017/ESP_Softtech_Task_chk";

mongoose.connect(url);

console.log("Connection Established Successfully with Database...")