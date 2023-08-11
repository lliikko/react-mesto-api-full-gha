export const apiConfig = {
  url: "http://api.angelikayang.nomoreparties.co",
  headers: {
    "Content-Type": "application/json",
  },
};

export const validationConfig = {
  formSelector: ".popup__container",
  inputSelector: ".popup__item",
  submitButtonSelector: ".popup__save-button",
  inactiveButtonClass: "popup__save-button_disabled",
  errorClassTemplate: ".popup__input-error_type_",
  errorClassActive: "popup__input-error_active",
  errorClass: "popup__item_invalid",
};

export const formSelectors = {
  profile: document.querySelector('.popup__input-container[name="profile"]'),
  avatar: document.querySelector('.popup__input-container[name="avatar-edit"]'),
  addCard: document.querySelector('.popup__input-container[name="new-place"]'),
};

export const profileSelectors = {
  userName: document.querySelector(".profile__name"),
  userDescription: document.querySelector(".profile__additional"),
  userAvatar: document.querySelector(".profile__image"),
};

export const cardTemplate = document.querySelector("#card-item").content;
