import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './header'
import AddTask from './add-task'
import TaskList from './list-task'
function App() {
  const [count, setCount] = useState(0)

  return (
   <><Header />
   {/* <AddTask /> */}
   <TaskList/>
   </>
  )
}

export default App
