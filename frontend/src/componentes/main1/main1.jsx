import React, { useState } from "react";
import { Link } from 'react-router-dom';
import './main1.css'

function Main1() {
    const [name, setName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const[comentarios, setComentarios] = useState("")
    
    function getCurrentDateTime() {
        const now = new Date();
        const date = now.toLocaleDateString();
        const time = now.toLocaleTimeString();
        return `${date} ${time}`;
    }

    // Function to get records from localStorage
    function getRecords() {
        return JSON.parse(localStorage.getItem('records')) || [];
    }

    
    function saveRecords(records) {
        localStorage.setItem('records', JSON.stringify(records));
    }

    // Handle form submission
    const handleSubmit = (event) => {
        event.preventDefault();

        const newRecord = {
            name,
            lastName,
            email,
            comentarios,
            timestamp: getCurrentDateTime(),
        };

        const records = getRecords();
        records.push(newRecord);
        saveRecords(records);

        // Reset form fields
        setName("");
        setLastName("");
        setEmail("");
        setComentarios("");
    };

    return (
        <div className="registro">
        <div className="container mt-5">
            <div className="form-container">
                <h2 className="text-center bg-warning p-4">!Tiene dudas o algún problema con el pago comentenos por acá!</h2>
                <form id="registerForm" onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="name" className="form-label">Nombre</label>
                        <input
                            type="text"
                            className="form-control"
                            id="name"
                            placeholder="Ingresa tu nombre"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="lastName" className="form-label">Apellido</label>
                        <input
                            type="text"
                            className="form-control"
                            id="lastName"
                            placeholder="Ingresa tu apellido"
                            value={lastName}
                            onChange={(e) => setLastName(e.target.value)}
                            required
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">Correo</label>
                        <input
                            type="email"
                            className="form-control"
                            id="email"
                            placeholder="Ingresa tu correo"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                      </div>
                  <div className="mb-3">
                  <label htmlFor="comentarios" className="form-label">Comentarios</label>
                 <input
                    type="text"
                    className="form-control"
                    id="commentarios"
                    value={comentarios}
                    onChange={(e) => setComentarios(e.target.value)}
                    placeholder="Escribe tu comentario"
                    required
                />
                    </div>
                    <div className="text-center">
                    <Link to="/main2" className="footer-link">
                    <button type="submit" className="btn btn-warning">Registrar</button>
                    </Link>
                    <Link to="/main" className="footer-link">
                    <a className="btn btn-warning ms-2">Ver Comentarios</a>
                   </Link>
                  
                    </div>
                </form>
            </div>
        </div>

        </div>
    );
}

export default Main1;