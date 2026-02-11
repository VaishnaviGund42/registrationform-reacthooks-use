import React, { useState } from "react";

function RegistrationForm() {

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
    gender: "",
    course: "",
    hobbies: [],
    address: ""
  });

  // Handle normal input change
  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value
    });
  };

  // Handle checkbox (hobbies)
  const handleCheckbox = (e) => {
    const { value, checked } = e.target;

    if (checked) {
      setFormData({
        ...formData,
        hobbies: [...formData.hobbies, value]
      });
    } else {
      setFormData({
        ...formData,
        hobbies: formData.hobbies.filter(hobby => hobby !== value)
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Form Submitted:", formData);

    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    alert("Registration Successful!");
  };

  return (
    <div>
      <h2>Registration Form</h2>

      <form onSubmit={handleSubmit}>

        <input
          type="text"
          name="fullName"
          placeholder="Full Name"
          value={formData.fullName}
          onChange={handleChange}
        />
        <br /><br />

        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
        />
        <br /><br />

        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
        />
        <br /><br />

        <input
          type="password"
          name="confirmPassword"
          placeholder="Confirm Password"
          value={formData.confirmPassword}
          onChange={handleChange}
        />
        <br /><br />

        {/* Gender */}
        <label>Gender:</label>
        <input
          type="radio"
          name="gender"
          value="Male"
          onChange={handleChange}
        /> Male

        <input
          type="radio"
          name="gender"
          value="Female"
          onChange={handleChange}
        /> Female
        <br /><br />

        {/* Course Dropdown */}
        <label>Course:</label>
        <select
          name="course"
          value={formData.course}
          onChange={handleChange}
        >
          <option value="">Select Course</option>
          <option value="Java">Java</option>
          <option value="React">React</option>
          <option value="FullStack">Full Stack</option>
        </select>
        <br /><br />

        {/* Hobbies Checkbox */}
        <label>Hobbies:</label>
        <input
          type="checkbox"
          value="Reading"
          onChange={handleCheckbox}
        /> Reading

        <input
          type="checkbox"
          value="Coding"
          onChange={handleCheckbox}
        /> Coding

        <input
          type="checkbox"
          value="Traveling"
          onChange={handleCheckbox}
        /> Traveling
        <br /><br />

        {/* Address */}
        <textarea
          name="address"
          placeholder="Enter Address"
          value={formData.address}
          onChange={handleChange}
        />
        <br /><br />

        <button type="submit">Register</button>

      </form>
    </div>
  );
}

export default RegistrationForm;
