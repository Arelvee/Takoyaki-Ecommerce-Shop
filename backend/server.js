require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const app = express()


// Middleware
app.use(express.json())
app.use(express.urlencoded({ extended: true })); // Parse URL-encoded bodies

// Routes
app.use("/api/products", require("./src/router/Product"));


app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send("Something went wrong!");
});


// Database
mongoose
    .connect(process.env.MONGO_URI)
    .then(() => {
        app.listen(process.env.PORT, () => {
            console.log(`Listening on port ${process.env.PORT} and connected to MongoDB`);
        })
    })
    .catch((error) => {
        console.error("Error connecting to MongoDB: ", error.message);
    });