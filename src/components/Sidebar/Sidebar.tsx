import styles from "./Sidebar.module.scss";

const links = [
	"Все темы",
	"Логика и мышление",
	"Загадки",
	"Головоломки",
	"Путешествия",
];

export const Sidebar = () => {
	return (
		<div className={styles.sidebar}>
			{links.map((link) => (
				<div className={styles.sidebar__link}>{link}</div>
			))}
		</div>
	);
};
