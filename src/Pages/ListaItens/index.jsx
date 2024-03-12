import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Footer from '../../componentes/Footer'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Delete = styled.div`
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

const ListaItens = () => {

    const [deleted, setDeleted] = useState(false);
    const [legos, setLegos] = useState([]);

    useEffect(() => {

        fetch('http://localhost:3001/legos')
            .then(res => res.json())
            .then(res => {
                setLegos(res);
            })
            .catch(error => console.error('Erro ao carregar Legos:', error));
    }, []);


    const handleDelete = async (id) => {
        console.log("DELETE", id)
        try {
            const response = await fetch(`http://localhost:3001/legos/${id}`, {
                method: 'DELETE'
            });

            if (response.ok) {
                setDeleted(true);
                toast.success('Item deletado com sucesso!');
                setTimeout(() => {
                    window.location.reload();
                }, 5000);
            } else {
                console.error('Failed to delete legos');
            }
        } catch (error) {
            console.error('Error deleting legos:', error);
        }
    };


    return (
        <div className="lego-grid">
            {legos.map(lego => (
                <Delete key={lego.id} className="lego-item">
                    <img src={lego.src} alt={lego.nome} className="w-60" />
                    <p className="mr-5">{lego.nome}</p>
                    <button onClick={() => handleDelete(lego.id)}>Deletar</button>                    

                </Delete>
            ))}
            <ToastContainer />
            <Footer />
        </div>
    )
}

export default ListaItens;