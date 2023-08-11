import React, { useEffect, useState } from "react";
import PopupWithForm from "./PopupWithForm";

function AddPlacePopup(props) {
  const [name, setName] = useState("");
  const [link, setLink] = useState("");

  function handleNameAdd(e) {
    setName(e.target.value);
  }

  function handleLinkAdd(e) {
    setLink(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();

    props.onSubmit({
      name: name,
      link: link,
    });
  }

  useEffect(() => {
    if (props.isOpen) {
      setName("");
      setLink("");
    }
  }, [props.isOpen]);

  return (
    <PopupWithForm
      isOpen={props.isOpen}
      onClose={props.onClose}
      onSubmit={handleSubmit}
      name={`add-place`}
      title={`Новое место`}
      buttonText={`Создать`}
    >
      <input
        id="place"
        name="place"
        type="text"
        className="popup__item"
        placeholder="Название"
        minLength="2"
        maxLength="30"
        value={name}
        onChange={handleNameAdd}
        required
      />
      <span
        className="popup__input-error popup__input-error_type_place"
        id="place-error"
      ></span>
      <input
        id="link"
        name="link"
        type="url"
        className="popup__item"
        placeholder="Ссылка на картинку"
        value={link}
        onChange={handleLinkAdd}
        required
      />
      <span
        className="popup__input-error popup__input-error_type_link"
        id="link-error"
      ></span>
    </PopupWithForm>
  );
}

export default AddPlacePopup;
