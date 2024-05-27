import { useEffect, useState } from "react";
import "./App.scss";
import { Card } from "./components/";
import type { Course } from "./types";
import { Sidebar } from "./components/Sidebar/Sidebar";
import { instance } from "./api/api";

function App() {
	const [courses, setCourses] = useState<Course[]>([]);

	useEffect(() => {
		async function fetchCourses() {
			try {
				const responce = await instance.get(``);

				setCourses(responce.data);
			} catch (error) {
				console.log(error);
			}
		}

		fetchCourses();
	}, []);

	return (
		<div className="app">
			<div className="container">
				<div className="wrapper">
					<div>
						<Sidebar />
					</div>
					<div className="field">
						{courses.map((course) => (
							<Card course={course} key={course.id} />
						))}
					</div>
				</div>
			</div>
		</div>
	);
}

export default App;
