import React from 'react';


export const Button = ({onClick, children}) => {
  return (
    <button className="px-4 py-2 text-white bg-blue-600 rounded-lg hover:bg-blue-300" onClick={onClick}>
      {children}
    </button>
  );
}


