import { useEffect, useState } from "react";
import { fetchQuizData } from "../api/quizService";
import QuizQuestion from "../components/QuizQuestion";
import QuizSummary from "../components/QuizSummary";

const Quiz = () => {
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadQuizData = async () => {
      const data = await fetchQuizData();
      if (data && data.questions.length > 0) {
        setQuestions(data.questions);
      } else {
        console.error("No valid questions found.");
      }
      setLoading(false);
    };

    loadQuizData();
  }, []);

  const handleAnswer = (isCorrect) => {
    if (isCorrect) setScore(score + 4); //for marks add on
    else setScore(score - 1); //for deduction

    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      setQuizCompleted(true);
    }
  };

  return (
    <div className="quiz-container">
      {loading ? (
        <p>Loading quiz...</p>
      ) : !quizCompleted ? (
        questions.length > 0 ? (
          <QuizQuestion
            question={questions[currentQuestionIndex]}
            onAnswer={handleAnswer}
          />
        ) : (
          <p>No valid questions available. Please check API response.</p>
        )
      ) : (
        <QuizSummary score={score} total={questions.length} />
      )}
    </div>
  );
};

export default Quiz;
