import React, { useState } from 'react';
import './add-task.css'
function AddTask() {

 const [formData , setformData]= useState({
    title: "",
    disc:"",
    createdOn:"", 
    targetBy:"", 
    priority:1, 
    status:1
 })
 const [submitted, setSubmitted] = useState(false);

 const handleChange = (e)=>{
    const{name , value} = e.target;
    setformData(pre=> ({...pre, [name]:value}))
 }

 const handleSubmit =(e)=>{
   e.preventDefault();
   console.log(formData, "formDatasubmission")
 }


 const priorities = ['P1-high', 'P2-Medium', 'P3-low']
    return (
        <div className="container mt-10">
            <form onSubmit={handleSubmit}>
            <div className="row">
                <h3>Create Task</h3>
                <div className="col-6">
                    <div className="mb-3">
                        <label for="exampleFormControlInput1" className="form-label">Task Title</label>
                        <input type="text" name='title' value={formData.title}  onChange={handleChange}
                        className="form-control" id="title" placeholder="Enter Task Title" />
                    </div>
                    <div className="mb-3">
                        <label for="exampleFormControlTextarea1" className="form-label">Task In Detail</label>
                        <textarea className="form-control" id="Task Detail" name="disc" value={formData.disc} onChange={handleChange} rows="3"></textarea>
                    </div>
                    <div className="mb-3">
                        <label for="exampleFormControlInput1" className="form-label">Creation Date</label>
                        <input type="date" name='createdOn' selected={formData.createdOn} onChange={handleChange} className="form-control" id="title" placeholder="Creation Date" />
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
                </div>

            </div>

            <div className='flex mt-3'>
                 <button type="submit" className="btn btn-success btn-task">Create</button>
                 <button type="button" className="btn btn-danger btn-task">Cancel</button>
            </div>
            </form>
        </div>
    )
}

export default AddTask