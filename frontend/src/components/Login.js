import { React, useState } from "react";
import { useNavigate } from "react-router-dom";
import * as auth from "../utils/auth.js";

const Login = (props) => {
  const [formValue, setFormValue] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormValue({
      ...formValue,
      [name]: value,
    });
  };
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formValue.email || !formValue.password) {
      return;
    }
    auth
      .authorize(formValue.email, formValue.password)
      .then((data) => {
        if (data.email) {
          setFormValue({ email: "", password: "" });
          props.handleLogin();
          navigate("/", { replace: true });
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="authorization">
      <div className="authorization__container">
        <h2 className="authorization__heading">Войти</h2>
        <form
          className="authorization__input-container"
          onSubmit={handleSubmit}
        >
          <input
            id="email"
            name="email"
            type="email"
            className="authorization__item"
            placeholder="Email"
            required
            minLength="2"
            maxLength="100"
            value={formValue.email}
            onChange={handleChange}
          />
          <span
            className="authorization__input-error authorization__input-error_type_email"
            id="email-error"
          ></span>
          <input
            id="password"
            name="password"
            type="password"
            className="authorization__item"
            placeholder="Пароль"
            minLength="2"
            maxLength="200"
            required
            value={formValue.password}
            onChange={handleChange}
          />
          <span
            className="authorization__input-error authorization__input-error_type_password"
            id="password-error"
          ></span>
          <button type="submit" className="authorization__save-button">
            Войти
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
