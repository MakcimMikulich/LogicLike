import { useEffect, useMemo, useState } from "react";
import styles from "./App.module.scss";
import type { Course } from "./types";
import { Sidebar, Card } from "./components";
import { instance } from "./api/api";

function App() {
	const [courses, setCourses] = useState<Course[]>([]);
	const [activeLink, setActiveLink] = useState(0);
	const [uniqueTags, setUniqueTags] = useState([]);
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		async function fetchData() {
			try {
				setIsLoading(true);
				const responce = await instance.get(``);
				const allTags = responce.data.flatMap((el: Course) => el.tags);
				setUniqueTags(Array.from(new Set(allTags)));

				setCourses(responce.data);
			} catch (error) {
				console.log(error);
			} finally {
				setIsLoading(false);
			}
		}

		fetchData();
	}, []);

	const filterCourses = useMemo(
		() =>
			activeLink === 0
				? courses
				: courses.filter((el) => el.tags.includes(uniqueTags[activeLink - 1])),
		[activeLink, courses, uniqueTags]
	);

	return (
		<div className={styles.app}>
			{isLoading ? (
				<span>Loading ...</span>
			) : (
				<div className={styles.container}>
					<div className={styles.wrapper}>
						<div>
							<Sidebar
								uniqueTags={uniqueTags}
								activeLink={activeLink}
								setActiveLink={setActiveLink}
							/>
						</div>
						<div className={styles.field}>
							{filterCourses.map((course) => (
								<Card course={course} key={course.id} />
							))}
						</div>
					</div>
				</div>
			)}
		</div>
	);
}

export default App;
