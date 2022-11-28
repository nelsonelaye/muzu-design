import style from "./index.module.scss";

type props = {
  Icon: JSX.Element | null;
};
function IconCircle({ Icon }: props): JSX.Element {
  return <div className={style["container"]}>{Icon}</div>;
}

export default IconCircle;
