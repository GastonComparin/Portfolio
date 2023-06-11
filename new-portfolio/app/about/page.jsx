"use client";
import Image from "next/image";
import style from "./page.module.css";
import linkedinIcon from "../assets/images/linkedin.png";
import gitHubIcon from "../assets/images/github-mark-white.png";
import image from "../assets/images/portrait.jpeg";
import Link from "next/link";
export default function About() {
  return (
    <div className={style.text}>
      <div className={style.container}>
        <h1 className={style.title}>
          <span style={{ color: "#EE6C4D" }}>Un poco sobre mi</span>
          <div className={style.line}></div>
        </h1>
        <span style={{ color: "#E8DAB2" }} className={style.cuerpo}>
          Soy Gastón, una persona responsable, disciplinada y entusiasta que
          <br />
          siempre busca nuevos desafíos en el mundo de la programación.
          <br />
          Recientemente me aventuré en el emocionante camino del desarrollo Full
          <br />
          Stack, donde puedo combinar mi creatividad y habilidades técnicas para
          <br />
          construir soluciones web impactantes.
        </span>
        <div className={style.icons}>
          <Link href="https://www.linkedin.com/in/gaston-comparin-34607925a/">
            <Image
              src={linkedinIcon}
              alt="Linkedin Icon"
              className={style.icon}
            />
          </Link>
          <Link href="https://github.com/GastonComparin">
            <Image src={gitHubIcon} alt="GitHub Icon" className={style.icon} />
          </Link>
        </div>
        <div className={style.lineIconsH}></div>
        <div className={style.lineIconsV}></div>
        <div className={style.portraitWrapper}>
          <Image src={image} alt="Portrait" className={style.portrait} />
        </div>
      </div>
    </div>
  );
}
