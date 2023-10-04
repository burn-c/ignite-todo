import { ChangeEvent, FormEvent, useState } from 'react'
import { v4 as uuidv4 } from 'uuid';

import CreateTaskButton from './components/CreateTaskButton'
import Header from './components/Header'
import Input from './components/Input'
import Task from './components/Task'

import styles from './App.module.css'
import EmptyTaskList from './components/EmptyTaskList'

interface TasksProps {
  id: string | number;
  taskName: string;
}

function App() {
  const [tasks, setTasks] = useState<TasksProps[]>([])
  const [newTaskText, setNewTaskText] = useState('')

  function handleCreateTask(event: FormEvent) {
    event.preventDefault()

    const newTaskId = uuidv4()
    setTasks([...tasks, { id:newTaskId, taskName: newTaskText }])
  }

  function handleNewTaskTextChange(event: ChangeEvent<HTMLInputElement>) {
    setNewTaskText(event.target.value) 
  }

  const isEmptyTaskList = tasks.length === 0 

  return (
    <>
      <Header/>
      
      <div className={styles.wrapper}>
        <main className={styles.content}>
          
        <form onSubmit={handleCreateTask} className={styles.createTaskContent}>
          <Input value={newTaskText} onChange={handleNewTaskTextChange}/>
          <CreateTaskButton/>
        </form>

        <div className={styles.tableTitle}>
          <div>
            <span>Tarefas criadas</span> <span>5</span>
          </div>

          <div>
            <span>Concluídas</span> <span>2 de 5</span>
          </div>
        </div>

        <section>
        {isEmptyTaskList
          ? <EmptyTaskList/> 
          : tasks.map((task) => 
          <Task
            id={task.id}
            key={task.id}
            taskName={task.taskName}
          />
        )}
        </section>

        </main>
      </div>
    </>
  )
}

export default App
