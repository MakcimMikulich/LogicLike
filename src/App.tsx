import { useEffect, useState } from "react";
import "./App.scss";
import { Card } from "./components/";
import type { Course } from "./types";

function App() {
  const [courses, setCourses] = useState<Course[]>([]);

  useEffect(() => {
    async function fetchCourses() {
      const url = "https://logiclike.com/docs/courses.json";

      try {
        const responce = await fetch(url).then((res) => res.json());
        setCourses(responce);
      } catch (error) {
        console.log(error);
      }
    }

    fetchCourses();
  }, []);

  return (
    <div className="app">
      <div className="table">
        {courses.map((course) => (
          <Card course={course} key={course.id} />
        ))}
      </div>
    </div>
  );
}

export default App;
