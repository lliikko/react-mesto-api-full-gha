import React, { useEffect, useState, useContext } from "react";
import PopupWithForm from "./PopupWithForm";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

function EditProfilePopup(props) {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const currentUser = useContext(CurrentUserContext);

  function handleNameAdd(e) {
    setName(e.target.value);
  }

  function handleDescriptionAdd(e) {
    setDescription(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();

    props.onUpdateUser({
      name: name,
      about: description,
    });
  }

  useEffect(() => {
    if (props.isOpen) {
      setName(currentUser.name);
      setDescription(currentUser.about);
    }
  }, [props.isOpen, currentUser]);

  return (
    <PopupWithForm
      isOpen={props.isOpen}
      onClose={props.onClose}
      onSubmit={handleSubmit}
      name={`name`}
      title={`Редактировать профиль`}
      buttonText={`Сохранить`}
    >
      <input
        id="name"
        name="name"
        type="text"
        className="popup__item"
        placeholder="Имя"
        required
        minLength="2"
        maxLength="40"
        value={name}
        onChange={handleNameAdd}
      />
      <span
        className="popup__input-error popup__input-error_type_name"
        id="name-error"
      ></span>
      <input
        id="about"
        name="about"
        type="text"
        className="popup__item"
        placeholder="Дополнительно"
        minLength="2"
        maxLength="200"
        required
        value={description}
        onChange={handleDescriptionAdd}
      />
      <span
        className="popup__input-error popup__input-error_type_about"
        id="about-error"
      ></span>
    </PopupWithForm>
  );
}

export default EditProfilePopup;
