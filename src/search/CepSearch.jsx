import React, {useState} from "react";
import { useStore } from '../store/store';



const CepSearch = () => {
    const [cep, setCep] = useState('')
    const setCepData = useStore((state)=> state.setCepData)

    const handleSearch = async () => {
        if (cep.length !== 8) {
            alert('Por favor, insira um CEP válido com 8 dígitos.');
            return;
        }
      
        try {
            const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
            const data = await response.json();
      
            // Verifica se o CEP existe
            if (data.erro) {
              alert('CEP não encontrado.');
              setCepData({}); // Limpa os dados do CEP
            } else {
              setCepData(data);
            }
        } catch (error) {
            console.error('Erro ao buscar CEP:', error);
            alert('Erro ao buscar CEP. Por favor, tente novamente.');
        }
    }
  return (
    <div>
        <input 
        type="text"
        value={cep}
        onChange={(e)=>setCep(e.target.value)}
        placeholder="Digite o CEP"
        maxLength={8}
        />
        <button onClick={handleSearch}>Buscar</button>
    </div>
  )
}

export default CepSearch