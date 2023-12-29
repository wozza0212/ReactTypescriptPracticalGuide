import { type ReactNode } from "react"
import Header from "./Header"
import GoalsImg from '../assets/goals.jpg'

type CourseGoalProps = {
    title: string,
    children: ReactNode

}

const CourseGoal = ({title, children} : CourseGoalProps) => {

    return <article>
        <div>
            <Header image={GoalsImg}>
                Course Goals
            </Header>
            <h2>{title}</h2>
            <div>
                {children}
            </div>
        </div>
        <button>Delete!</button>
    </article>
}

export default CourseGoal