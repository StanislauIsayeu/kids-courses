import clsx from "clsx";
import { useContext } from "react";
import { CoursesContext } from "../../CoursesContext";
import styles from './coursesNavbarRow.module.scss';

interface ICoursesNavbarRowProps {
    tag: string;
    value?: string;
}

export default function CoursesNavbarRow({ value, tag }: ICoursesNavbarRowProps) {
    const { selectedTag, setSelectedTag } = useContext(CoursesContext);
    const isTagSelected = tag === selectedTag;

    return (
        <div
            className={clsx(styles.navbarRow, { 
                [styles.selected]: isTagSelected 
            })}
            onClick={() => { setSelectedTag(tag) }}
        >
            {value ?? tag}
        </div>
    );
};