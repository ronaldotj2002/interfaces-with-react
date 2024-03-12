import Botao from "../../componentes/Botao";
import React, { useState } from 'react';
import Input from "../../componentes/Input";
import './FormCadastro.css';
import styled from 'styled-components';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Footer from '../../componentes/Footer'

const Titulo = styled.h2`
    color: #002F52;
    font-size: 36px;
    text-align: center;
    width: 100%;
    margin-top: 50px
`


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
          
        
          if (response.ok) {
            toast.success('Cadastro realizado com sucesso!');
          
            console.log('Cadastro realizado com sucesso!');
           
            setNome('');
            setSrc('');
            setValor('');
          } else {
        
            console.error('Erro ao cadastrar Lego.');
          }
        } catch (error) {
         toast.error('Erro ao cadastrar Lego:', error)
          console.error('Erro ao cadastrar Lego:', error);
        }
      };
    return (
      <div>
        <div className="container m-auto">
          <Titulo>Cadastro de Produtos lego</Titulo>
        <section className="flex justify-center mt-20">
            <form onSubmit={handleSubmit} className=" m-auto">
              <Input
                  obrigatorio = {true}
                  placeholder="Digite o Nome do Produto" 
                  label="Produto"
                  valor={nome}
                  dadosDigitado={valor => setNome(valor)}
                  onChange={(e) => setNome(e.target.value)}
                    />

                <Input
                    obrigatorio = {true}
                    placeholder="Digite a URL da Imagem" 
                    label="Imagem"
                    valor={src}
                    dadosDigitado={valor => setSrc(valor)}
                    onChange={(e) => setSrc(e.target.value)}
                  />

                    <Input
                    obrigatorio = {true}
                    placeholder="Digite o Valor" 
                    label="Valor"
                    valor={valor}
                    dadosDigitado={valor => setValor(valor)}
                    onChange={(e) => setValor(e.target.value)}
                  />
                <Botao type="submit"> Cadastrar </Botao>
             </form>
             <ToastContainer />
             </section>
             </div>
             <Footer />
        </div>
    )
}

export default FormCadastro