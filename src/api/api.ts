import axios from "axios";

// const instance = axios.create({
// 	baseURL: process.env.REACT_APP_API_URL,
// });
const instance = axios.create({
	baseURL: "https://logiclike.com/docs/courses.json",
});

export { instance };
