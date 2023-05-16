import Questions from "./Questions";

function NavBar() {
  let url = "";
  const numberOfQuestions = Questions.questions.length;
  return (
    <>
      <nav className="navbar navbar-dark bg-primary">
        <a className="navbar-brand" href={url}>
          JS Quiz
        </a>
        <div>
          <form className="form-inline my-2 my-lg-0">
            <a className="navbar-brand" href={url}>
              Total Questions: {numberOfQuestions}
            </a>
          </form>
        </div>
      </nav>
    </>
  );
}

export default NavBar;
