
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { MyContextProvider } from './context/GlobalContext'

ReactDOM.createRoot(document.getElementById('root')).render(

    <MyContextProvider>
        <App />
    </MyContextProvider>

)
