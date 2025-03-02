import { useState, useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { useNavigate, Link } from "react-router-dom";
import Input from "../ui/input";
import Button from "../ui/button";
import { login } from "../../utils/api";

const Login = () => {
  const { setUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ email: "", password: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log("Login Attempt:", formData);
      const response = await login(formData);
      console.log("Login Response:", response);
  
      localStorage.setItem("token", response.data.token);
      setUser({ _id: response.data._id, name: response.data.name, email: response.data.email, role: response.data.role });
  
      alert("Login successful!");
      navigate("/dashboard");
    } catch (error) {
      console.error("Login Error:", error.response?.data || error.message);
      alert(error.response?.data?.message || "Server error");
    }
  };
  

  return (
    <div 
      className="min-h-screen flex items-center justify-center bg-cover bg-center" 
      style={{ backgroundImage: "url('https://source.unsplash.com/1600x900/?project-management,office')" }}
    >
      <div className="max-w-md w-full p-6 shadow-lg rounded-lg bg-white bg-opacity-90">
        <h2 className="text-2xl font-semibold text-center mb-4">Login</h2>
        <form onSubmit={handleSubmit}>
          <Input type="email" name="email" placeholder="Email" onChange={handleChange} required />
          <Input type="password" name="password" placeholder="Password" onChange={handleChange} required />
          <Button className="w-full bg-blue-500 text-white mt-4">Login</Button>
        </form>

        <p className="text-center text-sm mt-4">
          Not yet registered?{" "}
          <Link to="/register" className="text-blue-500 font-semibold">
            Register here
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
