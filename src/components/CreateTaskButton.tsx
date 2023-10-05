import { ButtonHTMLAttributes, FC } from 'react'
import { PlusCircle } from 'phosphor-react'

import styles from './CreateTaskButton.module.css'

const CreateTaskButton: FC<ButtonHTMLAttributes<HTMLButtonElement>> = (props) => {
  return (
    <button type='submit' className={styles.createTaskButton} {...props}>
      Criar
      <PlusCircle size={18} weight='bold'/>
    </button>
  )
}

export default CreateTaskButton