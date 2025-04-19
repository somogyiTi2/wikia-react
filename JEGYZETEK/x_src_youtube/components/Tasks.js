import React from 'react'
import { useState } from 'react';
import Task from './Task';

// const tasks = [
//     {
//         id: 1,
//         text: 'Doctors Appointment',
//         day: 'Feb 5th at 2:30pm',
//         reminder: true
//     },
//     {
//         id: 2,
//         text: 'Fogorvos',
//         day: 'March 8th at 5:30pm',
//         reminder: false
//     },
//     {
//         id: 3,
//         text: 'Szülinap',
//         day: 'April 30 at 11:25pm',
//         reminder: true
//     },

// ]

export const Tasks = ({tasks,onDelete, onTagle}) => {
    // const [tasks, setTasks]=useState([
    //         {
    //             id: 1,
    //             text: 'Doctors Appointment',
    //             day: 'Feb 5th at 2:30pm',
    //             reminder: true
    //         },
    //         {
    //             id: 2,
    //             text: 'Fogorvos',
    //             day: 'March 8th at 5:30pm',
    //             reminder: false
    //         },
    //         {
    //             id: 3,
    //             text: 'Szülinap',
    //             day: 'April 30 at 11:25pm',
    //             reminder: true
    //         },
        
    //     ]);

      

    return (
        <>
            {/* {tasks.map((tasks) => (<h3 key={tasks.id}>{tasks.text}</h3>))} */}
            {tasks.map((tasks, index) => (
                <Task key={index} task={tasks} onDelete={onDelete} onTagle={onTagle}/>
            ))}
        </>
    )
    
}
export default Tasks
