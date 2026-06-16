import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function AddEmployee() {
  const navigate = useNavigate();

  const [employee, setEmployee] = useState({
    firstName: "",
    lastName: "",
    email: "",
  });

  const handleChange = (e) => {
    setEmployee({
      ...employee,
      [e.target.name]: e.target.value,
    });
  };

  const saveEmployee = (e) => {
    e.preventDefault();

    axios
      .post("http://localhost:8080/api/employees", employee)
      .then(() => {
        alert("Employee Added Successfully");

        setEmployee({
          firstName: "",
          lastName: "",
          email: "",
        });

        navigate("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="container mt-4">
      <h2>Add Employee</h2>

      <form onSubmit={saveEmployee}>
        <input
          type="text"
          name="firstName"
          className="form-control mb-3"
          placeholder="First Name"
          value={employee.firstName}
          onChange={handleChange}
        />

        <input
          type="text"
          name="lastName"
          className="form-control mb-3"
          placeholder="Last Name"
          value={employee.lastName}
          onChange={handleChange}
        />

        <input
          type="email"
          name="email"
          className="form-control mb-3"
          placeholder="Email"
          value={employee.email}
          onChange={handleChange}
        />

        <button type="submit" className="btn btn-primary">
          Save Employee
        </button>
      </form>
    </div>
  );
}

export default AddEmployee;
z