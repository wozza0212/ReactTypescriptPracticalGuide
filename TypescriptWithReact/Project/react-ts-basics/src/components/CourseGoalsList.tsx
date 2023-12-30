import CourseGoal from "./CourseGoals"
import type { CoarseGoal as CourseGoalProps } from "../App"
type CourseGoalListProps = {
    goals:
        CourseGoalProps[];
    onDelete: (id: number) => void;

}

const CourseGoalsList = ({goals, onDelete}: CourseGoalListProps) => {
    return (
        <ul>
        {goals.map((goal) => (
          
            <li key={goal.id}>
              <CourseGoal id={goal.id} title={goal.title} onDelete={onDelete}>
                <p>{goal.description}</p>
              </CourseGoal>
            </li>
        ))}
        </ul>
    )


}

export default CourseGoalsList