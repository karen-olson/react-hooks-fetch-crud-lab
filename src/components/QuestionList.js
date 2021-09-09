import React from "react";
import QuestionItem from "./QuestionItem";

function QuestionList({ questions, deleteQuestion, updateQuestion }) {
  const questionsToDisplay = questions.map((question) => (
    <QuestionItem
      question={question}
      key={question.id}
      deleteQuestion={deleteQuestion}
      updateQuestion={updateQuestion}
    />
  ));

  return (
    <section>
      <h1>Quiz Questions</h1>
      <ul>{questionsToDisplay}</ul>
    </section>
  );
}

export default QuestionList;
