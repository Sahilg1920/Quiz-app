const QuizQuestion = ({ question, onAnswer }) => {
    return (
      <div className="question-card">
        <h2>{question.question}</h2>
        <ul>
          {question.options.map((option, index) => (
            <li key={index}>
              <button onClick={() => onAnswer(option.isCorrect)}>
                {option.text}
              </button>
            </li>
          ))}
        </ul>
      </div>
    );
  };
  
  export default QuizQuestion;
  