import React, { useState } from "react";
import { Heading } from "../components/UI/Heading";
import { ListImgItem } from "../components/UI/imgquestion";
import { ProgressIndicator } from "../components/UI/indicatorsBar";
import { LinkButton } from "../components/UI/linkbtn";

const mockData = [
  {
    variantId: 'variant-1',
    variantText: 'Ответ 1',
    variantimg: "./img/laugh.png"
  },
  {
    variantId: 'variant-2',
    variantText: 'Ответ 2',
    variantimg: "./img/smirk.png"
  },
  {
    variantId: 'variant-3',
    variantText: 'Ответ 3',
    variantimg: './img/hearts.png'
  },
  {
    variantId: 'variant-4',
    variantText: 'Ответ 4',
    variantimg: './img/fright.png'
  },
]

const StepThree = () => {
  const [selectedItem, setSelectedItem] = useState(null)

  return (
    <div className="container">
      <div className="wrapper">
        <div className="emoji-quiz">
          <ProgressIndicator />
          <div className="question">
            <Heading headingTag="h2" headingText="3. Занимательный вопрос"/>
            <ul className="emoji-variants">
            {mockData.map((variant) => (
                <ListImgItem 
                key={variant.variantId} 
                itemId={variant.variantId}
                itemText={variant.variantText}
                isSelected={selectedItem === variant.variantId}
                onClick={() => setSelectedItem(variant.variantId)}
                imgsrc={variant.variantimg}
                />
                
              ))}
            </ul>
            <LinkButton 
            path="/step-four" 
            isDisabled={!selectedItem}/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StepThree;
