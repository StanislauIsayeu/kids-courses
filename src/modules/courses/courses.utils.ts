import { ICourse } from "./models";

export function getCoursesTags(courses: ICourse[]): string[] {
    var tagsSet = courses.reduce((acc, course) => {
        var courseSet = new Set<string>(course.tags);

        return new Set<string>([...acc, ...courseSet]);
    }, new Set<string>());

    return Array.from(tagsSet);
}

export function filterCoursesByTag(courses: ICourse[], tag: string) {
    return tag ?
        courses.filter(c => c.tags.includes(tag))
        : courses;
}