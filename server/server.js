const express = require('express');
const app = express();
app.use(express.json()); // Middleware to parse JSON bodies
const sql = require("mssql");
require("dotenv").config();

// Configure database connection options using environment variables
const config = {
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    server: process.env.DB_SERVER,
    database: process.env.DB_DATABASE,
    options: {
        encrypt: true, // for Azure
        trustServerCertificate: true // change to false for production
    }
};

// Create connection pool
const pool = new sql.ConnectionPool(config);
const poolConnect = pool.connect();

poolConnect.then(() => {
    console.log("Database connection established successfully.");
}).catch(error => {
    console.error("Error establishing database connection:", error);
});

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
        // Connect to SQL
        const request = pool.request();

        const getLoginCredentials = `SELECT * FROM stg.Users WHERE StudentID = @StudentID and Password = @Password`;

        request.input("StudentID", sql.Int, req.body.studentID);
        request.input("password", sql.NVarChar, req.body.password);
        console.log(req.body.studentID)
        console.log(req.body.password)

        const getLoginCredentialsResults = await request.query(getLoginCredentials);

        const isValid = getLoginCredentialsResults.recordset.length > 0;
        res.json({ isValid });

    } catch (error) {
        console.error("Error fetching default report data:", error);
        res.status(500).send("Internal Server Error");
    }
});

app.listen(4000, () => {
    console.log("Server has started on port 4000");
});
