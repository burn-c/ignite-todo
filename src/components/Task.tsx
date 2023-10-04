import { Trash } from "phosphor-react";

import styles from './Task.module.css'

interface TaskProps {
  id: string;
  taskName: string;
  isCompleted: boolean;
  handleChangeStatusTask(id: string): void;
}

export default function Task({ id, taskName, handleChangeStatusTask, isCompleted }:TaskProps) {
  const handleDeleteTask = () => {}

  const taskCheckedStyle = {
    color: `var(--gray-300)`,
    textDecorationLine: `line-through`
  }

  const checkboxId = `checkbox-${id}`

  return (
    <div 
      className={styles.taskWrapper}  
      {...(isCompleted ? {style: taskCheckedStyle } : null)} 
    >
      <div className={styles.taskInfo}>
        <div className={styles.checkboxContainer}>
          <input 
            type="checkbox" 
            id={checkboxId}
            checked={isCompleted}
            onChange={() => handleChangeStatusTask(id)}
            />
          <label htmlFor={checkboxId} />
        </div>

        {taskName}
      </div>
      
      <button type="button" onClick={handleDeleteTask}>
        <Trash />
      </button>
    </div>
  )
}