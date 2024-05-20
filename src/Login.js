import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
// import Admin from "./Admin";

import React, { useState } from "react";
import { useNavigate } from "react-router";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const navigate = useNavigate();

  const handleLogin = (event) => {
    event.preventDefault();

    const username = event.currentTarget.elements.username.value;
    const password = event.currentTarget.elements.password.value;

    if (username === "admin" && password === "0000") {
      navigate("./Admin.js");
    } else {
      setErrorMessage("No access given due to wrong credentials");
    }
  };

  return (
    <section className="login-container">
      <h1>MY FAV MEMES LIBRARY</h1>
      <Form onSubmit={handleLogin}>
        <Form.Group className="mb-3">
          <Form.Label>username</Form.Label>
          <Form.Control
            className="login-input"
            name="username"
            type="text"
            id="username"
            placeholder="enter username"
            required
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>password</Form.Label>
          <Form.Control
            className="login-input"
            name="password"
            type="password"
            required
            placeholder="enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="remember me" />
        </Form.Group>
        <Button variant="dark" type="submit">
          login
        </Button>
      </Form>
      {errorMessage && <p>{errorMessage}</p>}
    </section>
  );
}

export default Login;
