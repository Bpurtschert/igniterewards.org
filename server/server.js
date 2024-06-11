const express = require('express');
const app = express();
app.use(express.json()); // Middleware to parse JSON bodies
const mysql = require("mysql2");
require("dotenv").config();

// Configure database connection options using environment variables
const config = {
    host: process.env.DB_SERVER,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
};

// Create connection pool
const pool = mysql.createPool(config);

// Endpoint to validate SchoolID and StudentID
app.post('/VerifySchoolId', (req, res) => {
    // Your existing code for this endpoint
});

// Endpoint to handle profile creation
app.post('/api/create-profile', (req, res) => {
    // Your existing code for this endpoint
});

// Endpoint to authenticate login
app.post('/getLoginCredentials', async (req, res) => {
    try {
        // Extract student ID and password from request body
        const { studentID, password } = req.body;

        // Get a new connection from the pool
        const connection = await pool.promise().getConnection();

        // Execute the query to fetch login credentials
        const [rows, fields] = await connection.execute(
            `SELECT * FROM Users WHERE StudentID = ? AND Password = ?`,
            [studentID, password]
        );

        // Release the connection back to the pool
        connection.release();

        // Check if any matching records were found
        const isValid = rows.length > 0;

        // Send response indicating whether login is valid
        res.json({ isValid });
    } catch (error) {
        console.error("Error fetching login credentials:", error);
        res.status(500).send("Internal Server Error");
    }
});

app.listen(4000, () => {
    console.log("Server has started on port 4000");
});
