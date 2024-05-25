import { useContext } from "react";
import { CoursesContext } from "../../CoursesContext";
import { ICourse } from "../../models";
import { filterCoursesByTag } from "../../courses.utils";
import CourseCard from "./CourseCard";

interface ICourseCardsProps {
    courses: ICourse[];
}

export default function CourseCards({ courses }: ICourseCardsProps) {
    const { selectedTag } = useContext(CoursesContext);
    const filteredCourses = filterCoursesByTag(courses, selectedTag);

    return (
        <div style={{ 'display': 'grid', 'gridTemplateColumns': 'auto auto auto', 'width': '100%', 'gap': '18px' }}>
            {filteredCourses.map(course => <CourseCard
                image={course.image}
                imageColor={course.bgColor}
                name={course.name}
                key={course.id} />)}
        </div>
    );
}