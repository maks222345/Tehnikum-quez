import React, { useState } from "react";
import { SaleSpan } from "../components/UI/sale";
import { ProgressBar, ProgressIndicator } from "../components/UI/indicatorsBar";
import { AppInput } from "../components/UI/appInput";
import { Button } from "../components/UI/Button";
import { LinkButton } from "../components/UI/linkbtn";

const StepOne = () => {
  const [answerValue, setAnswerValue]=useState("")

  const [answerError, setAnswerError]=useState(false)

  const clickHandler=()=>{
    if (!answerValue) {
      setAnswerError(true)
    }else{
      setAnswerError(false)
    }
  }




  return (
    <div className="container">
      <div className="wrapper">
        <div className="single-input-quiz">
          <div className="indicator">
            <div className="indicator__text">
              
              
            </div>
            <ProgressIndicator currentStep={1}/>
          </div>
          <AppInput
            value={answerValue}
            hasError={answerError}
            inputType="text"
            inputLabel="1.  Занимательный вопрос"
            name="answer"
            inputPlaceholder="Ваш ответ"
            isRequired={true}
            onChange={setAnswerValue}

          />
          <LinkButton onClick={clickHandler} path="/step-two" />
        </div>
      </div>
    </div>
  );
};

export default StepOne;
