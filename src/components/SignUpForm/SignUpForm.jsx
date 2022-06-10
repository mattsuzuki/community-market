import { Component } from "react";
import { signUp } from "../../utilities/users-service";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function SignUpForm({ setUser}) {
  const navigate= useNavigate();
  const [state, setState] = useState({
    name: "",
    email: "",
    phone: "",
    location: "",
    password: "",
    confirm: "",
    error: "",
  });

  const handleSubmit = async (evt) => {
    evt.preventDefault();
    try {
      const formData = { ...state };
      delete formData.confirm;
      delete formData.error;
      const user = await signUp(formData);
      setUser(user);

      navigate("/")
    } catch {
      setState({
        error: "Sign Up Failed - Try Again",
      });
    }
  };

  const handleChange = (evt) => {
    setState({
      ...state,
      [evt.target.name]: evt.target.value,
      error: "",
    });
  };

  const disable = state.password !== state.confirm;

  return (
    <div>
      <div className="form-container">
        <form autoComplete="off" onSubmit={handleSubmit}>
          <label>Name</label>
          <input
            type="text"
            name="name"
            value={state.name}
            onChange={handleChange}
            required
          />
          <label>Email</label>
          <input
            type="text"
            name="email"
            value={state.email}
            onChange={handleChange}
            required
          />
          <label>Phone</label>
          <input
            type="number"
            name="phone"
            value={state.phone}
            onChange={handleChange}
            required
          />
          <label>Location</label>
          <input
            type="text"
            name="location"
            value={state.location}
            onChange={handleChange}
            required
          />
          <label>Password</label>
          <input
            type="password"
            name="password"
            value={state.password}
            onChange={handleChange}
            required
          />
          <label>Confirm</label>
          <input
            type="password"
            name="confirm"
            value={state.confirm}
            onChange={handleChange}
            required
          />
          <button type="submit" disabled={disable}>
            SIGN UP
          </button>
        </form>
      </div>
      <p className="error-message">&nbsp;{state.error}</p>
    </div>
  );
}
