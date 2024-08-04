import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import QuizContext from "../context/QuizContext";

import { SignedIn, SignOutButton } from "@clerk/clerk-react";

const ResultPage = () => {
  const { correctAnswersCount, wrongAnswersCount, resetQuiz, questions } =
    useContext(QuizContext);
  const totalAnswered = correctAnswersCount + wrongAnswersCount;
  const totalQuestions = questions.length;
  const score = (correctAnswersCount / totalQuestions) * 100;
  const navigate = useNavigate();

  const handlePlayAgain = () => {
    resetQuiz();
    navigate("/");
    window.location.reload();
  };

  return (
    <div className="flex items-center justify-center h-screen bg-[#021b1a]">
      <div className="rounded-2xl p-6 mx-4 max-w-[800px] bg-[#2cc295]">
        <div className="flex flex-col gap-4">
          <div className="p-4 rounded-xl bg-[#2fa98c]  h-[150px] border-2 border-black">
            <p className="text-center">YOUR SCORE</p>
            <p className="text-7xl text-center mt-4 font-black">{score}</p>
          </div>

          <div className="flex gap-2">
            <div className="bg-[#00df81] p-4 rounded-xl w-[125px] h-[125px] border-2 border-black">
              <p className="text-center text-xs">Correct Answer</p>
              <p className="text-5xl text-center mt-4 font-black">
                {correctAnswersCount}
              </p>
            </div>
            <div className="bg-[#DE2200] p-4 rounded-xl w-[125px] h-[125px] border-2 border-black">
              <p className="text-center text-xs">Wrong Answer</p>
              <p className="text-5xl text-center mt-4 font-black">
                {wrongAnswersCount}
              </p>
            </div>
            <div className="bg-[#2fa98c] p-4 rounded-xl w-[125px] h-[125px] border-2 border-black">
              <p className="text-center text-xs">Answered</p>
              <p className="text-3xl text-center mt-5 font-black">
                {totalAnswered}/{totalQuestions}
              </p>
            </div>
          </div>
        </div>
        <div className="flex my-4 justify-between">
          <button
            className="p-4 bg-blue-700 hover:bg-blue-500 rounded-xl border-black border-2 font-bold w-[125px]"
            onClick={handlePlayAgain}
          >
            Play Again
          </button>
          <SignedIn>
            <SignOutButton className="p-4  bg-red-700 hover:bg-red-500 rounded-xl font-bold border-black border-2 w-[125px]">
              Exit
            </SignOutButton>
          </SignedIn>
        </div>
      </div>
    </div>
  );
};

export default ResultPage;
