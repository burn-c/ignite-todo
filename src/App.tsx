import { Trash } from 'phosphor-react'

import styles from './App.module.css'
import Header from './components/Header'
import Input from './components/Input'

function App() {
  return (
    <>
      <Header/>
      
      <div className={styles.wrapper}>
        <main className={styles.content}>
          
        <div className={styles.createTaskContent}>
          <Input/>
        </div>

        <div className={styles.tableTitle}>
          <div>
            <span>Tarefas criadas</span> <span>5</span>
          </div>

          <div>
            <span>Concluídas</span> <span>2 de 5</span>
          </div>
        </div>

        <section>
          <div>
            <input type="checkbox" name="task" id="task" />
            Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.
            <button type="button">
              <Trash/>
            </button>
          </div>
        </section>

        </main>
      </div>
    </>
  )
}

export default App
