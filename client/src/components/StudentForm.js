
import React, { useState } from 'react';
import axios from 'axios';

const StudentForm = () => {
  const [student, setStudent] = useState({
    name: '',
    age: '',
    gender: '',
    district: '',
  });
  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setStudent({ ...student, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/students/', student);
      setMessage(response.data.message);
      setStudent({ name: '', age: '', gender: '', district: '' }); // Reset form
    } catch (error) {
      setMessage('Error adding student.');
    }
  };

  return (
    <div className="container mt-5">
      <h2>Add Student Details</h2>
      {message && <div className="alert alert-info">{message}</div>}
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Name</label>
          <input type="text" name="name" className="form-control" value={student.name} onChange={handleChange} required />
        </div>
        <div className="mb-3">
          <label className="form-label">Age</label>
          <input type="number" name="age" className="form-control" value={student.age} onChange={handleChange} required />
        </div>
        <div className="mb-3">
          <label className="form-label">Gender</label>
          <div>
            <input type="radio" name="gender" value="Male" onChange={handleChange} required /> Male
            <input type="radio" name="gender" value="Female" onChange={handleChange} /> Female
            <input type="radio" name="gender" value="Other" onChange={handleChange} /> Other
          </div>
        </div>
        <div className="mb-3">
          <label className="form-label">District</label>
          <select name="district" className="form-select" value={student.district} onChange={handleChange} required>
            <option value="">Select District</option>
            <option value="District A">District A</option>
            <option value="District B">District B</option>
            <option value="District C">District C</option>
            <option value="District D">District D</option>
            <option value="District E">District E</option>
          </select>
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  );
};

export default StudentForm;