import React from 'react';
import Card from './Card';
import { CardsContainer } from './styles';

export default function Cards ({ characters, onClose }) {
   return (
   <CardsContainer>
      {characters.map(({ id, name, status, species, gender, origin, image }) => (
            <Card
               key={id}
               id={id}
               name={name}
               status={status}
               species={species}
               gender={gender}
               origin={origin.name}
               image={image}
               onClose={onClose}
            />
         ))}
   </CardsContainer>
   );
}
