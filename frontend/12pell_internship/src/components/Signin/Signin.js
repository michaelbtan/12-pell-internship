import { useState } from 'react';
import './Signin.css'
import { useNavigate } from 'react-router-dom'
import { logIn } from "../../utilities/users";

export default function Signin({ setLoggedIn }) {
  const navigate = useNavigate()

  const [form, setForm] = useState({
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const user = await logIn(form);
      if (user) {
        setLoggedIn(true);
        navigate("/");
      }
    } catch (error) {
      console.log(error);
      setForm({
        username: "",
        password: "",
      });
    }
  };

  const { username, password } = form;

  return (
    <div className="signin_container">
      <div className="signin_card">
        <div className="signin_header">
        </div>
        <form className="signin_form" onSubmit={handleLogin}>
          <label>Username</label>
          <input
            className="signin_input"
            required
            type="text"
            name="username"
            value={username}
            placeholder="Enter Username"
            onChange={handleChange}
          />
          <label>Password</label>
          <input
            className="signin_input"
            required
            type="password"
            name="password"
            value={password}
            placeholder="Enter Password"
            onChange={handleChange}
          />
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  )}