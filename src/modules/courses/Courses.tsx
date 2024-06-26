import { useEffect, useMemo, useState } from "react";
import { fetchCourses } from "./coursesDataService";
import { ICourse } from "./interfaces";
import CoursesNavbar from "./components/CoursesNavbar/CoursesNavbar";
import { getUniqueCourseTags } from "./utils/courses.utils";
import { CoursesContextProvider } from "./CoursesContext";
import CourseCards from "./components/CourseCards/CourseCards";
import clsx from "clsx";
import styles from './courses.module.scss';

export default function Courses() {
    const [courses, setCourses] = useState<ICourse[]>([]);
    const tags = useMemo(() => getUniqueCourseTags(courses), [courses]);

    useEffect(() => {
        fetchCourses().then((courses: ICourse[]) => {
            setCourses(courses);
        });
    }, []);

    return (
        <div className={clsx(styles.courses)}>
            <CoursesContextProvider>
                <CoursesNavbar tags={tags} />
                <CourseCards courses={courses} />
            </CoursesContextProvider>
        </div>
    );
}
