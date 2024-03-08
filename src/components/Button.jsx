import React from 'react';

const Button = ({children,className}) => {
    return (
       <button className={`${className}  bg-primary text-white rounded-full p-2 px-5`}>
           {children}
       </button>
    );
};

export default Button;
