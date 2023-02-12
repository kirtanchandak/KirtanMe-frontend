import React, { useRef } from "react";
import { Link } from "react-router-dom";

function Main() {
  const inpurRef = useRef(null);
  return (
    <div>
      <div className="container ">
        <h1 class="mb-4 text-3xl font-extrabold  dark:text-white md:text-5xl lg:text-7xl text-center mt-5">
          <span class="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">
            KirtanMe
          </span>
        </h1>
        <p className="text-center font-semibold text-gray-200 text-xl">
          You know me right, let's test!
        </p>

        <form id="form" className="text-center mt-10">
          <input
            type="text"
            placeholder="Username*"
            ref={inpurRef}
            className="p-1 rounded-md border-2 border-gray-200 focus:outline-none focus:ring-2 focus:border-transparent"
          />
        </form>
        <div className="start text-center mt-3">
          <button className="bg-yellow-300 p-2 rounded-lg hover:bg-gray-200">
            <Link to={"quiz"}>Start Quiz</Link>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Main;
