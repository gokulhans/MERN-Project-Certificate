# MERN
Task: Create an API and Frontend for Adding Student Details
Objective: Develop a simple web application using the MERN stack that allows users to add student details, including gender and district. The frontend will use React with Bootstrap for styling, while the backend will be built with Express and MongoDB for data storage.

Requirements:
1. Frontend (React):
Form Components:

Create a form with the following fields:
Name: Text input for the student's name.
Age: Number input for the student's age.
Gender: Radio buttons with options for "Male," "Female," and "Other."
District: Select dropdown with a list of districts (provide at least 5 options).
Include a Submit button to send the form data to the backend.
Styling:

Use Bootstrap to style the form and ensure it is responsive.
Feedback:

Show a success message upon successful submission and handle any errors appropriately.
2. Backend (Node.js & Express):
Setup:

Create an Express server with the following endpoint:
POST /students: Accepts student details and saves them to MongoDB.
Data Structure:

Each student document should have the following fields:
name: String
age: Number
gender: String (either "Male," "Female," or "Other")
district: String3. Database (MongoDB):*
Use MongoDB to store student details.
