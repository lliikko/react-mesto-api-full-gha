import { React, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Register = (props) => {
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

  const handleSubmit = (e) => {
    e.preventDefault();
    props.handleRegister(formValue.email, formValue.password);
  };

  return (
    <div className="authorization">
      <div className="authorization__container">
        <h2 className="authorization__heading">Регистрация</h2>
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
          <button
            type="submit"
            className="authorization__save-button"
            onSubmit={handleSubmit}
          >
            Зарегистрироваться
          </button>
          <div className="authorization__signin">
            <p className="authorization__signin_text">Уже зарегистрированы?</p>
            <Link to="/sign-in" className="authorization__signin_link">
              Войти
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
