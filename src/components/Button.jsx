import React from 'react';

const Button = ({children,className, ...rest}) => {
    return (
       <button {...rest} className={`${className}  bg-primary text-white rounded-full p-2 px-5`}>
           {children}
       </button>
    );
};

export default Button;
