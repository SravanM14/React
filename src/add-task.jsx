import React from 'react';
import './add-task.css'
function AddTask() {
    return (
        <div className="container mt-10">
            <div className="row">
                <h3>Create Task</h3>
                <div className="col-6">
                    <div className="mb-3">
                        <label for="exampleFormControlInput1" className="form-label">Task Title</label>
                        <input type="text" className="form-control" id="title" placeholder="Enter Task Title" />
                    </div>
                    <div className="mb-3">
                        <label for="exampleFormControlTextarea1" className="form-label">Task In Detail</label>
                        <textarea className="form-control" id="Task Detail" rows="3"></textarea>
                    </div>
                    <div className="mb-3">
                        <label for="exampleFormControlInput1" className="form-label">Creation Date</label>
                        <input type="date" className="form-control" id="title" placeholder="Creation Date" />
                    </div>

                    <div className="mb-3">
                        <label for="exampleFormControlInput1" className="form-label">Target Completion Date</label>
                        <input type="date" className="form-control" id="title" placeholder="Target Completion Date" />
                    </div>
                </div>
                <div className="col-6">
                    <label for="exampleFormControlInput1" className="form-label">Priority</label>
                    <select className="form-select" aria-label="Default select example">
                        <option selected>Select the Priority</option>
                        <option value="P1">P1</option>
                        <option value="P2">P2</option>
                        <option value="P3">p3</option>
                    </select>
                </div>

            </div>

            <div className='flex mt-3'>
                 <button type="button" className="btn btn-success btn-task">Create</button>
                 <button type="button" className="btn btn-warning btn-task">Cancel</button>
            </div>
        </div>
    )
}

export default AddTask