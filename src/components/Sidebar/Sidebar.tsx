import styles from "./Sidebar.module.scss";
import type { SidebarProps } from "./types";

export const Sidebar = ({
  arrLinks,
  activeLink,
  setActiveLink,
}: SidebarProps) => {
  console.log(arrLinks);

  return (
    <div className={styles.sidebar}>
      {arrLinks.map((link, index) => (
        <div
          data-active={activeLink === index}
          key={index}
          onClick={() => setActiveLink(index)}
          className={styles.sidebar__link}
        >
          {link}
        </div>
      ))}
    </div>
  );
};
