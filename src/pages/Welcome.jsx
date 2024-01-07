import React, { useState } from "react";
import { Heading } from "../components/UI/Heading";
import { Button } from "../components/UI/Button";
import { AppInput } from "../components/UI/appInput";
import { useNavigate } from "react-router-dom";

const Welcome = () => {
  const [nameValue, setNameValue]=useState("")
  const [phoneValue, setPhoneValue]=useState("")


  const [nameError, setNameError] = useState(false)
  const [phoneError, setPhoneError] = useState(false)

  const navigate =useNavigate()
  const goToNextPage = () => {nameValue&&phoneValue ? navigate("/step-one") : navigate("/")
    
  }

  const clickHandler=()=> {
    if (!nameValue) {
      setNameError(true)
    }else{
      setNameError(false)
    }
    if (!phoneValue) {
      setPhoneError(true)
    }else{
      setPhoneError(false)
    }
    goToNextPage()
  }



  return (
    <div className="container">
      <div className="wrapper">
        <div className="welcome">
          <Heading HeadingText="Добро пожаловать в квиз от лучшего учебного центра"/>
          <form className="welcome__form">

            <AppInput
             hasError={nameError}
             value={nameValue}
             inputType="text"
             inputLabel="Ваше имя"
             id="username"
             inputPlaceholder="Ваш ответ"
             isRequired={true}
             onChange={setNameValue}/>

            <AppInput
             hasError={phoneError}
             inputType="tel"
             inputLabel="Ваш номер"
             id="phone"
             inputPlaceholder="+998 9- --- -- --" 
             isRequired={true}
             value={phoneValue}
             onChange={setPhoneValue}/>

            <Button
            buttonText="Далее"
            buttonType="submit"
            isDisabled={false}
            onClick={clickHandler}/>
          </form>
        </div>
      </div>
    </div>

    



    
  );
};

export default Welcome;
