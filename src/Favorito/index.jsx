import React, { useEffect, useState } from 'react';
import styled from 'styled-components'


const NovidadesLego = styled.div`
    margin-top: 30px;
    display: block;
    width: 100%;
    justify-content: center;
    cursor: pointer;
    

    img {
        width: 200px;
        float: left;
        margin: 20px 10px;
    }


`

const Titulo = styled.h1`
    width: 100%;
    padding: 30px 0;
    color: #536868;
    font-size: 36px;
    text-align: center;
    margin: 0;
`



const Favorito = () => {

  const [legos, setLegos] = useState([]);
      
  useEffect(() => {
 
      fetch('http://localhost:3001/favoritos')
          .then(res => res.json())
          .then(res => {
              setLegos(res);
          })
          .catch(error => console.error('Erro ao carregar Legos:', error));
  }, []);

  return (
      <div className='container m-auto'>
         
          <Titulo>Meus Legos Favoritos</Titulo>
    

       {legos.map((item) => (
       
           <NovidadesLego>   
                  <img src={item.src} alt={item.nome} className='' />  
                  <p>{item.nome}</p>                  
          </NovidadesLego>

      ))}
      </div>                 
         
 

)
}

export default Favorito