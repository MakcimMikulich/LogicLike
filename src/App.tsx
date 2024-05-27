import { useEffect, useState } from "react";
import "./App.scss";
import type { Course } from "./types";
import { Sidebar, Card } from "./components";
import { instance } from "./api/api";

function App() {
  const [courses, setCourses] = useState<Course[]>([]);
  const [activeLink, setActiveLink] = useState(0);
  const arrLinks = ["Все темы"];
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchCourses() {
      try {
        setIsLoading(true);
        const responce = await instance.get(``);
        const allTags = responce.data.flatMap((el: Course) => el.tags);
        const uniqueTags: string[] = Array.from(new Set(allTags));
        arrLinks.push(...uniqueTags);

        setCourses(responce.data);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    }

    fetchCourses();
  }, []);

  return (
    <div className="app">
      <div className="container">
        {isLoading ? (
          <span>Loading ...</span>
        ) : (
          <div className="wrapper">
            <div>
              <Sidebar
                arrLinks={arrLinks}
                activeLink={activeLink}
                setActiveLink={setActiveLink}
              />
            </div>
            <div className="field">
              {courses.map((course) => (
                <Card course={course} key={course.id} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
