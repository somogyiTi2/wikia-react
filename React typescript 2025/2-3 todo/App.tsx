
import goalsImg from './assets/goals.jpg';
import Header from './components/Header';
import { useState } from 'react';
import CourseGoalList from './components/CourseGoalList';
import { CourseGoalType } from './type/CourseGoalType';
import NewGoal from './components/NewGoal';



function App() {

  const [goals, setGoals] = useState<CourseGoalType[]>([])

  function handleAddGoal() {
    setGoals(prevGoals => {
      const newGoal: CourseGoalType = {
        id: Math.random(),
        title: 'Learn React +TS',
        desciption: 'Learn more!'
      }
      return [...prevGoals, newGoal]
    });
  }

  function handelerAddGoal(title: string, desciption: string): void {
    setGoals(prevGoals => [{ id: Math.random(), title, desciption }, ...prevGoals])
  }

  function handleDeleteGoal(id: number) {
    setGoals(prevGoals => prevGoals.filter((goal) => goal.id !== id));
    /*frissítjük az állapotot (bemenő adatokat.filterezzük(majd ahol NEM egyezik meg a store paramére a bejövő paraméterrel))*/
  }

  return (
    <main>
      <Header image={{ src: goalsImg, alt: 'A list of goals' }} >
        <h1>Your Course Goal</h1>
      </Header>
      <NewGoal onAddGoal={handelerAddGoal} />
      {/* <button onClick={handleAddGoal}>+ Add goal</button> */}
      <CourseGoalList goals={goals} onDeletGoal={handleDeleteGoal} />
    </main>
  )
}

export default App
