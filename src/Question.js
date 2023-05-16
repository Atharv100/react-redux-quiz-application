import React from "react";
import Question_array from "./Questions.json";
import Result from "./Result.js";

import "./style.css";

function Question(props) {
  const answer = React.useRef("");
  const key = React.useRef(1);
  const displayQuestion = Question_array.questions[props.Index];
  // function handleChange(e) {
  //   // console.log(e.target.value);
  // }
  function handleRadio(e) {
    answer.current = e.target.value;
  }
  return (
    <>
      {props.Submit ? (
        <Result />
      ) : (
        <div>
          <h1>{displayQuestion.id + ". " + displayQuestion.question}</h1>
          <form onSubmit={props.handleSubmit}>
            {displayQuestion.options.map((opt, i) => {
              return (
                <div key={key.current++}>
                  <input
                    // key={key.current}
                    type="radio"
                    value={opt}
                    name={"abc" + displayQuestion.id}
                    onChange={handleRadio}
                  />
                  <label>{opt}</label>
                </div>
              );
            })}
            <button
              className="btn btn-success"
              disabled={props.Index === 0}
              value="previous"
              onClick={props.handleClick}
            >
              Previous
            </button>

            {props.Index === Question_array.questions.length - 1 ? (
              <button
                value="submit"
                type="submit"
                className="btn btn-success"
                onClick={(e) => {
                  props.handleNext(answer.current);
                }}
              >
                Submit
              </button>
            ) : (
              <button
                onClick={(e) => {
                  props.handleClick(e);
                  props.handleNext(answer.current);
                }}
                value="next"
                className="btn btn-success"
              >
                Next
              </button>
            )}
          </form>
        </div>
      )}
    </>
  );
}

export default Question;
