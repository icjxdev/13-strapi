import { FaTimes } from "react-icons/fa";
import sublinks from "./data";
import { useGlobalContext } from "./Context";

const Sidebar = () => {
  const { isSidebarOpen, closeSidebar } = useGlobalContext();
  return (
    <aside className={isSidebarOpen ? "sidebar show-sidebar" : "sidebar"}>
      <div className="sidebar-container">
        <button className="close-btn" onClick={closeSidebar}>
          <FaTimes />
        </button>
        <div className="slidebar-links">
          {sublinks.map(({ pageId, page, links }) => (
            <article key={pageId}>
              <h4>{page}</h4>
              <div className="sidebar-sublinks">
                {links.map(({ id, label, icon, url }) => (
                  <a key={id} href={url}>
                    {icon}
                    {label}
                  </a>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </aside>
  );
};
export default Sidebar;
