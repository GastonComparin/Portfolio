"use client";
import Image from "next/image";
import style from "./page.module.css";
import me from "../assets/images/Group 8.png";
export default function Home() {
  return (
    <div className={style.container}>
      <h1 className={style.title}>
        <span style={{ color: "#E8DAB2" }}>¡Hola!</span>
      </h1>
      <h1 style={{ marginTop: "0.2rem" }}>
        <span style={{ color: "#E8DAB2" }}>Mi nombre es </span>
        <span style={{ color: "#EE6C4D" }}>Gastón Comparin</span>
        <br />
        <span style={{ color: "#E8DAB2" }}>Apasionado del </span>
        <span style={{ color: "#EE6C4D" }}>desarrollo Full-Stack</span>
      </h1>

      <Image src={me} className={style.foto} />
    </div>
  );
}
