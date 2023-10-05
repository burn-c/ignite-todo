import { ChangeEvent, FormEvent, useState } from 'react'
import { v4 as uuidv4 } from 'uuid';

import CreateTaskButton from './components/CreateTaskButton'
import Header from './components/Header'
import Input from './components/Input'
import Task from './components/Task'
import EmptyTaskList from './components/EmptyTaskList'

import styles from './App.module.css'

interface TasksProps {
  id: string;
  taskName: string;
  isCompleted: boolean;
}

function App() {
  const [tasks, setTasks] = useState<TasksProps[]>([])
  const [newTaskText, setNewTaskText] = useState('')

  function handleCreateTask(event: FormEvent) {
    event.preventDefault()

    const newTaskId = uuidv4()
    setTasks([...tasks, { id:newTaskId, taskName: newTaskText, isCompleted: false }])
    setNewTaskText('')
  }

  function handleNewTaskTextChange(event: ChangeEvent<HTMLInputElement>) {
    setNewTaskText(event.target.value) 
  }

  function changeStatusTask(id: string) {
    const updateTaskListStatus = tasks.map(task => {
      if (task.id === id) { 
        return {...task, isCompleted: !task.isCompleted}
      } else { return task}
    })
    setTasks([...updateTaskListStatus])
  }

  const deleteTask = (id: string) => {
    const newListTask = tasks?.filter(task => task.id !== id)

    setTasks([...newListTask])
  }

  const isEmptyTaskList = tasks.length === 0 
  const isEmptyTaskTextInput = newTaskText === ''
  const tasksAmount = tasks.length
  const totalTasksCompleted = tasks?.filter(task => task.isCompleted === true)?.length ?? 0

  return (
    <>
      <Header/>
      
      <div className={styles.wrapper}>
        <main className={styles.content}>
          
        <form onSubmit={handleCreateTask} className={styles.createTaskContent}>
          <Input value={newTaskText} onChange={handleNewTaskTextChange} />
          <CreateTaskButton disabled={isEmptyTaskTextInput}/>
        </form>

        <div className={styles.tableTitle}>
          <div className={styles.tasksCreatedContainer}>
            <span>Tarefas criadas</span> <span>{tasksAmount}</span>
          </div>

          <div className={styles.tasksCompletedStatusContainer}>
            <span>Concluídas</span> 
            <span>
              {isEmptyTaskList 
                ? 0 
                : `${totalTasksCompleted} de ${tasksAmount}`
              }
            </span>
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
            isCompleted={task.isCompleted}
            changeStatusTask={changeStatusTask}
            deleteTask={deleteTask}
          />
        )}
        </section>

        </main>
      </div>
    </>
  )
}

export default App
