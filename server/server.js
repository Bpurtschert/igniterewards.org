const express = require('express');
const app = express();
app.use(express.json()); // Middleware to parse JSON bodies

// Sample data for validation
const validSchoolIDs = ['school1', 'school2', 'school3'];
const validStudentIDs = {
  'school1': ['student1', 'student2'],
  'school2': ['student3', 'student4'],
  'school3': ['student5', 'student6']
};

// Endpoint to validate SchoolID and StudentID
app.post('/api/validate', (req, res) => {
  const { schoolID, studentID } = req.body;
  if (validSchoolIDs.includes(schoolID) && validStudentIDs[schoolID].includes(studentID)) {
    res.json({ valid: true });
  } else {
    res.json({ valid: false });
  }
});

// Endpoint to handle profile creation
app.post('/api/create-profile', (req, res) => {
  const { firstName, lastName, password } = req.body;
  // Here you would normally save the profile to a database
  res.json({ success: true });
});

app.listen(4000, () => {
  console.log("Server has started on port 4000");
});
