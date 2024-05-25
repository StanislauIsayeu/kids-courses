import styles from './courseCard.module.scss';
import clsx from "clsx";
import { memo } from 'react';

interface ICourseCardProps {
  image: string;
  imageColor: string;
  name: string;
}

export default memo(function CourseCard({ image, imageColor, name }: ICourseCardProps) {

  return (
    <div className={clsx(styles.courseCardContainer)} style={{ 'backgroundColor': imageColor }}>
      <img className={clsx(styles.courseCardImage)} src={image} alt={name}></img>
      <div className={clsx(styles.courseCardFooter)}>{name}</div>
    </div>
  );
});