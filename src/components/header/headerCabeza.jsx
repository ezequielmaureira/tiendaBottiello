import Links from './headerCabeza/Links/links'
import TextoD from './headerCabeza/textoDinamico/textoD'
import './headerCabeza.css'
const HeaderCabeza = () => {



    return (
    
       <div className=' container-fluid headerCabeza'>

    
      <Links/>
     
      <TextoD /> 
    </div> 
        )


}
    export default HeaderCabeza;
