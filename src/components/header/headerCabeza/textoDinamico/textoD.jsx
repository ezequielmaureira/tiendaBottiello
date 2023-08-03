import './textoD.css'
import { useState, useEffect } from 'react';

const TextoDinamico = () => {

const messages = [
    'Compra en cuotas online sin interés con visa, mastercard',
    'Envío Gratis compras superiores a $ 10.000',
    'Hasta 3 cuotas sin interés en toda la tienda',
  ];

  const [currentMessageIndex, setCurrentMessageIndex] = useState(0);
  const [currentMessage, setCurrentMessage] = useState(messages[currentMessageIndex]);

    useEffect(() => {
   //la funcion useEfectt recibe una fu
   // Cada vez que se monta el componente, se ejecuta este bloque de código.
   
        
        
        
                               //FUNCION SET INTERVAL DE JAVASCRIPT// 
      /* la funcion setInterval(()=>{},3000) recibe una funcion que es la cual se va a producir
      y cada cuanto se va a producir y se lo asigna luego de la coma el 3000.que son milisegundos */
                              
               const interval = setInterval(() => {
    
     
         
                       /*esta es la funcion que recibe el set interval
                       setCurrentMesageIndex, fue la que declaramos arriba que va a actualizar
                       los estados o hooks del index del arreglo de mensajes  */
                       
                       setCurrentMessageIndex((currentMessageIndex) => (currentMessageIndex + 1) % messages.length);
                                                    },
            
            
                              //los milisegundos          
                                     1000);

                     return () => clearInterval(interval);
                  }
        
        
        
        , []);

    
    
    
    
    
    
    
    
    
  useEffect(() => {
    setCurrentMessage(messages[currentMessageIndex]);
  }, [currentMessageIndex]);

  return (
      <div className="links">       
        <ul className="nav-links">
          <li>
            <h1>{currentMessage}</h1>
          </li>
        </ul>
      </div> 
   
  );
};

export default TextoDinamico;