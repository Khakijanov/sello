import React from 'react';

function Btn({ text, style, type = "button", onClick }) {
  return (
    <button className={`border2 ${style}`} type={type} onClick={onClick}>
      {text}
    </button>
  );
}

export default Btn;
