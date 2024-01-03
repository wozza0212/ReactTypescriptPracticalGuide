import CourseGoal from "./CourseGoals"
import type { CoarseGoal as CourseGoalProps } from "../App"
import InfoBox from "./infoBox"
import { ReactNode } from "react";

type CourseGoalListProps = {
    goals:
        CourseGoalProps[];
    onDelete: (id: number) => void;

}

const CourseGoalsList = ({goals, onDelete}: CourseGoalListProps) => {
    if (goals.length === 0) {
        return <InfoBox severity="high" mode='warning'>You ahve no course goals yet!</InfoBox>
    }

    let warningBox: ReactNode;

    if (goals.length >= 4) {
        warningBox = (
            <InfoBox mode='warning' severity='high' >You have reached the maximum number of goals!</InfoBox>
        );
    }
    return (
        <>
        {warningBox}
        <ul>
        {goals.map((goal) => (
            <li key={goal.id}>
              <CourseGoal id={goal.id} title={goal.title} onDelete={onDelete}>
                <p>{goal.description}</p>
              </CourseGoal>
            </li>
        ))}
        </ul>
        </>
    )


}

export default CourseGoalsList