export interface ICourse {
    name: string;
    id: string;
    image: string;
    bgColor: string;
    tags: string[];
}

export interface ICourseContext {
    selectedTag: string;
    setSelectedTag: React.Dispatch<React.SetStateAction<string>>;
}