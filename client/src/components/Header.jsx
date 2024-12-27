import "../styles/header.css";
import git_logo from "../assets/git_logo.png";
import { useContext } from "react";
import { AppContext } from "../utils/contextapi";

export default function Header() {
  const { showAlert, alertMessage } = useContext(AppContext);
  return (
    <>
      <div className="header">
        <div className="heading">Excuse Factory</div>
        <a
          className="gitlogo"
          href="https://github.com/Navsinghh/ExcuseFactory"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={git_logo} alt="GitHub Logo" className="logo" />
        </a>
      </div>
      {showAlert && <div className="alertStyles">{alertMessage}</div>}
    </>
  );
}
