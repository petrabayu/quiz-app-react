import React from "react";
import { SignedOut, SignInButton } from "@clerk/clerk-react";

const HomePage = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-[#021b1a]">
      <div className="text-center rounded-2xl p-8 mx-4 w-full max-w-[800px]  bg-[#2cc295]">
        <h1 className="text-5xl leading-tight font-bold my-4">QUIZ APP</h1>
        <p>Are you smart enough to answer all the questions ?</p>
        <SignedOut>
          <SignInButton className="p-4 w-96 rounded-lg font-bold my-4 bg-[#03624c] text-white border-black border-2 hover:bg-[#00df81] hover:text-black">
            LOGIN
          </SignInButton>
        </SignedOut>
      </div>
    </div>
  );
};

export default HomePage;
