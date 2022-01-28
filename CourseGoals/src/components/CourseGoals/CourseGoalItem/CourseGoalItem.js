import "./CourseGoalItem.css";

const CourseGoalItem = (props) => {
  return <li className="goal-item">{props.children}</li>;
};

export default CourseGoalItem;
