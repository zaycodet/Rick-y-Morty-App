import { useState } from 'react';
import { SearchBarContainer } from './styles';

export default function SearchBar({ onSearch, addRandomCharacter }) {
   const [id, setId] = useState('');

   const handleChange = (event) => {
      setId(event.target.value)
   }

   return (
      <SearchBarContainer>
         <input type='search' onChange={handleChange} value={id} />
         <button onClick={() => {onSearch(id); setId('')}}>Add</button>
         <button onClick={addRandomCharacter}>Random Add</button>
      </SearchBarContainer>
   );
}