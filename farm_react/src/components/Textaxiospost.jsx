import React, { useState } from "react";
import axios from "axios";

const Textaxiospost = () => {
  const [data, setData] = useState({
    email: "",
    password: ""
  });

  const handleChange = (e) => {
    const value = e.target.value;
    setData({
      ...data,
      [e.target.name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const userData = {
      email: data.email,
      password: data.password
    };
    axios.get("https://reqres.in/api/login", userData).then((response) => {
      console.log(response.status, response.data.data);
    });
  };

  return (
    <div>
      <h1>Login Account</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">
          Email
          <input
            type="email"
            name="email"
            value={data.email}
            onChange={handleChange}
            required
          />
        </label>
        <label htmlFor="password">
          Password
          <input
            type="password"
            name="password"
            value={data.password}
            onChange={handleChange}
            required
          />
        </label>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Textaxiospost;