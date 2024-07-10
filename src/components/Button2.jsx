import { Link } from "react-router-dom"

Link
function Button2({text, style, type}) {
  return (
    <Link type={type} className={`border2 ${style}`}>{text}</Link>
  )
}

export default Button2