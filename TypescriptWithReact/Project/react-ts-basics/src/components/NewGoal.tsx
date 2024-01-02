import { useRef } from "react";

type NewGoalPRops = {
    onAddGoal: (goal: string, summary: string) => void;
}

const NewGoal = ({onAddGoal} : NewGoalPRops) => {
  const goal = useRef<HTMLInputElement>(null);
  const summary = useRef<HTMLInputElement>(null);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const enteredGoal = goal.current!.value;
    const enteredSummary = summary.current!.value;
    console.log(`enteredGoal : ${enteredGoal}`);
    console.log(`enteredSummary : ${enteredSummary}`);
    event.currentTarget.reset();
    onAddGoal(enteredGoal, enteredSummary);
  };
  return (
    <form onSubmit={handleSubmit} className="new-goal">
      <p>
        <label htmlFor="goal">Your Goal</label>
        <input type="text" id="goal" ref={goal} />
      </p>
      <p>
        <label htmlFor="summary">Short Summary</label>
        <input type="text" id="summary" ref={summary} />
      </p>
      <p>
        <button type="submit">Add Goal</button>
      </p>
    </form>
  );
};

export default NewGoal;
