import { ALL_COURSES_TEXT, COURSES_DEFAULT_TAG } from "../../courses.constants";
import CoursesNavbarRow from "./CoursesNavbarRow";

interface ICoursesNavbarProps {
    tags: string[];
}

export default function CoursesNavbar({ tags }: ICoursesNavbarProps) {

    return (
        <div style={{ 'display': 'flex', 'flexFlow': 'column', 'width': '264px', 'height': '234px' }}>
            <CoursesNavbarRow tag={COURSES_DEFAULT_TAG} value={ALL_COURSES_TEXT} />
            {
                tags.map(tag => <CoursesNavbarRow tag={tag} />)
            }
        </div>
    );
}