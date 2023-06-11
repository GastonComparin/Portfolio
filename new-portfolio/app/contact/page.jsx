"use client";
import React, { useState, useEffect } from "react";
import style from "./page.module.css";
import ok from "../assets/images/comprobado.png";
import Image from "next/image";
export default function Contact() {
  const [isClicked, setIsClicked] = useState(false);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  const handleClick = (e) => {
    e.preventDefault();
    setIsClicked(true);
    setShowSuccessMessage(false);

    setTimeout(() => {
      setIsClicked(false);
      setShowSuccessMessage(true);
    }, 1000);
  };

  useEffect(() => {
    const closeSuccessModal = (e) => {
      if (e.target.classList.contains(style.modal)) {
        setShowSuccessMessage(false);
      }
    };

    document.addEventListener("click", closeSuccessModal);

    return () => {
      document.removeEventListener("click", closeSuccessModal);
    };
  }, []);

  return (
    <div className={style.container}>
      <h1 className={style.title}>Contáctame</h1>
      <form className={style.form}>
        <div className={style.personal}>
          <input type="text" placeholder="Nombre..." />
          <input type="text" placeholder="Correo..." />
        </div>
        <input
          type="text"
          placeholder="Escribe tu mensaje..."
          className={style.mensaje}
        />
        <button
          className={`${style.customButton} ${
            isClicked ? style.animateButton : ""
          }`}
          onClick={handleClick}
        >
          Enviar Mensaje
        </button>
      </form>
      {showSuccessMessage && (
        <div className={style.modal}>
          <div className={style.modalContent}>
            <div className={style.successMessage}>
              ¡Mensaje enviado correctamente!
              <Image src={ok} alt="ok" className={style.icon} />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
