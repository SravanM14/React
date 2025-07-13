import { React, useEffect, useState } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import { getTaskList } from '../../features/task-service';
import './list-task.css'
function TaskList() {

  const [taskList, settaskList] = useState([])

  useEffect(() => {
    getTaskList()
      .then(data => settaskList(data))
      .catch(err => console.log(err))
  },[])

  return (<div className='container mt-3'>
    <h3 className='mb3'>Task List</h3>
    <hr />
    <div align="right" className='mb-4'>
    <Link to="/create" > <button type="button" className="btn btn-success">Create New Task</button></Link>
    </div>
    <table className="table">
      <thead>
        <tr>
          <th scope="col">Task Id</th>
          <th scope="col">Title</th>
          <th scope="col">Created On</th>
          <th scope="col">Target Date</th>
          <th scope="col">Status</th>
          <th scope="col">View</th>
          <th scope="col">Edit</th>
        </tr>
      </thead>
      <tbody>
          {
            taskList.map(task => (
              <tr>
                <td key={task.id}>{task.id}</td>
                <td>{task.title}</td>
                <td>{task.createdOn}</td>
                <td>{task.targetBy}</td>
                <td>{task.status}</td>
                <td><Link to={`view/${task.id}`} ><button  className="btn btn-info">View</button></Link></td>
                <td><Link to="/create" ><button type="button" className="btn btn-warning">Edit</button></Link></td>
              </tr>
            ))
            
          }

  
      </tbody>
    </table>
  </div>
  )
}

export default TaskList;