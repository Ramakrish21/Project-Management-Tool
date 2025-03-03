import { useState, useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { useNavigate, Link } from "react-router-dom";
import Input from "../ui/input";
import Button from "../ui/button";
import { register } from "../../utils/api";

const Register = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ name: "", email: "", password: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await register({ name: formData.name, email: formData.email, password: formData.password });
      alert("Registration successful! You can now log in.");
      navigate("/login");
    } catch (error) {
      alert(error.response?.data?.message || "Error registering user.");
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="max-w-md w-full p-6 shadow-lg rounded-lg bg-white">
        <h2 className="text-2xl font-semibold text-center mb-4">Register</h2>
        <form onSubmit={handleSubmit}>
          <Input type="text" name="name" placeholder="Name" onChange={handleChange} required />
          <Input type="email" name="email" placeholder="Email" onChange={handleChange} required />
          <Input type="password" name="password" placeholder="Password" onChange={handleChange} required />
          <Button className="w-full bg-blue-500 text-white mt-4">Register</Button>
        </form>
        <p className="text-center mt-4">
          Already registered? <Link to="/login" className="text-blue-500">Login here</Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
