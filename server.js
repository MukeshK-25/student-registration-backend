const express = require("express");
const cors=require("cors");
const app = express();

app.use(express.json());
app.use(cors());

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

const PORT=process.env.PORT || 3000;
app.listen(PORT,() => {
        console.log(`server running on port ${PORT}`);
});