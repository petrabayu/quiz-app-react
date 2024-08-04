import React, { useContext, useEffect, useState } from "react";
import QuizContext from "../context/QuizContext";

import QuizCard from "./QuizCard";
import { useNavigate } from "react-router-dom";

const QuizPage = () => {
  const {
    questions,
    loading,
    fetchQuestions,
    decodeHtml,
    shuffle,
    quizCompleted,
    handleCountScore,
    setQuestions,
    setLoading,
    currentQuestionIndex,
    timeLeft,
    timeUp,
  } = useContext(QuizContext);

  const [shuffledAnswers, setShuffledAnswers] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    if (!localStorage.getItem("questions")) {
      fetchQuestions();
    } else {
      setQuestions(JSON.parse(localStorage.getItem("questions")));
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    if (questions.length > 0) {
      localStorage.setItem("questions", JSON.stringify(questions));
    }
  }, [questions]);

  useEffect(() => {
    if (quizCompleted) {
      navigate("/result");
    }
  }, [quizCompleted, navigate]);

  useEffect(() => {
    if (questions.length > 0) {
      const currentQuestion = questions[currentQuestionIndex];
      const answers = [
        ...currentQuestion.incorrect_answers,
        currentQuestion.correct_answer,
      ];
      setShuffledAnswers(shuffle(answers));
    }
  }, [questions, currentQuestionIndex]);

  const handleAnswer = (isCorrect) => {
    handleCountScore(isCorrect);
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen bg-[#021b1a]">
        <p className="text-center text-3xl text-white">Loading...</p>
      </div>
    );
  }

  const currentQuestion = questions[currentQuestionIndex];
  const decodedQuestion = decodeHtml(currentQuestion.question);

  return (
    <>
      <div>
        {!timeUp && (
          <QuizCard
            question={decodedQuestion}
            answers={shuffledAnswers}
            correctAnswer={decodeHtml(currentQuestion.correct_answer)}
            onAnswer={handleAnswer}
            totalQuestions={questions.length}
            currentQuestionNumber={currentQuestionIndex + 1}
            timeLeft={timeLeft}
          />
        )}
      </div>
    </>
  );
};

export default QuizPage;
