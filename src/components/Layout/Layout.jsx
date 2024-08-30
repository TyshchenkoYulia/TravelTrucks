import Logo from "../Logo/Logo";
import Navigation from "../Navigation/Navigation";
import css from "./Layout.module.css";

export default function Layout({ children }) {
  return (
    <>
      <header className={css.header}>
        <div className={css.container}>
          <Logo />
          <Navigation />
        </div>
      </header>
      {children}
    </>
  );
}
