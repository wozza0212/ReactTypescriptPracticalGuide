import "./index.css";
import CourseGoal from "./components/CourseGoals";
import Header from "./components/Header";
import GoalsImg from "./assets/goals.jpg";
import { useState } from "react";

type CoarseGoal = {
  title: string;
  description: string;
  id: number;
};

const App = () => {
  const [goals, setGoals] = useState<CoarseGoal[]>([]);

  const addGoalHandler = () => {
    setGoals((prevGoals) => {
      const newGoal: CoarseGoal = {
        id: Math.random(),
        title: "My new goal",
        description: "My new description in depth",
      };
      return [...prevGoals, newGoal];
    });
  };
  return (
    <main>
      <div>
        <Header image={GoalsImg}>Course Goals</Header>
        <button onClick={addGoalHandler}>Click Me</button>
        {goals.map((goal) => (
          <ul>
            <li key={goal.id}>
              <CourseGoal title={goal.title}>
                <p>{goal.description}</p>
              </CourseGoal>
            </li>
          </ul>
        ))}
      </div>
    </main>
  );
};

export default App;
