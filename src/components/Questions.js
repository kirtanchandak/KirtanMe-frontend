import React, { useEffect, useState } from "react";
import data from "../database/data";

function Questions() {
  const [checked, setChecked] = useState(undefined);
  const question = data[0];

  useEffect(() => {
    console.log(question);
  });

  const onSelect = () => {
    console.log("Selected");
  };
  return (
    <div>
      <div className="flex justify-center items-center">
        <h2 className="font-medium text-4xl text-gray-200">
          {question.question}
        </h2>
      </div>
      <div className="flex justify-center items-center py-6 mr-40">
        <ul key={question.id}>
          {question.options.map((q, index) => (
            <li key={index}>
              <input
                id={`q${index}-option`}
                type="radio"
                value={false}
                name="options"
                className="w-4 h-4"
              />
              <label
                htmlFor={`q${index}-option`}
                className="ml-2 font-medium text-gray-200 text-xl"
              >
                {q}
              </label>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Questions;
