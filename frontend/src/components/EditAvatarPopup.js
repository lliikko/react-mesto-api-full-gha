import React, { useRef, useEffect } from "react";
import PopupWithForm from "./PopupWithForm";

function EditAvatarPopup(props) {
  const refAvatar = useRef();

  function handleSubmit(e) {
    e.preventDefault();

    props.onSubmit({
      avatar: refAvatar.current.value,
    });
  }

  useEffect(() => {
    refAvatar.current.value = "";
  }, [props.isOpen]);

  return (
    <PopupWithForm
      isOpen={props.isOpen}
      onClose={props.onClose}
      onSubmit={handleSubmit}
      name={`avatar`}
      title={`Обновить аватар`}
      buttonText={`Сохранить`}
    >
      <input
        ref={refAvatar}
        id="avatar"
        name="avatar"
        type="url"
        className="popup__item"
        placeholder="Ссылка"
        minLength="2"
        maxLength="130"
        required
      />
      <span
        className="popup__input-error popup__input-error_type_avatar"
        id="avatar-error"
      ></span>
    </PopupWithForm>
  );
}

export default EditAvatarPopup;
