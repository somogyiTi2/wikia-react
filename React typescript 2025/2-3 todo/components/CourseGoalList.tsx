import CourseGoal from './CorseGoal'
import { CourseGoalType } from '../type/CourseGoalType'

type CourseGoalListProps = {
    goals: CourseGoalType[]
    onDeletGoal:(id:number)=>void;
}

export default function CourseGoalList({ goals, onDeletGoal }: CourseGoalListProps) {
    
    return (
        <ul>
            {goals.map((goal) => (
                <li key={goal.id}>
                    <CourseGoal title={goal.title} onDelet={onDeletGoal} id={goal.id} >
                        <p>THIS IS THE CHILDREN</p>
                        {goal.desciption}
                    </CourseGoal>
                </li>))}
        </ul>
    )
}
