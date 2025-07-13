import { useEffect, useState } from 'react';
import { React } from 'react';
import {editTaskSm} from '../../features/task-service';
import { useParams } from 'react-router-dom';
function ViewTask() {
  const [task , setTask] = useState({});
 const { id } = useParams();
  useEffect(()=>{
     editTaskSm(id)
     .then((t)=> setTask(t))
     .catch(err=> console.log("view task failed",err))
  },{})
    return (
        <div className="container mt-10">
            <div className="card">
                <div className="card-header">
                    <h2 className="card-title">{task?.title}</h2>
                </div>
                <div className="card-body">
                    <p className="card-text">{task?.disc}</p>
                   
                </div>
            </div>
        </div>
    )
}


export default ViewTask;