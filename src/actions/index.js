const next = () => {
  return {
    type: "NEXT"
  }
}

const previous = () =>{
  return {
    type : "PREVIOUS"
  }
}

const submit = () => {
  return {
    type : "SUBMIT"
  }
}

export {next, previous, submit}