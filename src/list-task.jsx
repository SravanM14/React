import React from 'react';

function TaskList(){
    return(<div className='container mt-3'>
        <h3 className='mb3'>Task List</h3>
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
    <tr>
      <th scope="row">1</th>
      <td>Title 1</td>
      <td>12/05/2025</td>
      <td>01/06/2025</td>
     <td scope="col">Inprogress</td>
      <td><button type="button">View</button></td>
      <td><button type="button">Edit</button></td>
    </tr>
     <tr>
      <th scope="row">2</th>
      <td>Title 2</td>
      <td>12/05/2025</td>
      <td>01/06/2025</td>
      <td scope="col">Pending</td>
      <td><button type="button">View</button></td>
      <td><button type="button">Edit</button></td>
    </tr>
     <tr>
      <th scope="row">3</th>
      <td>Title 3</td>
      <td>12/05/2025</td>
      <td>01/06/2025</td>
      <td scope="col">Done</td>
      <td><button type="button">View</button></td>
      <td><button type="button">Edit</button></td>
    </tr>
  </tbody>
</table>
</div>
    )
}

export default TaskList;