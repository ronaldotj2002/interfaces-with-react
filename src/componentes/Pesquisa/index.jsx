import React, { useState, useEffect } from 'react';
import styled from 'styled-components'
import Input from '../Input'




const Container = styled.section`
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

const Resposta = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 30px 0;
    cursor: pointer;
    border-bottom: 1px solid #999;
    
    p {
        margin-left: 15px
    }

    img {
        width: 250px;
    }


`

const FiltroBusca = ({ data, busca }) => {
    const [filtroData, setFiltroData] = useState([]);

    useEffect(() => {
        const resultadoBusca = data.filter(item => item.nome.toLowerCase().includes(busca.toLowerCase()));
        setFiltroData(resultadoBusca);
    }, [data, busca]);

    if (!busca) {
        return null; // Não exibe resultados se a pesquisa não foi realizada
    }

    return (
        <section className="container m-auto">

            {filtroData.map((item) => (
                <Resposta>
                    <img src={item.src} alt={item.nome} className="w-60"/>
                    <p key={item.id} className="float-left">Nome: {item.nome}</p>
                    
                </Resposta>
            ))}

        </section>
    );
};

const Pesquisa = () => {
    const [legos, setLegos] = useState([]);
    const [busca, setBusca] = useState('');

    useEffect(() => {

        fetch('http://localhost:3001/legos')
            .then(res => res.json())
            .then(res => {
                setLegos(res);
            })
            .catch(error => console.error('Erro ao carregar Legos:', error));
    }, []);

    
    const handleInputChange = event => {
        setBusca(event.target.value);
    };

    return (
        <div className="pb-10">
         
            <section className="container m-auto">
                <Container>
                    <Titulo>Já sabe qual é o seu Lego favorito?</Titulo>
                    <Subtitulo>Encontre seu Lego em nossa estante.</Subtitulo>
                    
                    <div className="w-1/3 m-auto">
                        <Input
                            placeholder="Digite o nome do seu lego favorito" 
                            valor={busca}
                            dadosDigitado={valor => setBusca(valor)}
                            onChange={handleInputChange}
                            />
                    </div>
                  
                </Container>

            </section>
            <div className="mt-28">
                <FiltroBusca data={legos} busca={busca} />
            </div>
        </div>


    );
};

export default Pesquisa;
