import React from "react";
import Header from "./components/Header";
import { useState, useEffect } from 'react';
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; /*npm i react-router-dom*/
import About from "./components/About";

function App() {
  const [showAddTask, setShowAddTask] = useState(false);
  const name = "Tibi";
  const Boolean = false;
  useEffect(() => {
    const getTasks = async () => {
      const tasksFormServer = await fetchTasks()
      setTasks(tasksFormServer)
    }
    /*fetchTasks();*/
    getTasks();
    /* async = asinkron ; await =várjon */


  }, []/*ha szeretnéd valahol futtatni vagy megváltoztatni ezt az értéket akkor itt adhatod át */)

  //feach Tasks
  const fetchTasks = async () => {
    const res = await fetch('http://localhost:5000/tasks')
    const data = await res.json();
    console.log(data)

    return data
  }

  //feach Task
  const fetchTask = async (id) => {
    const res = await fetch(`http://localhost:5000/tasks/${id}`)
    const data = await res.json();
    console.log(data)

    return data
  }

  const [tasks, setTasks] = useState([
    // {
    //   id: 1,
    //   text: 'Doctors Appointment',
    //   day: 'Feb 5th at 2:30pm',
    //   reminder: true
    // },
    // {
    //   id: 2,
    //   text: 'Fogorvos',
    //   day: 'March 8th at 5:30pm',
    //   reminder: false
    //[] // },
    // {
    //   id: 3,
    //   text: 'Szülinap',
    //   day: 'April 30 at 11:25pm',
    //   reminder: true
    // },

  ]);

  //Add Task
  const addTask = async (task) => {
    const res = await fetch('http://localhost:5000/tasks', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(task),
    })
    const data = await res.json()

    setTasks([...tasks, data])
    // console.log(task);
    // const id = Math.floor(Math.random() * 1000) + 1;
    // console.log(id)
    // const newTask = { id, ...task }
    // setTasks([...tasks, newTask])
  }

  //Delete Task
  const deleteTask = async (id) => {

    await fetch(`http://localhost:5000/tasks/${id}`, { method: 'DELETE' })
    console.log('delete', id)
    setTasks(tasks.filter((task) => task.id !== id))
  }

  // Toggle  Reminder
  const toggleReminder = async (id) => {
    const taskToToggle = await fetchTask(id)
    const updTask = { ...taskToToggle, reminder: !taskToToggle.reminder }

    const res = await fetch(`http://localhost:5000/tasks/${id}`, {
      method: 'PUT',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(updTask),
    })

    const data = await res.json()

    console.log("Értesítés be ki kapcsolása " + id)
    setTasks(tasks.map((task) => task.id === id ?
      { ...task, reminder: !task.reminder } : task))
  }

  return (
    <Router>
      
        
       

        <div className='container'>

         
          <Header title={2}
            onAdd={() => setShowAddTask(!showAddTask)}
            showAdd={showAddTask}
          />

          <Routes>
            <Route
              path='/'
              element={
                <>
                  {showAddTask && <AddTask onAdd={addTask} />}
                  {/* Ha showAddTask== igaz csak akkor jelenik meg  */}
                  {tasks.length > 0 ?
                    <Tasks
                      tasks={tasks} onDelete={deleteTask} onTagle={toggleReminder} />
                    : 'No task to show'}
                  {/* ha task hossza 0 nál nagyobb akkor ez ha nem akkor 'No task to show' */}
                  <h1>Hello {name}</h1>
                  <h2>if ciklus {Boolean ? 'Ha igaz' : 'ha nem '}</h2>
             
                  
                </>
              }
            />
            <Route path='/about' element={<About />} />
          </Routes>
          <Footer />
        </div>
    </Router>
  );
}

// class App extends React.Component{
//   render(){
//     return <h1>HELLO WORD </h1>
//   }
// }
export default App;
