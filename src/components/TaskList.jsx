import React from 'react'

export const TaskList = ({tasklist, settasklist, task, settask}) => {

    const handleDelete=(id)=>{
       const utasklist= tasklist.filter((tsk)=> tsk.id!=id);
       settasklist(utasklist);
    }

    const handleEdit=(id)=>{
        const val=tasklist.find((task)=>task.id===id);
        settask(val);
    };

  return (
    <section className="showTask">
        <p className="head">
            <span>
                <span className="title">Todo</span>
                <span className="count">{tasklist.length}</span>
            </span>
                <span className="clearAll" onClick={()=>settasklist([])}>Clear All</span>
        </p>
        <ul>
            {
                tasklist.map((task)=>(
                    <li key={task.id}>
                        <p>{task.name}</p>
                        <p>{task.date}</p>
                        <i onClick={()=>{handleEdit(task.id)}} className='bi bi-pencil-square'></i>
                        <i onClick={()=>{handleDelete(task.id)}} className='bi bi-trash'></i>
                    </li>
                ))
                }
        </ul>
        </section>
  )
}
