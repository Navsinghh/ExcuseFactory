import "../styles/header.css";
import git_logo from "../assets/git_logo.png";

export default function Header() {
  return (
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
  );
}
