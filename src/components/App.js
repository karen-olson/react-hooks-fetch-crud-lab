import React, { useEffect, useState } from "react";
import AdminNavBar from "./AdminNavBar";
import QuestionForm from "./QuestionForm";
import QuestionList from "./QuestionList";

function App() {
  const [page, setPage] = useState("List");
  const [questions, setQuestions] = useState([]);

  // Make a GET request with useEffect to get the list of questions from http://localhost:4000/questions
  useEffect(() => {
    fetch("http://localhost:4000/questions")
      .then((resp) => resp.json())
      .then((questionData) => setQuestions(questionData));
  }, []);

  function addQuestion(question) {
    setQuestions([...questions, question]);
    console.log(question);
  }

  function deleteQuestion(id) {
    const updatedQuestions = questions.filter((question) => question.id !== id);
    setQuestions(updatedQuestions);
  }

  function updateQuestion(id, updatedIndex) {
    const updatedQuestions = questions.map((question) => {
      if (question.id === id) {
        return {
          ...question,
          correctIndex: updatedIndex,
        };
      } else {
        return question;
      }
    });

    setQuestions(updatedQuestions);
  }

  return (
    <main>
      <AdminNavBar onChangePage={setPage} />
      {page === "Form" ? (
        <QuestionForm addQuestion={addQuestion} />
      ) : (
        <QuestionList
          questions={questions}
          deleteQuestion={deleteQuestion}
          updateQuestion={updateQuestion}
        />
      )}
    </main>
  );
}

export default App;
