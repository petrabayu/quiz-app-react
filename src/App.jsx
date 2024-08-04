import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { QuizProvider } from "./context/QuizContext";

import { SignedIn, SignedOut } from "@clerk/clerk-react";

import QuizPage from "./components/QuizPage";
import HomePage from "./components/HomePage";
import ResultPage from "./components/ResultPage";

function App() {
  return (
    <>
      <main>
        <SignedOut>
          <HomePage />
        </SignedOut>
        <SignedIn>
          <QuizProvider>
            <Router>
              <Routes>
                <Route path="/" element={<QuizPage />} />
                <Route path="/result" element={<ResultPage />} />
              </Routes>
            </Router>
          </QuizProvider>
        </SignedIn>
      </main>
    </>
  );
}

export default App;
