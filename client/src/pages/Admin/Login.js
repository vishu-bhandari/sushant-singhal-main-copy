import React, { useState } from "react";
import Header from "../../Components/Header";
import axios from "axios";
import { message } from "antd";
import { useNavigate } from "react-router-dom";

const BASE_URL = process.env.REACT_APP_BASE_URL || "http://localhost:8000";

function Login() {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    username: "",
    password: "",
  });
  const [loading, setLoading] = useState(false); // Track loading state

  const login = async () => {
    setLoading(true);
    try {
      const res = await axios.post(`${BASE_URL}/api/portfolio/AdminLogin`, user);

      if (res.data.success) {
        message.success(res.data.message);
        localStorage.setItem("token", res.data.token); // Store only the token
        navigate('/admin');
      } else {
        message.error(res.data.message);
      }
    } catch (error) {
      message.error(error.response ? error.response.data.message : error.message); // Improved error handling
    } finally {
      setLoading(false); // Stop loading regardless of success or error
    }
  };

  return (
    <>
      <Header />
      <div className="flex justify-center items-center h-screen bg-primary">
        <div className="w-96 flex gap-5 p-5 shadow border border-gray-500 flex-col bg-white rounded-md">
          <h1 className="text-2xl">Admin Login</h1>
          <hr />
          <input
            type="text"
            value={user.username}
            onChange={(e) => setUser({ ...user, username: e.target.value })}
            placeholder="Username"
            className="border p-2 rounded-md w-full"
          />
          <input
            type="password"
            value={user.password}
            onChange={(e) => setUser({ ...user, password: e.target.value })}
            placeholder="Password"
            className="border p-2 rounded-md w-full"
          />
          <button
            className={`bg-primary text-white p-2 rounded-md w-full ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
            onClick={login}
            disabled={loading} // Disable button while loading
          >
            {loading ? 'Logging in...' : 'Login'}
          </button>
        </div>
      </div>
    </>
  );
}

export default Login;
