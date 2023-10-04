import styles from './Header.module.css'

import todoLogo from '../assets/logo-todo.svg'

export default function Header() {
  return (
    <header className={styles.header}>
      <img src={todoLogo} alt="Logo ToDo" />
    </header>
  )
}