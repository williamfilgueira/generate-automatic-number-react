import React, { useState } from 'react';
import './index.css';

export default function PageHome(){

    const [numeroAleatorio, setNumeroAleatorio] = useState(1);

    function generateAutomaticNumber(){
        const newNumber = Math.floor(Math.random()* (1000-1)+ 1);
        setNumeroAleatorio(newNumber);
    }

    return(
        <div className="container-center">
            <h3>Número aleátorio</h3>
            <h1>{numeroAleatorio}</h1>

            <div className="area-button">
                <label className="text-area">
                    Clique no botão para gera um número aleatório.
                </label>

                <button onClick={ generateAutomaticNumber }>Gerar número</button>
            </div>

        </div>
       
    );
}