import React from "react";
import Card from "./Card";
import iconEdit from "../images/icon1.svg";
import iconAdd from "../images/icon2.svg";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

function Main(props) {
  const currentUser = React.useContext(CurrentUserContext);
  return (
    <main className="content">
      <section className="profile">
        <div className="profile__avatar">
          <img
            className="profile__image"
            src={currentUser.avatar}
            alt="Аватар"
            onClick={props.onEditAvatar}
          />
        </div>
        <div className="profile__info">
          <h1 className="profile__name">{currentUser.name}</h1>
          <p className="profile__additional">{currentUser.about}</p>
          <button type="button" className="profile__edit-button">
            <img
              className="profile__edit-icon"
              src={iconEdit}
              alt="Редактировать"
              onClick={props.onEditProfile}
            />
          </button>
        </div>
        <button type="button" className="profile__add-button">
          <img
            className="profile__add-icon"
            src={iconAdd}
            alt="Добавить"
            onClick={props.onAddPlace}
          />
        </button>
      </section>
      <section className="cards">
        {props.cards.map((card) => (
          <Card
            key={card._id}
            card={card}
            link={card.link}
            name={card.name}
            likes={card.likes.length}
            onCardClick={props.onCardClick}
            onCardLike={props.onCardLike}
            onCardDelete={props.onCardDelete}
          />
        ))}
      </section>
    </main>
  );
}

export default Main;
