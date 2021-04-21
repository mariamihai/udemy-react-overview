import "./CourseGoalList.css";

import CourseGoalItem from "../CourseGoalItem/CourseGoalItem";

const CourseGoalList = (props) => {
  const goalList = props.goals.map((goal) => (
    <CourseGoalItem key={goal.id}>{goal.text}</CourseGoalItem>
  ));

  return <ul className="goal-list">{goalList}</ul>;
};

export default CourseGoalList;
