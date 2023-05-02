import "../css/sidebar.css";
import classNames from "classnames";
import { Link } from "react-router-dom";

export function Sidebar({ isSidebarOpen, closeSidebar }) {
  return (
    <aside className={classNames("sidebar", { closed: !isSidebarOpen })}>
      <div className="sidebar-header">
        <div className="sidebar-header-logo">
          
        </div>
        <div className="sidebar-user-info">
          <span className="sidebar-username">Nome Utente</span>
        </div>
      </div>
      <button className="close-button" onClick={closeSidebar}>
        <svg viewBox="0 0 24 24" width="24" height="24">
          <path
            fill="currentColor"
            d="M18.7 4.3c-.4-.4-1-.4-1.4 0L12 10.6 6.7 5.3c-.4-.4-1-.4-1.4 0s-.4 1 0 1.4l5.3 5.3-5.3 5.3c-.4.4-.4 1 0 1.4.2.2.4.3.7.3s.5-.1.7-.3L12 13.4l5.3 5.3c.2.2.4.3.7.3s.5-.1.7-.3c.4-.4.4-1 0-1.4L13.4 12l5.3-5.3c.4-.4.4-1 0-1.4z"
          />
        </svg>
      </button>
      <ul>
        <li>
          <i className="fa fa-home"></i>
          <Link to="/homeUser">
              <a href="Home" >
                Home
              </a>
            </Link>
        </li>
        <li>
          <i className="fa fa-wallet"></i>
          <Link to="/">
              <a href="Wallet" >
                Wallet
              </a>
            </Link>
        </li>
        <li>
          <i className="fa fa-history"></i>
          <Link to="/history">
              <a href="History">
                Storico
              </a>
            </Link>
        </li>
        <li>
          <i className="fa fa-bell"></i>
          <Link to="/">
              <a href="Notifiche" >
                Notifiche
              </a>
            </Link>
        </li>
        <li>
          <i className="fa fa-cog"></i>
          <Link to="/">
              <a href="Impostazioni" >
                Impostazioni
              </a>
            </Link>        </li>
        <li>
          <i className="fa fa-sign-out"></i>
          <Link to="/">
              <a href="Esci" >
                Esci
              </a>
            </Link>
        </li>
      </ul>
    </aside>
  );
}
