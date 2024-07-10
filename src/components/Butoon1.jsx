import { Link } from "react-router-dom"

function Butoon1({text, path} ) {
  return (
    <Link to={path} className='border1'>{text}</Link>
  )
}

export default Butoon1