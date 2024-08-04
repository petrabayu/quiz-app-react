import React, { useState, useEffect } from "react";

const QuizCard = ({
  question,
  answers,
  correctAnswer,
  onAnswer,
  totalQuestions,
  currentQuestionNumber,
  timeLeft,
}) => {
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [showCorrectAnswer, setShowCorrectAnswer] = useState(false);

  const handleAnswerClick = (answer) => {
    const isCorrect = answer === correctAnswer;
    setSelectedAnswer(answer);
    setShowCorrectAnswer(true);
    setTimeout(() => {
      onAnswer(isCorrect);
      setSelectedAnswer(null);
      setShowCorrectAnswer(false);
    }, 500);
  };

  useEffect(() => {
    setSelectedAnswer(null);
  }, [question]);

  const getButtonClass = (answer) => {
    if (!showCorrectAnswer)
      return "border-2 border-[#021b1a] rounded-xl p-2 mb-4 text-lg font-semibold cursor-pointer bg-white w-full text-left hover:bg-gray-500 hover:text-white";
    if (answer === correctAnswer)
      return "border-2 border-[#021b1a] rounded-xl p-2 mb-4 text-lg font-semibold  bg-[#00df81] w-full text-left";
    if (answer === selectedAnswer)
      return "border-2 border-[#021b1a] rounded-xl p-2 mb-4 text-lg font-semibold bg-[#DE2200] w-full text-left";
    return "border-2 border-[#021b1a] rounded-xl p-2 mb-4 text-lg font-semibold  bg-white w-full text-left";
  };

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${minutes}:${secs < 10 ? "0" : ""}${secs}`;
  };

  const decodeHTMLEntities = (text) => {
    const parser = new DOMParser();
    const dom = parser.parseFromString(`<!doctype html><body>${text}`, "text/html");
    return dom.body.textContent;
  };

  return (
    <>
      <div className="flex items-center justify-center h-screen bg-[#021b1a]">
        <div className="rounded-2xl p-8 mx-4 w-full max-w-[600px] min-h-[500px] bg-[#2cc295]">
          <div className="flex justify-between">
            <h1 className="text-2xl font-extrabold  text-gray-900">
              Test Your Trivia
            </h1>
            <div>{formatTime(timeLeft)}</div>
          </div>
          <hr className="my-2 border-2 rounded" />
          <p className="text-3xl leading-tight font-bold my-4">{question}</p>
          <div>
            <ul>
              {answers.map((answer, id) => (
                <li key={id}>
                  <button
                    className={getButtonClass(answer)}
                    onClick={() => handleAnswerClick(answer)}
                    disabled={showCorrectAnswer}
                  >
                    {decodeHTMLEntities(answer)}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          <p>{`Question ${currentQuestionNumber} of ${totalQuestions}`}</p>
        </div>
      </div>
    </>
  );
};

export default QuizCard;
