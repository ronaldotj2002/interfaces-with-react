import Botao from "../componentes/Botao";
import React, { useState } from 'react';
import Input from "../componentes/Input"


const FormCadastro = () => {

    const [nome, setNome] = useState('');
    const [src, setSrc] = useState('');
    const [valor, setValor] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();
    
        try {
          const response = await fetch('http://localhost:3001/legos', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              nome,
              src,
              valor
            }),
          });
          
          // Verifica se a requisição foi bem-sucedida
          if (response.ok) {
            // Ações após o sucesso do cadastro
            console.log('Cadastro realizado com sucesso!');
            // Limpar campos do formulário após o envio bem-sucedido
            setNome('');
            setSrc('');
            setValor('');
          } else {
            // Ações em caso de erro na requisição
            console.error('Erro ao cadastrar Lego.');
          }
        } catch (error) {
          // Ações em caso de erro na requisição
          console.error('Erro ao cadastrar Lego:', error);
        }
      };
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>
                    Nome:
                    <Input placeholder="Nome do produto"  
                        value={nome} 
                        onChange={(e) => setNome(e.target.value)}
                        required />
                </label>

                <label>
                    ULR da Imagem: 
                    <Input placeholder="Url da imagem" 
                        value={src} 
                        onChange={(e) => setSrc(e.target.value)}
                        required/>
                </label>

                <label>
                    Valor: 
                    <Input placeholder="Valor" 
                        value={valor} 
                        onChange={(e) => setValor(e.target.value)}
                        required
                        />
                    </label>
                <Botao type="submit"> Cadastrar </Botao>
             </form>
        </div>
    )
}

export default FormCadastro