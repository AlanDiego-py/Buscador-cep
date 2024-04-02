import React from "react";
import { useStore } from '../store/store';


const CepData = () => {
  const CepData = useStore((state) => state.cepData);
  return (
    <div>
        <h2>Dados do CEP:</h2>
        <p>Logradouro: {CepData.logradouro}</p>
        <p>Bairro: {CepData.bairro}</p>
        <p>Localidade: {CepData.localidade}</p>
        <p>UF: {CepData.uf}</p>
    </div>
  )
}

export default CepData