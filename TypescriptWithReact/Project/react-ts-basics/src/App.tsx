import "./index.css";
import Header from "./components/Header";
import GoalsImg from "./assets/goals.jpg";
import { useState } from "react";
import CourseGoalsList from "./components/CourseGoalsList";
import NewGoal from "./components/NewGoal";


export type CoarseGoal = {
  title: string;
  description: string;
  id: number;
};

const App = () => {
  const [goals, setGoals] = useState<CoarseGoal[]>([]);

  const addGoalHandler = (goal: string, summary: string) => {
    setGoals((prevGoals) => {
      const newGoal: CoarseGoal = {
        id: Math.random(),
        title: goal,
        description: summary,
      };
      return [...prevGoals, newGoal];
    });
  };

  const deleteGoalHandler = (id: number) => {
    setGoals((prevGoals) => prevGoals.filter((goal) => goal.id !== id))
  }
  return (
    <main>
      <div>
        <Header image={GoalsImg}>Course Goals</Header>
        <NewGoal onAddGoal={addGoalHandler}/>
        <CourseGoalsList goals={goals} onDelete={deleteGoalHandler}/>
      </div>
    </main>
  );
};

export default App;
