import React from 'react';

import './error-indicator.css';
import icon from'./death-star.png'

type ErrorPropsType = {
    message: string
}
const ErrorIndicator:React.FC<ErrorPropsType> = ({message}) => {
    return (
        <div className="error-indicator">
            <img src={icon} alt="error icon" />
            <span className="boom">BOOM!</span>
            <span>
                {message}
      </span>
            <span>
                (but we already sent droids to fix it)
      </span>
        </div>
    );
};

export default ErrorIndicator;