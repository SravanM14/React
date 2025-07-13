const TASK_API_BASE = 'http://localhost:5000/tasks'; 


export const getTaskList = async ()=>{
    const respose = await fetch(TASK_API_BASE);
    if(!respose.ok) throw new Error('Failed to Fetch TaskList');
    return respose.json();
}


export const createTaskSm = async(data)=>{
    const res = await fetch(TASK_API_BASE, {
        method:"Post",
         headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    })
    return res.json();
}


export const editTaskSm= async(id)=>{
    const res = await fetch(`${TASK_API_BASE}/${id}`);
   //  if(!respose.ok) throw new Error('Failed to Fetch TaskList');
    return res.json();
}