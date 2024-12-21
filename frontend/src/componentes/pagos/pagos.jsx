import React, { useState, useEffect } from "react";
import './pagos.css';
import { Link } from "react-router-dom";
import Navbar from "../navbar/navbar";
import Footer from "../footer/footer";
import Img1 from '../../assets/img2/img3.webp'

function Pagos() {
    const [totalPagar, setTotalPagar] = useState(0);
    const [pagos, setPagos] = useState([]);
    const [montos, setMontos] = useState({});
    const [mostrarMas, setMostrarMas] = useState(false);

    useEffect(() => {
        const btnMontoElements = document.querySelectorAll('.btn-monto');
        const agregarPagoElements = document.querySelectorAll('.agregar-pago');
        const realizarPagoButton = document.getElementById('realizar-pago');

        btnMontoElements.forEach(button => {
            button.addEventListener('click', function () {
                const card = button.getAttribute('data-card');
                document.querySelector(`.monto-container-${card}`).style.display = 'block';
            });
        });

        agregarPagoElements.forEach(button => {
            button.addEventListener('click', function () {
                const card = button.getAttribute('data-card');
                const montoInput = document.querySelector(`.monto-input[data-card="${card}"]`);
                const monto = parseFloat(montoInput.value);

                if (!isNaN(monto) && monto > 0) {
                    setMontos(prevMontos => ({ ...prevMontos, [card]: (prevMontos[card] || 0) + monto }));
                    montoInput.value = '';
                }
            });
        });

       
    }, []);

    const agregarAlTotal = (card) => {
        const monto = montos[card];
        if (monto && monto > 0) {
            setTotalPagar(prevTotal => prevTotal + monto);
            setPagos(prevPagos => [...prevPagos, { card, monto }]);
            setMontos(prevMontos => ({ ...prevMontos, [card]: 0 })); // Reseteamos el monto de la card al agregarlo al total
        }
    };

    const eliminarPago = (index) => {
        const montoEliminado = pagos[index].monto;
        setTotalPagar(prevTotal => prevTotal - montoEliminado);
        setPagos(prevPagos => prevPagos.filter((_, i) => i !== index));
    };

    const tarjetas = [1, 2, 3, 4, 5, 6, 7, 8];
    const tarjetasVisible = mostrarMas ? tarjetas : tarjetas.slice(0, 4);

    const sumaMontos = Object.values(montos).reduce((acc, curr) => acc + curr, 0);

    return (
<>
        <Navbar />
<div className="container-fluid mt-5">
<div className="row">
 <div className="col-lg-8 col-md-12">
 <div className="row">
 {tarjetasVisible.map((num) => (
<div className="col-md-6 mb-3" key={num}>
    <div className="card">
    <img src={Img1} className="card-img-top" alt={`Card ${num}`} />
     <div className="card-body text-center">
      <h5 className="card-title">Deudas Activas {num}</h5>
        <button className="btn btn-primary btn-monto" data-card={num}>Agregar Monto</button>
    <div className={`monto-container-${num} mt-3`} style={{ display: 'none' }}>
     <input type="number" className="form-control monto-input" data-card={num} placeholder="Ingrese el monto" />
     <div className="pago-por-card mt-2">Pagará: <span id={`pago-card-${num}`}>{montos[num] || 0}</span></div>
      <button className="btn btn-success mt-2 agregar-pago" data-card={num}>Agregar Monto</button>
     <button className="btn btn-info mt-2" onClick={() => agregarAlTotal(num)}>Agregar al Total</button>
     </div>
    </div>
    </div>
    </div>
    ))}
</div>
<button
className="btn btn-secondary mt-3"
 onClick={() => setMostrarMas(!mostrarMas)}
>
{mostrarMas ? "Mostrar menos" : "Mostrar más"}
</button>
</div>
<div className="col-lg-4 col-md-12">
     <div className="card">
        <div className="card-body">
        <h5 className="card-title">Total</h5>
            <h6>Montos Agregados: {sumaMontos.toFixed(2)}</h6>
            <ul className="list-group mb-3" id="pagos-list">
            {pagos.map((pago, index) => (
            <li key={index} className="list-group-item d-flex justify-content-between align-items-center">
             Monto: {pago.monto.toFixed(2)}
             <button className="btn btn-danger btn-sm" onClick={() => eliminarPago(index)}>Eliminar</button>
              </li>
             ))}
            </ul>
          <h5>Total a Pagar: <span id="total-pagar">{totalPagar.toFixed(2)}</span></h5>
     <Link to="/pagos1" className="footer-link">
    <button id="realizar-pago" className="btn btn-primary mt-3">Realizar Pago</button>
    </Link>
     </div>
    </div>
    </div>
            </div>
        </div>


<Footer />
        </>
    );
}

export default Pagos;