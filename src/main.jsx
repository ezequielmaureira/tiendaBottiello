import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import TextoDinamico from './components/header/headerCabeza/textoDinamico/textoD'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <TextoDinamico />
    <div className="alert alert-primary" role="alert">
  A simple primary alert—check it out!
   </div>
  


    
  </React.StrictMode>,
)
