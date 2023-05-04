import "../css/sidebar.css";
import classNames from "classnames";
import { Link } from "react-router-dom";

export function Sidebar() {
  return (
    <div className="sidebar">
      {" "}
      <div className="sidebar-header">
        <div className="sidebar-header-logo"></div>
        
      </div>
      <ul>
        <li>
          <i className="fa fa-home"></i>
          <Link to="/homeUser">
            <a href="Home">Home</a>
          </Link>
        </li>
        <li>
          <i className="fa fa-wallet"></i>
          <Link to="/">
            <a href="Wallet">Wallet</a>
          </Link>
        </li>
        <li>
          <i className="fa fa-history"></i>
          <Link to="/history">
            <a href="History">Storico</a>
          </Link>
        </li>
        <li>
          <i className="fa fa-bell"></i>
          <Link to="/">
            <a href="Notifiche">Notifiche</a>
          </Link>
        </li>
        <li>
          <i className="fa fa-cog"></i>
          <Link to="/">
            <a href="Impostazioni">Impostazioni</a>
          </Link>{" "}
        </li>
        <li>
          <i className="fa fa-sign-out"></i>
          <Link to="/">
            <a href="Esci">Esci</a>
          </Link>
        </li>
      </ul>
    </div>
  );
}
