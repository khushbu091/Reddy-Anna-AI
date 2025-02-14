import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { login } from "./Auth";
import "../AdminPannel/Login.css";



const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const user = login(username, password);
    if (user) {
      navigate("/admin");
    } else {
      alert("Invalid credentials");
    }
  };

  return (
    <div className="Admin-login-container">
      <center><h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <input className="Admin-login-input" type="text" placeholder="Username" onChange={(e) => setUsername(e.target.value)} />
        <input className="Admin-login-input" type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
        <button className="Admin-login-btn" type="submit">Login</button>
      </form>
      </center>
    </div>
  );
};

export default Login;
