import { PlusCircle } from 'phosphor-react'

import styles from './CreateTaskButton.module.css'

export default function CreateTaskButton() {
  return (
    <button type='submit' className={styles.createTaskButton}>
      Criar
      <PlusCircle size={18} weight='bold'/>
    </button>
  )
}