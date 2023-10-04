import { useState } from "react";
import { Trash } from "phosphor-react";

import styles from './Task.module.css'

interface TaskProps {
  id: string;
  taskName: string;
}

export default function Task({ taskName }:TaskProps) {
  const [isChecked, setIsChecked] = useState(false)

  function handleChangeStatusTask() {
    setIsChecked(!isChecked)
  }

  const handleDeleteTask = () => {}

  const taskCheckedStyle = {
    color: `var(--gray-300)`,
    textDecorationLine: `line-through`
  }

  return (
    <div 
      className={styles.taskWrapper}  
      {...(isChecked ? {style: taskCheckedStyle } : null)} 
    >
      <div className={styles.checkboxContainer}>
        <input 
          type="checkbox" 
          id="checkbox" 
          checked={isChecked}
          onChange={handleChangeStatusTask}
        />
        <label htmlFor="checkbox" />
        
      </div>
      {taskName}
      
      <button type="button" onClick={handleDeleteTask}>
        <Trash />
      </button>
    </div>
  )
}