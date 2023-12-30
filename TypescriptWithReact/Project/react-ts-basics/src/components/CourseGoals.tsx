import { type ReactNode } from "react"
type CourseGoalProps = {
    id: number,
    title: string,
    children: ReactNode,
    onDelete: (id: number) => void;

}

const CourseGoal = ({id, title, children, onDelete} : CourseGoalProps) => {

    return <article>
        <div>
            <h2>{title}</h2>
            <div>
                {children}
            </div>
        </div>
        <button onClick={() => onDelete(id)}>Delete!</button>
    </article>
}

export default CourseGoal