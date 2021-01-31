import React from "react";
import "./quiz.css";
import { Button } from "semantic-ui-react";

const QuizPage = () => {
  return (
    <div className="quiz-page-main">
      <div className="title">
        Generate Quiz{" "}
        <Button size="small" color="teal">
          Select Topic Or Document
        </Button>
      </div>
    </div>
  );
};

export default QuizPage;
