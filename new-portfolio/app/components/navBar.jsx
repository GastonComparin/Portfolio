"use client";
import Link from "next/link";
import style from "./navBar.module.css";
import Image from "next/image";
import homeIcon from "../assets/images/7784.png";
import aboutIcon from "../assets/images/informacion.png";
import projectsIcon from "../assets/images/maletin.png";
import blogIcon from "../assets/images/blog.png";
import contactIcon from "../assets/images/email.png";
const links = [
  {
    label: <Image className={style.homeIcon} src={homeIcon} alt="fondo" />,
    route: "/home",
  },
  {
    label: <Image className={style.icon} src={aboutIcon} alt="fondo" />,
    route: "/about",
  },
  {
    label: <Image className={style.icon} src={projectsIcon} alt="fondo" />,
    route: "/projects",
  },
  // {
  //   label: <Image className={style.icon} src={blogIcon} alt="fondo" />,
  //   route: "/tools",
  // },
  {
    label: <Image className={style.icon} src={contactIcon} alt="fondo" />,
    route: "/contact",
  },
];

export function NavBar() {
  return (
    <div>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <header className={style.container}>
        <div className={style.header}>
          <nav className={style.nav}>
            <ul className={style.list}>
              {links.map(({ label, route }) => (
                <li key={route} className={style.button}>
                  <Link href={route}>{label}</Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </header>
    </div>
  );
}
