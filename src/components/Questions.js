import React, { useState } from "react";

function Questions() {
  const [checked, setChecked] = useState(undefined);
  const onSelect = () => {
    console.log("Selected");
  };
  return (
    <div>
      <div className="flex justify-center items-center">
        <h2 className="font-medium text-2xl text-gray-200">
          Simple Question 1{" "}
        </h2>
      </div>
      <div className="flex justify-center items-center mt-6">
        <ul>
          <li>
            <input
              id="q1-option"
              type="radio"
              value={false}
              name="options"
              class="w-4 h-4 "
            />
            <label
              for="default-radio-1"
              class="ml-2 text-sm font-medium text-gray-200"
            >
              Default radio
            </label>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Questions;
