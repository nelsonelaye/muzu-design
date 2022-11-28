import React from "react";
import style from "./index.module.scss";
import IconCircle from "../IconCircle";
import { FaStaylinked } from "react-icons/fa";
type Format = {
  id: string;
  title: string;
  description: string;
};

type props = {
  data: Array<Format>;
  heading: string;
};
const index = ({ data, heading }: props): JSX.Element => {
  return (
    <section className={style["items_and_icons_section"]}>
      <h2>{heading}</h2>
      <div className={style["items_hold"]}>
        {data?.map((prop, index) => (
          <div className={style["item_details"]} key={prop.id}>
            <IconCircle Icon={<FaStaylinked />} />
            <h4>{prop.title}</h4>
            <span>{prop.description}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default index;
