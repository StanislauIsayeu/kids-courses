import { createContext, useState } from "react";
import { ICourseContext } from "./interfaces";
import { ReactNode } from 'react'
import { COURSES_DEFAULT_TAG } from "./courses.constants";

export const CoursesContext = createContext<ICourseContext>({
  selectedTag: COURSES_DEFAULT_TAG,
  setSelectedTag: () => { }
});

export const CoursesContextProvider = ({ children }: { children?: ReactNode }) => {
  const [selectedTag, setSelectedTag] = useState<string>(COURSES_DEFAULT_TAG);

  return (
    <CoursesContext.Provider value={{ selectedTag, setSelectedTag }}>
      {children}
    </CoursesContext.Provider>
  );
}