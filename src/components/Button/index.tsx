import style from "./index.module.scss";

type props = {
  text: string;
  children: JSX.Element | null;
};

function Button({ text, children }: props): JSX.Element {
  return (
    <div className={style["container"]}>
      {text}
      {children}
    </div>
  );
}
export default Button;
