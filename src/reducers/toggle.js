const initialState = {
  index: 0,
  submit: false
};

const toggleQuestion = (state = initialState, action) => {
  switch (action.type) {
    case "NEXT":
      state.index = state.index + 1;
      return state;
    case "PREVIOUS":
      state.index = state.index - 1;
      return state;
    case "SUBMIT":
      state.submit = true;
      return state;
    default:
      return state;
  }
};

export default toggleQuestion;
