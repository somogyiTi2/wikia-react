import React from 'react'
import { FaTimes } from 'react-icons/fa'

export const Task = ({ task, onDelete, onTagle }) => {
    return (
        <div className={`task ${task.reminder ? 'reminder': ''}`} 
        style={{ backgroundColor: "lightgray" }} 
        onDoubleClick={() => onTagle(task.id)}>
            <h3>Ez {task.text}
                <FaTimes
                    style={{ color: 'red', cursor: 'pointer' }}
                    onClick={() => onDelete(task.id)}
                /></h3>
            <p>{task.day}</p>
            {/* npm i react-icons */}
        </div>
    )
}

export default Task