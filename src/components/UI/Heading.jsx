import React from "react"


export const Heading = ({ HeadingText, HeadingTag}) => {

    const HeadingH1 = () => {
        switch (HeadingTag) {
            case 'h1':
                return <h1>{HeadingText}</h1>;
            case 'h2':
                return <h2>{HeadingText}</h2>
            case 'h3':
                return <h3>{HeadingText}</h3>
            case 'h4':
                return <h4>{HeadingText}</h4>
            default:
                return <h1>{HeadingText}</h1>
        }
    }

    return HeadingH1()
}

