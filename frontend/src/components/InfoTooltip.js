import React from "react";
import infoIconReg from "../images/info-icon-reg.svg";
import infoIconUnreg from "../images/info-icon-unred.svg";

function InfoToolTip(props) {
  return (
    <div className={`popup popup_info ${props.isOpen ? `popup_opened` : ""}`}>
      <div className="popup__info-container">
          <button
            type="button"
            className="popup__close-button"
            onClick={props.onClose}
          ></button>
          {props.isRegistredIn ? (
            <>
          <img
            className="popup__info-icon"
            src={infoIconReg}
            alt={"Вы зарегестрированы"}
          />
          <p className="popup__info-text">Вы успешно зарегистрировались!</p>
          </>
      ) : (
        <>
          <img
            className="popup__info-icon"
            src={infoIconUnreg}
            alt={"Вы не зарегестрированы"}
          />
          <p className="popup__info-text">
            Что-то пошло не так! Попробуйте ещё раз.
          </p>
        </>
      )}
      </div>
    </div>
  );
}

export default InfoToolTip;
