
import './Pesquisa.css'
import React, { useState, useEffect } from 'react';
import styled from 'styled-components'
import Input from '../Input'

const Container = styled.section `
    color: #FFF;
    text-align: center;
    padding: 85px 0;
    height: 270px;
    width: 100%;
`

const Titulo = styled.h2`
    color: #002F52;
    font-size: 36px;
    text-align: center;
    width: 100%;
`
const Subtitulo = styled.h3`
    color: #002F52;
    font-size: 16px;
    font-weight: 500;
    margin-bottom: 40px;
`

const Pesquisa = () => {

    const [digitado, setDigitado] = useState('')
    const [legos, setLegos] = useState([])

    console.log("PESQUISADO", legos)

    useEffect(() => {
        fetch('http://localhost:3001/legos')
            .then(res => res.json())
            .then(res => {
                setLegos(res);
                
                console.log("RES", res);
            })
            .catch(error => console.error('Erro ao carregar Legos:', error));
    }, []);

    

    return (
        <section className="container m-auto">
            <Container>
                <Titulo>Já sabe por onde começar?</Titulo>
                <Subtitulo>Encontre seu Lego em nossa estante.</Subtitulo>
                <Input placeholder="Escreva sua próxima leitura"
                onBlur={event => {
                    const textoDigitado = event.target.value;
                    const respostaPesquisa = legos.filter( lego => lego.nome.includes(textoDigitado))
                    setLegos(respostaPesquisa)
                }}/>
            </Container>
            <p>{digitado}</p>
        </section>
    )
}


export default Pesquisa