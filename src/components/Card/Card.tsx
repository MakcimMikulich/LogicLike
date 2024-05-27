import styles from "./Card.module.scss";
import type { CardProps } from "./type";

export const Card = ({ course }: CardProps) => {
  return (
    <div className={styles.card}>
      <div style={{ background: course.bgColor }} className={styles.card__img}>
        <img width={144} height={144} src={course.image} alt="picture" />
      </div>
      <div className={styles.card__title}>
        <span>{course.name}</span>
      </div>
    </div>
  );
};
