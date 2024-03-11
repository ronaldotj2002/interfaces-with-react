import Botao from "../componentes/Botao";
import React, { useState } from 'react';
import Input from "../componentes/Input"


const FormCadastro = () => {

    const [nome, setNome] = useState('');
    const [valor, setValor] = useState('');
    const [urlDaImagem, setUrlDaImagem] = useState('');

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
              valor,
              urlDaImagem,
            }),
          });
          
          // Verifica se a requisição foi bem-sucedida
          if (response.ok) {
            // Ações após o sucesso do cadastro
            console.log('Cadastro realizado com sucesso!');
            // Limpar campos do formulário após o envio bem-sucedido
            setNome('');
            setValor('');
            setUrlDaImagem('');
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
                    Valor: 
                    <Input placeholder="Url da imagem" 
                        value={valor} 
                        onChange={(e) => setValor(e.target.value)}
                        required/>
                </label>

                <label>
                    <Input placeholder="Valor" 
                        value={urlDaImagem} 
                        onChange={(e) => setUrlDaImagem(e.target.value)}
                        required
                        />
                    </label>
                <Botao type="submit"> Cadastrar </Botao>
             </form>
        </div>
    )
}

export default FormCadastro