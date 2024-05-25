import { ICourse } from "../interfaces";

export function getUniqueCourseTags(courses: ICourse[]): string[] {
    var tags = courses.reduce<string[]>((acc, course) => {
        acc.push(...course.tags);

        return acc;
    }, []);

    return [...new Set<string>(tags)];
}

export function filterCoursesByTag(courses: ICourse[], tag: string) {
    return tag ?
        courses.filter(c => c.tags.includes(tag))
        : courses;
}