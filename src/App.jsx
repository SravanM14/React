import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/header'
import TaskList from './components/Task-components/list-task';
import AddTask from './components/Task-components/add-task';
import { Routes, Route, Link } from 'react-router-dom';
import ViewTask from './components/Task-components/view-task'

function App() {


  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<TaskList/>}></Route>
        <Route path="/create" element={<AddTask/>}></Route>
        <Route path="/view/:id" element={<ViewTask/>}></Route>
      </Routes>


    </>
  )
}

export default App
