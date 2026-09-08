const express = require("express");
const dotenv = require("dotenv").config();
const mongoose = require("mongoose");
const userRoutes = require("./routes/user.routes");

const app = express();
const port = process.env.PORT || 4000;

app.use(express.json());
app.use("/api", userRoutes);

mongoose.connect(process.env.MONGO_URL).then(() => {
    console.log("DB is connected");
}).catch((err) => {
    console.log(err);
})

app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});