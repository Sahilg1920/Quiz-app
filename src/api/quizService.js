const API_URL = "/quizData.json"; 

export const fetchQuizData = async () => {
  try {
    const response = await fetch(API_URL);
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const data = await response.json();
    console.log("Fetched Data:", data); 

    if (data.questions && Array.isArray(data.questions)) {
      const formattedQuestions = data.questions.map((q) => ({
        question: q.description,
        options: q.options.map((opt) => ({
          text: opt.description,
          isCorrect: opt.is_correct
        }))
      }));

      console.log("Formatted Quiz Data:", formattedQuestions); 
      return { questions: formattedQuestions };
    } else {
      console.error("Invalid local JSON format:", data);
      return { questions: [] };
    }
  } catch (error) {
    console.error("Error loading quiz data:", error);
    return { questions: [] };
  }
};
