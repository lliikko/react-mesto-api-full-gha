import React from "react";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

function Card(props) {
  const currentUser = React.useContext(CurrentUserContext);
  const isOwn = props.card.owner === currentUser._id;
  const isLiked = props.card.likes.some((i) => i === currentUser._id);
  const cardLikeButtonClassName = `cards__like-button ${
    isLiked && "cards__like-button_active"
  }`;
  function handleClick() {
    props.onCardClick(props.card);
  }
  function handleLikeClick() {
    props.onCardLike(props.card);
  }

  function handleDeleteClick() {
    props.onCardDelete(props.card);
  }

  return (
    <div className="cards__item">
      <img
        className="cards__image"
        src={props.link}
        alt={props.name}
        id="btnImage"
        onClick={handleClick}
      />
      {isOwn && (
        <button
          type="button"
          className="cards__trash-button"
          id="btnDelete"
          onClick={handleDeleteClick}
        ></button>
      )}
      <div className="cards__description">
        <h2 className="cards__name">{props.name}</h2>
        <button
          type="button"
          className={cardLikeButtonClassName}
          id="btnLike"
          onClick={handleLikeClick}
        ></button>
        <p className="cards__like-number">{props.likes}</p>
      </div>
    </div>
  );
}

export default Card;
