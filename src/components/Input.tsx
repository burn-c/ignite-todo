import { FC, InputHTMLAttributes } from 'react'

import styles from './Input.module.css'

const Input: FC<InputHTMLAttributes<HTMLInputElement>> = (props) =>{ 
  return (
    <input 
      className={styles.inputWrapper} 
      type="text"
      placeholder='Adicione uma nova tarefa'
      {...props}
    />
  )
}

export default Input