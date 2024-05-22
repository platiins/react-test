import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import React, { useState } from "react";

function Login() {
  const [loginMessage, setLoginMessage] = useState("");

  const handleLogin = (event) => {
    event.preventDefault();
    event.stopPropagation();
    const form = event.currentTarget;

    let username = event.currentTarget.elements.username.value;
    let password = event.currentTarget.elements.password.value;

    if (username !== "admin" || password !== "0000") {
      setLoginMessage("no access due to wrong credentials");
    } else {
      setLoginMessage(
        `successfull login! i have not learned how to make routing in React JS, so please change isLoggedIn value in Main.js in order to be redirected to Admin page`
      );
    }
  };

  return (
    <section className="login-container">
      <h1 className="admin-title">ADMIN PANEL</h1>
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
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="remember me" />
        </Form.Group>
        <Button variant="dark" type="submit">
          login
        </Button>
      </Form>
      {setLoginMessage && (
        <div>
          <p className="login-message">{loginMessage}</p>
        </div>
      )}
    </section>
  );
}

export default Login;
