// import React, { useState, useEffect } from "react";
import style from "./index.module.scss";
import logo from "../../assets/images/mylogo.png";
import { HiOutlineBars2 } from "react-icons/hi2";

export default function Header(): JSX.Element {
  const menuItems = [
    { name: "Work", link: "#" },
    { name: "About", link: "#" },
    { name: "Contact", link: "#" },
  ];

  return (
    <section className={style["holder"]}>
      <nav className={style["nav_hold"]}>
        <div className={style["page_logo"]}>
          <img src={logo} alt="my logo" />
        </div>
        <ul className={style["navigations"]}>
          {menuItems.map((prop) => (
            <li key={prop.name.toLowerCase()}>{prop.name}</li>
          ))}
        </ul>

        <div className={style["nav_bar"]}>
          <HiOutlineBars2 />
        </div>
      </nav>
    </section>
  );
}
