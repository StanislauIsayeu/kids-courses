import { useContext, useMemo } from "react";
import { CoursesContext } from "../../CoursesContext";
import { ICourse } from "../../interfaces";
import { filterCoursesByTag } from "../../utils/courses.utils";
import CourseCard from "./CourseCard";
import styles from './courseCards.module.scss';
import clsx from "clsx";

interface ICourseCardsProps {
    courses: ICourse[];
}

export default function CourseCards({ courses }: ICourseCardsProps) {
    const { selectedTag } = useContext(CoursesContext);
    const filteredCourses = useMemo(
        () => filterCoursesByTag(courses, selectedTag),
        [courses, selectedTag]
    );

    return (
        <div className={clsx(styles.courseCardsContainer)}>
            {filteredCourses.map(course => <CourseCard
                image={course.image}
                imageColor={course.bgColor}
                name={course.name}
                key={course.id} />
            )}
        </div>
    );
};