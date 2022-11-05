import {useState} from 'react'


const AddTask = ({onAdd}) => {

  const [text, setText] = useState('')
  const [day, setDay] = useState('')
  const [reminder, setReminder] = useState(false)
  
  const onSubmit = (e) => {
    e.preventDefault()
    if(!text){
      alert('Please, take a text')
      return
    }
    onAdd({text,day,reminder})
    setText('')
    setDay('')
    setReminder(false)
  }

  return (
    <form className='add-form' onSubmit={onSubmit}>
        <div className='form-control'>
            <label>Task</label>
            <input type='text' placeholder="Add Task" 
            value={text} onChange={(e)=>setText(e.target.value)}></input>
        </div>
        <div className='form-control'>
            <label>Day and Time</label>
            <input type='text' placeholder="Add Day and Time"
            value={day} onChange={(e)=>setDay(e.target.value)}></input>
        </div>
        <div className='form-control form-control-check'>
            <label>Set Reminder</label>
            <input type='checkbox'
            checked={reminder}
             value={reminder} onChange={(e)=>setReminder(e.currentTarget.checked)}></input>
        </div>
        <input type='submit' value='Save Task' className="btn btn-block"/>

    </form>
  )
  // A chromba a componentsbe ha az addtask-ra kattintunk látjuk, hogy a value hogy változik a value és a onChange-nek köszönhetően
}
export default AddTask
