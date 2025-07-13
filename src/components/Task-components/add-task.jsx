import React, { useState } from 'react';
import './add-task.css'
import { Link } from 'react-router-dom';
import {createTaskSm} from '../../features/task-service';
import { useNavigate } from 'react-router-dom';
function AddTask() {
const navigate = useNavigate();
 const [formData , setformData]= useState({
    title: "",
    disc:"",
    createdOn:"", 
    targetBy:"", 
    priority:1, 
    status:1
 })

const [errors, setErrors] = useState({});

const [submitted, setSubmitted] = useState(false);

const validate = ()=>{
    const newErrors = {};
    if(!formData.createdOn.trim()) newErrors.createdOn = "Creation Date is missing";
    if(!formData.disc.trim()) newErrors.disc = "Discription is missing"
    if(!formData.status) newErrors.status ="status is Mising"
    if(!formData.title.trim()) newErrors.title= " title is missing"
    if(!formData.priority) newErrors.priority = "Priority is missing"
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0;
}

 const handleChange = (e)=>{
    const{name , value} = e.target;
    setformData(pre=> ({...pre, [name]:value}))
 }

 const handleSubmit =(e)=>{
   e.preventDefault();
   if(!validate()) return;
   console.log(formData, "formDatasubmission");
   createTaskSm(formData);
   navigate('/')
 }


 const priorities = ['P1-high', 'P2-Medium', 'P3-low']
    return (
        <div className="container mt-10">
            <form onSubmit={handleSubmit}>
            <div className="row">
                <h3>Create Task</h3>
                <hr />
                <div className="col-6">
                    <div className="mb-3">
                        <label for="exampleFormControlInput1" className="form-label">Task Title</label>
                        <input type="text" name='title' value={formData.title}  onChange={handleChange}
                        className="form-control" id="title" placeholder="Enter Task Title" />
                        {errors.title && <div className="error">{errors.title}</div>}
                    </div>
                    <div className="mb-3">
                        <label for="exampleFormControlTextarea1" className="form-label">Task In Detail</label>
                        <textarea className="form-control" id="Task Detail" name="disc" value={formData.disc} onChange={handleChange} rows="3"></textarea>
                        {errors.disc && <div className="error">{errors.disc}</div>}
                    </div>
                    <div className="mb-3">
                        <label for="exampleFormControlInput1" className="form-label">Creation Date</label>
                        <input type="date" name='createdOn' selected={formData.createdOn} onChange={handleChange} className="form-control" id="title" placeholder="Creation Date" />
                         {errors.createdOn && <div className="error">{errors.createdOn}</div>}
                    </div>

                    <div className="mb-3">
                        <label for="exampleFormControlInput1" className="form-label">Target Completion Date</label>
                        <input type="date" name="targetBy" selected={formData.targetBy} onChange={handleChange} className="form-control" id="title" placeholder="Target Completion Date" />
                    </div>
                </div>
                <div className="col-6">
                    <label for="exampleFormControlInput1" className="form-label">Priority</label>
                    <select className="form-select" aria-label="Default select example"
                    name="priority" value={formData.priority} onChange={handleChange}>
                         <option value="">select Priority</option>
                         {
                            priorities.map(p=>
                          <option key={p} value={p}>{p}</option>
                            )
                         }
                        
                    </select>
                    {errors.priority && <div className="error">{errors.priority}</div>}
                </div>

            </div>

            <div className='flex mt-3'>
                 <button type="submit" className="btn btn-success btn-task">Create</button>
                 <Link to="/" ><button type="button" className="btn btn-danger btn-task">Cancel</button></Link>
            </div>
            </form>
        </div>
    )
}

export default AddTask