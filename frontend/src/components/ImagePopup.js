import React from "react";

function ImagePopup({ card, onClose }) {
  return (
    <div className={`popup popup_full-image ${card ? "popup_opened" : ""}`}>
      <div className="popup__image-container">
        <button
          type="button"
          className="popup__close-button"
          onClick={onClose}
        ></button>
        <img
          className="popup__image"
          src={card?.link}
          alt={card?.name}
          id="full-image"
        />
        <p className="popup__place-name">{card?.name}</p>
      </div>
    </div>
  );
}
export default ImagePopup;
