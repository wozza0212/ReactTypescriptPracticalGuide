const NewGoal = () => {

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log('Submitted');

        new FormData(event.currentTarget)
    }
    return (
        <form onSubmit={handleSubmit} className="new-goal">
            <p>
                <label htmlFor="goal">Your Goal</label>
            <input type="text" id='goal'/>
            </p>
            <p>
                <label htmlFor="summary">Short Summary</label>
                <input type="text" id='summary'/>

            </p>
            <p>
            <button type="submit">Add Goal</button>
            </p>
        </form>
    );
}

export default NewGoal