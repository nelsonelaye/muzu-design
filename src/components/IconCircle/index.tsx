import style from "./index.module.scss";
import { props as AppProps } from "./types";

function IconCircle({ Icon }: AppProps): JSX.Element {
  return <div className={style["container"]}>{Icon}</div>;
}

export default IconCircle;
