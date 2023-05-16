import React from "react";
import { DisplayResult } from "./App";
import Questions from "./Questions.json";

export default function Result() {
  //calculate resluts by passign props from questio.js and compare with json asnwers using reduce()
  const answer_array = React.useContext(DisplayResult);
  let marks_obtained = 0;
  console.log(answer_array);
  Questions.questions.map((ans, index) => {
    if (ans.answer === answer_array[index]) marks_obtained += 1;
    return marks_obtained;
  });
  return <h1>Result: {marks_obtained}/10</h1>;
}
