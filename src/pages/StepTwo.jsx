import React, { useState } from "react";
import { Heading } from "../components/UI/Heading";
import { ProgressIndicator } from "../components/UI/indicatorsBar";
import { QuestionInput } from "../components/UI/questions";
import { LinkButton } from "../components/UI/linkbtn";

const mockData = [
    {
    variantId : 'variant-1',
    variantText : 'Ответ 1'
  },
    {
    variantId : 'variant-2',
    variantText : 'Ответ 2'
  },
    {
    variantId : 'variant-3',
    variantText : 'Ответ 3'
  },
    {
    variantId : 'variant-4',
    variantText : 'Ответ 4'
  }
]

const StepTwo = () => {

  const [selectedItem, setSelectedItem] = useState(null);

  return (
    <div className="container">
      <div className="wrapper">
        <div className="variants-quiz">
          {/* <div className="indicator">
            <div className="indicator__text">
              <span className="indicator__description">
                Скидка за прохождение опроса:
              </span>
              <span className="indicator__value">15%</span>
            </div>
            <div className="indicator__progressbar">
              <div className="indicator__unit indicator__unit-1 _active"></div>
              <div className="indicator__unit indicator__unit-2"></div>
              <div className="indicator__unit indicator__unit-3"></div>
              <div className="indicator__unit indicator__unit-4"></div>
            </div>
          </div> */}
          <ProgressIndicator />
          <div className="question">
            <Heading HeadingTag="h2" HeadingText="Вопрос номер 2" />
            <ul className="variants">
              {mockData.map((variant) => (
                <QuestionInput 
                key={variant.variantId}
                itemId={variant.variantId}
                itemText={variant.variantText}
                isSelected={selectedItem === variant.variantId}
                onClick={() => setSelectedItem(variant.variantId)}
                
                />
              ))}
              {/* <QuestionInput itemId="variant-1" itemText="Текст ответа 1" />               */}
            </ul>
            <LinkButton path="/step-three" isDisabled={!selectedItem}/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StepTwo;
