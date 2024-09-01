import css from "./NotFound.module.css";

export default function NotFound() {
  return (
    <div className={css.container}>
      <h2>Something goes wrong !!!</h2>
      <p>404</p>
      <p>Page not found!</p>
    </div>
  );
}
