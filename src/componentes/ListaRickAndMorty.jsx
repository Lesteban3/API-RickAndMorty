import React, { useEffect, useState } from 'react';
import { getAllCharacters } from '../servicios/RickAndMortyService';
import Modal from './Modal';

function ListaRickAndMorty() {
  const [characters, setCharacters] = useState([]);
  const [selectedCharacter, setSelectedCharacter] = useState(null);
  const apiURL = 'https://rickandmortyapi.com/api/character';

  useEffect(() => {
    async function fetchData() {
      const response = await getAllCharacters(apiURL);
      setCharacters(response.results);
    }
    fetchData();
  }, []);

  const handleCharacterClick = (character) => {
    setSelectedCharacter(character);
  };

  const handleCloseModal = () => {
    setSelectedCharacter(null);
  };

  return (
    <div>
      <h1>Lista de Rick and Morty </h1>
      <ul>
        {characters.slice(0, 20).map((character) => (
          <li key={character.id} onClick={() => handleCharacterClick(character)}>
            <h2>{character.name}</h2>
            <img src={character.image} alt={character.name} width={100} />
          </li>
        ))}
      </ul>
      {selectedCharacter && (
        <Modal character={selectedCharacter} onClose={handleCloseModal} />
      )}
    </div>
  );
}

export default ListaRickAndMorty;
