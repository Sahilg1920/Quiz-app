
import { useNavigate } from "react-router-dom";

const QuizSummary = ({ score, total }) => {
  const navigate = useNavigate();

  return (
    <div className="summary">
      <h1>Quiz Completed!</h1>
      <p>Your Score: {score} / {total}</p>
      <button onClick={() => navigate("/")}>Play Again</button>
    </div>
  );
};

export default QuizSummary;
