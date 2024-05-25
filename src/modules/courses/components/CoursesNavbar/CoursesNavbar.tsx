import clsx from "clsx";
import { ALL_COURSES_TEXT, COURSES_DEFAULT_TAG } from "../../courses.constants";
import CoursesNavbarRow from "./CoursesNavbarRow";
import styles from './coursesNavbar.module.scss';

interface ICoursesNavbarProps {
    tags: string[];
}

export default function CoursesNavbar({ tags }: ICoursesNavbarProps) {

    return (
        <div className={clsx(styles.navbarContainer)}>
            <CoursesNavbarRow tag={COURSES_DEFAULT_TAG} value={ALL_COURSES_TEXT} />
            {tags.map(tag => <CoursesNavbarRow key={tag} tag={tag} />)}
        </div>
    );
};