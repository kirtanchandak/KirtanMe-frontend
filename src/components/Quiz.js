import React from "react";
import Questions from "./Questions";

function Quiz() {
  const onNext = () => {
    console.log("Next");
  };

  const onPrev = () => {
    console.log("Prev");
  };

  return (
    <div className="container">
      <h1 className="mb-4 text-3xl font-extrabold  dark:text-white md:text-5xl lg:text-7xl text-center mt-5">
        <span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">
          KirtanMe
        </span>
      </h1>
      <Questions />
      <div className="flex justify-center items-center sm:space-x-96">
        <button
          className="bg-yellow-300 px-3 py-1 rounded-sm hover:bg-gray-200"
          onClick={onPrev}
        >
          Prev
        </button>
        <button
          className="bg-yellow-300 px-3 py-1 rounded-sm hover:bg-gray-200"
          onClick={onNext}
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default Quiz;
