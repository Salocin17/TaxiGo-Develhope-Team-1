import "../css/sidebar.css";
import classNames from 'classnames';

export function Sidebar({ isSidebarOpen, closeSidebar }) {
  return (
    <aside className={classNames('sidebar', { 'closed': !isSidebarOpen })}>
      <button className="close-button" onClick={closeSidebar}>
        <svg viewBox="0 0 24 24" width="24" height="24">
          <path
            fill="currentColor"
            d="M18.7 4.3c-.4-.4-1-.4-1.4 0L12 10.6 6.7 5.3c-.4-.4-1-.4-1.4 0s-.4 1 0 1.4l5.3 5.3-5.3 5.3c-.4.4-.4 1 0 1.4.2.2.4.3.7.3s.5-.1.7-.3L12 13.4l5.3 5.3c.2.2.4.3.7.3s.5-.1.7-.3c.4-.4.4-1 0-1.4L13.4 12l5.3-5.3c.4-.4.4-1 0-1.4z"
          />
        </svg>
      </button>
      <nav>
        <ul>
          <li>Link 1</li>
          <li>Link 2</li>
          <li>Link 3</li>
        </ul>
      </nav>
    </aside>
  );
}
