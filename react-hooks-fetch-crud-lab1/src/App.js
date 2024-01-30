
//import './App.css';
import React, { useState, useEffect } from "react";
import AdminNavBar from "./components/AdminNavBar";
import QuestionForm from "./components/QuestionForm";
import QuestionList from "./components/QuestionList";

function App() {
  const [page, setPage] = useState("List");
  const [questions, setQuestions] = useState([])
  useEffect(() => {
    fetch("http://localhost:4000/questions")
    .then((r) => r.json())
    .then((data) => {
      setQuestions(data)
      
    });
  }, []);
  return (
    <main>
      <AdminNavBar onChangePage={setPage} />
      {page === "Form" ? <QuestionForm /> : <QuestionList questions={questions}/>}
    </main>
  );
}

export default App;
