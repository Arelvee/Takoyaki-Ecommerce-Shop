// backend/server.js
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const productRoutes = require('./src/router/Product');

const app = express();
const PORT = 3001; // Assuming your backend server runs on port 3001

app.use(cors());
app.use(bodyParser.json());
app.use(express.json()); // Parse JSON bodies
app.use(express.urlencoded({ extended: true })); // Parse URL-encoded bodies
// Connect to MongoDB
mongoose.connect('mongodb+srv://arelvisaya:JesusisLord07@takoyamie.gcgwwsk.mongodb.net/', { useNewUrlParser: true, useUnifiedTopology: true });
const connection = mongoose.connection;
connection.once('open', () => {
    console.log('MongoDB database connection established successfully');
});

// Define routes
app.use('/api/products', productRoutes);

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
