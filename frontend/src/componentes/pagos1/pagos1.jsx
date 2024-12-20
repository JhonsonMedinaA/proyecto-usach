import React from "react";
import Servi1 from '../../assets/img2/servi1.png';
import { Link } from "react-router-dom";

 
function Pagos1 (){

    return(

<>
<header className="fondoCompleto h-100">
<div className="card mb-3 p-5  fondo" >
<div className="card mb-3 p-5 mt-5 bg-warning" >
<div className="card mb-3 p-5 mt-5" >
  <div className="row g-0 ">
    <div className="col-md-4">
    <img src={Servi1} alt=""  />
    </div>
    <div className="col-md-8">
      <div className="card-body">
        <h5 className="card-title text-center">GRACIAS POR TU PAGO</h5>
        <h5 className="card-title text-center">FELIZ NAVIDAD</h5>
       
        <Link to="/main" className="footer-link">
        <div className="text-center">
        <button type="button" className="btn btn-warning mt-4 p-2 ">
         Regresar
        </button>
        </div>
        </Link>
                  
        
        
      </div>
    </div>
  </div>
</div>
</div>
</div>

</header>
</>

    )
}

export default Pagos1;