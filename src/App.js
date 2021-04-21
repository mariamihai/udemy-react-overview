import { useState } from "react";

import CourseGoalList from "./components/CourseGoals/CourseGoalList/CourseGoalList";
import CourseInput from "./components/CourseGoals/CourseInput/CourseInput";

import "./App.css";

const App = () => {
  const [courseGoals, setCourseGoals] = useState([
    { text: "Do all exercises!", id: "g1" },
    { text: "Finish the course!", id: "g2" }
  ]);

  return (
    <div>
      <CourseInput id="goal-form" />
      <CourseGoalList id="goals" goals={courseGoals} />
    </div>
  );
};

export default App;
