import { useEffect, useState } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

function UpdateEmployee() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [employee, setEmployee] = useState({
    firstName: "",
    lastName: "",
    email: "",
  });

  useEffect(() => {
    axios
      .get(`http://localhost:8080/api/employees/${id}`)
      .then((response) => {
        setEmployee(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [id]);

  const handleChange = (e) => {
    setEmployee({
      ...employee,
      [e.target.name]: e.target.value,
    });
  };

  const updateEmployee = (e) => {
    e.preventDefault();

    axios
      .put(`http://localhost:8080/api/employees/${id}`, employee)
      .then(() => {
        alert("Employee Updated Successfully");
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="container mt-4">
      <h2>Update Employee</h2>

      <form onSubmit={updateEmployee}>
        <input
          type="text"
          name="firstName"
          className="form-control mb-3"
          value={employee.firstName}
          onChange={handleChange}
        />

        <input
          type="text"
          name="lastName"
          className="form-control mb-3"
          value={employee.lastName}
          onChange={handleChange}
        />

        <input
          type="email"
          name="email"
          className="form-control mb-3"
          value={employee.email}
          onChange={handleChange}
        />

        <button className="btn btn-success">Update Employee</button>
      </form>
    </div>
  );
}

export default UpdateEmployee;
