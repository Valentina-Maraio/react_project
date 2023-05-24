import React, { useState } from 'react';
import './App.css';
import GoalList from './components/GoalList/GoalList';
import NewGoal from './components/NewGoal/NewGoal';

function App() {
  const [courseGoals, setCourseGoals] = useState([
    {
      id: "cg1",
      text: "Finish the course"
    },
    {
      id: "cg2",
      text: "Learn all about the Cours Main Topic"
    },
    {
      id: "cg3",
      text: "Help other students in the course QA"
    }
  ]);

  const addNewGoalHandler = newGoal => {
    //courseGoals.push(newGoal);
    //console.log(courseGoals);

    setCourseGoals((prevCourseGoal) => {
      return prevCourseGoal.concat(newGoal)
    });
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Course Goals!</h1>
        <NewGoal onAddGoal={addNewGoalHandler} />
        <GoalList goals={courseGoals}/>
      </header>
    </div>
  );
}

export default App;
