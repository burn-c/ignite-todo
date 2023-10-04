import Header from './components/Header'
import Input from './components/Input'
import Task from './components/Task'

import styles from './App.module.css'

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
          <Task 
            id='523h4n89n' 
            taskName='Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.'/>

          <Task 
            id='523h4n89n' 
            taskName='Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.'/>
        </section>

        </main>
      </div>
    </>
  )
}

export default App
