import React from "react";
import style from "./index.module.scss";
// import IconCircle from "../IconCircle";
import { FaStaylinked } from "react-icons/fa";
import { props as AppProps } from "./types";

const IconCircle = ({ Icon }: AppProps): JSX.Element => {
  return <div className={style["container"]}>{Icon}</div>;
};

const index = ({ data, heading }: AppProps): JSX.Element => {
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

// export default IconCircle;
