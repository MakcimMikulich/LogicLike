import { useCallback } from "react";
import styles from "./Sidebar.module.scss";
import type { SidebarProps } from "./types";

export const Sidebar = ({
	uniqueTags,
	activeLink,
	setActiveLink,
}: SidebarProps) => {
	const handlerClick = useCallback(
		(index: number) => {
			if (activeLink === index) {
				return;
			}

			setActiveLink(index);
		},
		[activeLink]
	);

	return (
		<div className={styles.sidebar}>
			{["Все темы", ...uniqueTags].map((link, index) => (
				<div
					data-active={activeLink === index}
					key={index}
					onClick={() => handlerClick(index)}
					className={styles.sidebar__link}
				>
					{link}
				</div>
			))}
		</div>
	);
};
