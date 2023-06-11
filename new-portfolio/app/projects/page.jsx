"use client";
import { useState } from "react";
import style from "./page.module.css";
import Image from "next/image";
import Muscle from "../assets/images/CAP 2.png";
import pkm from "../assets/images/pkm cap.png";
import rym from "../assets/images/cap rym.png";
import gh from "../assets/images/github-mark-white.png";
import ld from "../assets/images/linkedin.png";
import link from "../assets/images/link.png";
import Link from "next/link";

export default function Projects() {
  const images = [Muscle, pkm, rym];
  const url = [
    "https://github.com/GastonComparin/MuscleLab",
    "https://github.com/GastonComparin/PI-POKEMON",
    "https://github.com/GastonComparin/RickandMorty",
  ];
  const page = ["https://muscle-lab-six.vercel.app"];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showButtons, setShowButtons] = useState(false);
  const handleLeft = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  const handleRight = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handleHover = () => {
    setShowButtons(true);
  };

  const handleHoverEnd = () => {
    setShowButtons(false);
  };

  return (
    <div className={style.bigContainer}>
      <h1 className={style.title}>Proyectos Destacados</h1>
      <div className={style.container}>
        <Image
          src={images[(currentIndex + images.length - 1) % images.length]}
          className={style.sideImage}
          onClick={handleLeft}
        />
        <div
          className={`${style.centerImage} ${
            showButtons ? style.showButtons : ""
          }`}
          onMouseEnter={handleHover}
          onMouseLeave={handleHoverEnd}
        >
          <Image src={images[currentIndex]} className={style.image} />
          {showButtons && (
            <div className={style.buttonContainer}>
              <button>
                <Link href={url[currentIndex]} passHref>
                  <Image src={link} className={style.icon} />
                </Link>
              </button>

              <button>
                <Link href={url[currentIndex]} passHref>
                  <Image src={gh} className={style.icon} />
                </Link>
              </button>
            </div>
          )}
        </div>
        <Image
          src={images[(currentIndex + 1) % images.length]}
          className={style.sideImage}
          onClick={handleRight}
        />
      </div>
    </div>
  );
}
