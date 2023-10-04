import styles from './App.module.css'
import Header from './components/Header'

function App() {
  return (
    <>
      <Header/>
      
      <div className={styles.wrapper}>
        Content
      </div>
    </>
  )
}

export default App
