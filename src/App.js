import logo from './logo.svg';
import './App.css';
import { Header } from './components/Header';
import { useEffect, useState } from 'react';
import { Addtask } from './components/Addtask';
import { TaskList } from './components/TaskList';

function App() {
const[tasklist, settasklist]=useState(JSON.parse(localStorage.getItem("tasklist"))|| []);
const[task, settask]=useState({});

useEffect(()=>{
  localStorage.setItem("tasklist",JSON.stringify(tasklist))
},[tasklist]
); 

  return (
    <div className='App gradientOne'>
    <div className="container">
     <Header/>
     <Addtask tasklist={tasklist} settasklist={settasklist} task={task} settask={settask}/>
     <TaskList tasklist={tasklist} settasklist={settasklist} task={task} settask={settask}/>
    </div>
    </div>
  );
}

export default App;
