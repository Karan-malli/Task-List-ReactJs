import ReacT from 'react';

export const Addtask=({tasklist,settasklist,task, settask})=>{

const handleAdd=(e)=>
{
    e.preventDefault();
    if(task.id)
    {
        const date= new Date();
        const updateList=tasklist.map((todo)=>(
            todo.id===task.id?{
                id:task.id,
                name:e.target.form.task.value,
date:date.toLocaleDateString()+" "+date.toLocaleTimeString()
            }:todo
        ));
        settasklist(updateList);
        settask({});
    }
    else{
           
            const date=new Date();
            const tas={
                id:date.getMilliseconds(),
                name:e.target.form.task.value,
                date:date.toLocaleDateString()+" "+date.toLocaleTimeString()
            };
            settasklist([...tasklist,tas]);
            settask({});
    }
};

    return (
        <section className='addTask'>
        <form>
<div>
    <input type="text" value={task.name|| ""} autoComplete='N' name="task" onChange={e=>settask({...task,name:e.target.value})}/>
    <button type="submit" onClick={handleAdd}>Add</button>
</div>
</form>
</section>
);

};