import axios from 'axios';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { CardContainer } from './styles';

const Detail = () => {
    const { id } = useParams();
    const [character, setCharacter] = useState({});

    useEffect(() => {
        axios(`http://localhost:3001/rickandmorty/character/${id}`)
        .then(({ data }) => {
           if (data.name) {
              setCharacter(data);
           } else {
              window.alert('No hay personajes con ese ID');
           }
        });
        return setCharacter({});
     }, [id]);
    
    return (
        <CardContainer>
            <h2>{character?.name}</h2>
            <p>{character?.gender}</p>
            <p>{character?.species}</p>
            <p>{character?.origin?.name}</p>
            <p>{character?.status}</p>
            <img src={character?.image} alt={character?.name} />
        </CardContainer>
    )
}

export default Detail;