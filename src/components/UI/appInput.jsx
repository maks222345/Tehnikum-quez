export const AppInput = ({inputLabel,inputType,inputPlaceholder,id,inputError,value,hasError,isRequired,onChange}) => {
    return (
        <label className={`input-wrapper ${hasError&&"_error"}`} htmlFor={id}>
        {inputLabel}
        <input
          required={isRequired}
          type={inputType}
          name={id}
          id={id}
          placeholder={inputPlaceholder}
          value={value}
          onChange={(e) => onChange(e.target.value)}
        
        />
        {hasError&&<span id="error-message">
          {inputError}
        </span>}
      </label> 
    )
}