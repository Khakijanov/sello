import React from 'react'

function Btn({text, style, type, registerWithGoogle}) {
  return (
    <button onClick={registerWithGoogle} type={type} className={`border2 ${style}`}>{text}</button>
  )
}

export default Btn