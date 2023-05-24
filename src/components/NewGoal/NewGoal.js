import React, {useState} from 'react'

const NewGoal = props => {

   const [input, setInput] = useState('');

    const addGoalHandler = event => {
        event.preventDefault();

        /*dummy goal*/
        const newGoal = {
            id: Math.random().toString(),
            text: input,
        };

        props.onAddGoal(newGoal);


        console.log(newGoal);
    };

    const textChangeHandler = event => {
        setInput(event.target.value);
    }
  return (
    <div>
        <form className='new_goal' onSubmit={addGoalHandler}>
            <input type="text" value={input} onChange={textChangeHandler }/>
            <button type="submit">Add Goal</button>
        </form>
    </div>
  )
}

export default NewGoal