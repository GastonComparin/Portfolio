"use client"
import { NavBar } from "./components/navBar";
import "./styles/global.css";
export default function RootLayout({ children }) {
  return (
        <html>
          <head>
            <title>Gaston Comparin</title>
          </head>
          <header>
            <NavBar />
          </header>
          <body>{children}</body>
        </html>
  );
}
