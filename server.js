const express = require("express");
const app = express();

app.use(express.json());

let students = [];

// Home
app.get("/", (req, res) => {
    res.send("Student Registration Backend Running 🚀");
});

// Get all students
app.get("/students", (req, res) => {
    res.json(students);
});

// Add new student
app.post("/students", (req, res) => {
    const student = req.body;
    students.push(student);
    res.json({
        message: "Student added successfully!",
        student: student
    });
});

app.listen(3000, () => {
    console.log("Server running on http://localhost:3000");
});