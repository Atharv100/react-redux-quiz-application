import React from "react";
import Question from "./Question.js";
import { useSelector, useDispatch } from "react-redux";
import { next, previous, submit } from "./actions/index.js";

const DisplayResult = React.createContext(null);

function App() {
  const [index, setIndex] = React.useState(0);
  const [submitQ, setSubmit] = React.useState(false);
  let [answer_array, setAnswerArray] = React.useState([]);
  const dispatch = useDispatch();
  const myState = useSelector((state) => state.toggleQuestion);
  // const handleClick = React.useCallback(
  //   (e) => {
  //     e.target.value === "next" ? setIndex(index + 1) : setIndex(index - 1);
  //     e.preventDefault();
  //   },
  //   [index]
  // );
  const handleClick = (e) => {
    // e.target.value === "next" ? setIndex(index + 1) : setIndex(index - 1);
    e.target.value === "next" ? dispatch(next()) : dispatch(previous());
    setIndex(myState.index);
    e.preventDefault();
  };
  function handleNext(answer) {
    setAnswerArray(
      (prevArray) => [...prevArray, answer]
      // prevArray[index] = answer;
      // console.log(prevArray);
      // return prevArray;
    );
  }
  function handleSubmit(e) {
    dispatch(submit());
    setSubmit(myState.submit);
    e.preventDefault();
  }
  return (
    <>
      <DisplayResult.Provider value={answer_array}>
        <Question
          Index={index}
          Submit={submitQ}
          handleClick={handleClick}
          handleSubmit={handleSubmit}
          handleNext={handleNext}
        />
      </DisplayResult.Provider>
    </>
  );
}

export default App;
export { DisplayResult };
