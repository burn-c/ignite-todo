import styles from './EmptyTaskList.module.css'

import clipboardIcon from '../assets/clipboard.svg'

export default function EmptyTaskList() {
  return (
    <div className={styles.emptyTaskList}>
      <img src={clipboardIcon} alt="Lista de task vazia." />
      <h1>Você ainda não tem tarefas cadastradas</h1>
      <h2>Crie tarefas e organize seus itens a fazer</h2>
  </div>
  )
}