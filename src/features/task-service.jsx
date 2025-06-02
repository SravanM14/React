const TASK_API_BASE = 'http://localhost:5000/tasks'; 


export const getTaskList = async ()=>{
    const respose = await fetch(TASK_API_BASE);
    if(!respose.ok) throw new Error('Failed to Fetch TaskList');
    return respose.json();
}