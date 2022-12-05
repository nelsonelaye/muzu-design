import style from "./index.module.scss";
import { props as AppProps } from "./types";

function Button({ text, children }: AppProps): JSX.Element {
  return (
    <div className={style["container"]}>
      {text}
      {children}
    </div>
  );
}
export default Button;
