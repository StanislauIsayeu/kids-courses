import axios from "axios";
import { API_URL_BASE } from "../../config/config";
import { ICourse } from "./interfaces";

const GET_COURSES_URL = `${API_URL_BASE}/docs/courses.json`;

export async function fetchCourses(): Promise<ICourse[]> {
    const response = await axios.get<ICourse[]>(GET_COURSES_URL);

    return response.data;
}