export const SaleSpan = ({className,progressValue,className2}) => {
    return (
        <>
    <span className={className2}>
        Скидка за прохождение опроса:
    </span>
    <span className={className}>{progressValue}</span>
    <div className="indicator__progressbar">
        <div className="indicator__unit indicator__unit-1 _active"></div>
        <div className="indicator__unit indicator__unit-2"></div>
        <div className="indicator__unit indicator__unit-3"></div>
        <div className="indicator__unit indicator__unit-4"></div>
    </div>
    </>
    
        
    )
}
