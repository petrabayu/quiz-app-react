import React, { createContext, useEffect, useState } from "react";
import axios from "axios";

const QuizContext = createContext();

export const QuizProvider = ({ children }) => {
  const [questions, setQuestions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [quizCompleted, setQuizCompleted] = useState(false);

  const [correctAnswersCount, setCorrectAnswersCount] = useState(0);
  const [wrongAnswersCount, setWrongAnswersCount] = useState(0);

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  const [timeUp, setTimeUp] = useState(false);
  const [timeLeft, setTimeLeft] = useState(90);

  const fetchQuestions = async () => {
    try {
      const response = await axios.get(
        "https://opentdb.com/api.php?amount=20&category=9&type=multiple"
      );
      setQuestions(response.data.results);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching questions:", error);
      setLoading(false);
    }
  };

  const resetQuiz = async () => {
    setQuestions([]);
    localStorage.removeItem("questions");
    setTimeout(() => {
      setLoading(true);
      fetchQuestions();
      setCorrectAnswersCount(0);
      setWrongAnswersCount(0);
    }, 5000);
  };

  const shuffle = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };

  const decodeHtml = (html) => {
    const txt = document.createElement("textarea");
    txt.innerHTML = html;
    return txt.value;
  };

  const handleCountScore = (isCorrect) => {
    if (isCorrect) {
      setCorrectAnswersCount((prevCount) => (prevCount += 1));
    } else {
      setWrongAnswersCount((prevCount) => (prevCount += 1));
    }

    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      setQuizCompleted(true);
    }
  };

  useEffect(() => {
    const savedTimeLeft = localStorage.getItem("timeLeft");
    if (savedTimeLeft !== null) {
      setTimeLeft(parseInt(savedTimeLeft, 10));
    }

    const timer = setInterval(() => {
      setTimeLeft((prevTime) => {
        if (prevTime <= 1) {
          clearInterval(timer);
          setQuizCompleted(true);
          return 0;
        }
        return prevTime - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    localStorage.setItem("timeLeft", timeLeft);
    if (timeLeft === 0) {
      setQuizCompleted(true);
    }
  }, [timeLeft]);

  return (
    <QuizContext.Provider
      value={{
        questions,
        setQuestions,
        loading,
        setLoading,
        quizCompleted,
        setQuizCompleted,
        shuffle,
        decodeHtml,
        fetchQuestions,
        resetQuiz,
        correctAnswersCount,
        setCorrectAnswersCount,
        wrongAnswersCount,
        setWrongAnswersCount,
        handleCountScore,
        currentQuestionIndex,
        setCurrentQuestionIndex,
        timeUp,
        setTimeUp,
        timeLeft,
        setTimeLeft,
      }}
    >
      {children}
    </QuizContext.Provider>
  );
};

export default QuizContext;
