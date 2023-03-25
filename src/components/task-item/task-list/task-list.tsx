import React from "react";
import { TaskItemProps } from "../task-item";
import styles from "./task-list.module.css";

export const TaskList: React.FC<TaskItemProps> = ({ task, isSelected }) => {
  const barColor = isSelected
    ? task.styles.backgroundSelectedColor
    : task.styles.backgroundColor;
  const processColor = isSelected
    ? task.styles.progressSelectedColor
    : task.styles.progressColor;
  // const projectWith = task.x2 - task.x1;

  return (
    <g tabIndex={0} className={styles.projectWrapper}>
      {task.barChildren.map((child) =>
        <rect
          fill={barColor}
          x={child.x1}
          width={child.x2 - child.x1}
          y={child.y}
          height={child.height}
          rx={child.barCornerRadius}
          ry={child.barCornerRadius}
          className={styles.projectBackground}
        />
      )}
      {task.barChildren.map((child) =>
        <rect
          x={child.progressX}
          width={child.progressWidth}
          y={child.y}
          height={child.height}
          ry={child.barCornerRadius}
          rx={child.barCornerRadius}
          fill={processColor}
        />
      )}
      {task.barChildren.map((child) =>
        <rect
          fill={barColor}
          x={child.x1}
          width={child.x2 - child.x1}
          y={child.y}
          height={child.height / 2}
          rx={child.barCornerRadius}
          ry={child.barCornerRadius}
          className={styles.projectTop}
        />
      )}
    </g>
  );
};
