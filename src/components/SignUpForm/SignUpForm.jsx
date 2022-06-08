import { Component } from 'react';
import { signUp } from '../../utilities/users-service';
import {  useNavigate } from "react-router-dom";


export default class SignUpForm extends Component {
  state = {
    name: '',
    email: '',
    phone: '',
    location: '',
    password: '',
    confirm: '',
    error: ''
  };

  

  handleSubmit = async (evt) => {
    // const navigate = useNavigate();
    evt.preventDefault();
    // navigate('/')
    try {
      const formData = { ...this.state };
      delete formData.confirm;
      delete formData.error;
      const user = await signUp(formData);
      this.props.setUser(user);
    } catch {
      this.setState({
        error: 'Sign Up Failed - Try Again'
      });
    }
  }

  handleChange = (evt) => {
    this.setState({
      [evt.target.name]: evt.target.value,
      error: ''
    });
  }

  render() {
    const disable = this.state.password !== this.state.confirm;
    return (
      <div>
        <div className="form-container">
          <form autoComplete="off" onSubmit={this.handleSubmit}>
            <label>Name</label>
            <input type="text" name="name" value={this.state.name} onChange={this.handleChange} required />
            <label>Email</label>
            <input type="text" name="email" value={this.state.email} onChange={this.handleChange} required />
            <label>Phone</label>
            <input type="number" name="phone" value={this.state.phone} onChange={this.handleChange} required />
            <label>Location</label>
            <input type="text" name="location" value={this.state.location} onChange={this.handleChange} required />
            <label>Password</label>
            <input type="password" name="password" value={this.state.password} onChange={this.handleChange} required />
            <label>Confirm</label>
            <input type="password" name="confirm" value={this.state.confirm} onChange={this.handleChange} required />
            <button type="submit" disabled={disable}>SIGN UP</button>
          </form>
        </div>
        <p className="error-message">&nbsp;{this.state.error}</p>
      </div>
    );
  }
}