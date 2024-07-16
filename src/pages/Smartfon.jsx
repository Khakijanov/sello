import { useParams } from "react-router-dom"
function Smartfon() {
  const {id} = useParams()
  return (
    <div>Smartfon {id}</div>
  )
}



export default Smartfon