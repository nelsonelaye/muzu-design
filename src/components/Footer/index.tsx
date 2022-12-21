import style from "./index.module.scss";
import logo from "../../assets/images/mylogo.png";
import { RiFacebookFill } from "react-icons/ri";
import { TfiTwitter } from "react-icons/tfi";
import { ImInstagram } from "react-icons/im";

export default function index(): JSX.Element {
  return (
    <div className={style["container"]}>
      <div className={style["context"]}>
        <img src={logo} alt="my logo" />
        <span>Live the life you want</span>
      </div>
      <div className={style["social"]}>
        <RiFacebookFill className={style["icon"]} />
        <TfiTwitter className={style["icon"]} />
        <ImInstagram className={style["icon"]} />
      </div>
    </div>
  );
}
