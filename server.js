const express = require('express');
require('dotenv').config();
const connectDB = require('./config/db');
const PORT = process.env.PORT || 5000;

const app = express();

// Middleware to parse JSON bodies
app.use(express.json());

// Connect to MongoDB, then start the server
connectDB()
  .then(() => {
    console.log("MongoDB connected successfully");
    app.listen(PORT, () => 
        console.log(`Server is running on port http://localhost:${PORT}`));
  })
    
  .catch((error) => {
    console.error("MongoDB connection failed:", error.message);
    process.exit(1);
  });

// Routes
app.use('/students', require('./routes/studentRoutes'));

// Default route to check server status(HOME PAGE for fetching)
app.get('/', (req, res) => {
    res.send("API Server for Express JS is up and running....");
});

