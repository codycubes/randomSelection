import React, { useState } from 'react';
import './NamePicker.css';

const names = [
  'Shoki', 'Tshepo', 'Cassius', 'Kamogelo', 'Nqobile',
  'Themba(1) Mthimunye', 'Samukaay', 'Tshegofatso', 'Noluthando', 'Fanelo',
  'Sonnyboy', 'Michael', 'Lwandile', 'Duncan', 'Themba(2) Mtshelwane',
  'Lucy', 'Elizabeth', 'Samuel'
];

export const NamePicker = () => {
    const [selectedName, setSelectedName] = useState('');
    const [remainingNames, setRemainingNames] = useState([...names]);
    const [pickedNames, setPickedNames] = useState([]);
    const [isShuffling, setIsShuffling] = useState(false);
  
    const pickRandomName = () => {
      if (remainingNames.length === 0) return;
  
      setIsShuffling(true);
      const shuffleInterval = setInterval(() => {
        const randomIndex = Math.floor(Math.random() * remainingNames.length);
        setSelectedName(remainingNames[randomIndex]);
      }, 100);
  
      setTimeout(() => {
        clearInterval(shuffleInterval);
        const randomIndex = Math.floor(Math.random() * remainingNames.length);
        const name = remainingNames[randomIndex];
        setSelectedName(name);
        setPickedNames([...pickedNames, name]);
        setRemainingNames(remainingNames.filter(n => n !== name));
        setIsShuffling(false);
      }, 2000);
    };
  
    return (
      <div className="name-picker">
        <h1>Name Picker</h1>
        <button onClick={pickRandomName} disabled={isShuffling || remainingNames.length === 0}>
          {remainingNames.length === 0 ? 'All names picked' : 'Pick a Random Name'}
        </button>
        <div className="display-area">
          {isShuffling ? (
            <p className="shuffling">Shuffling...</p>
          ) : (
            selectedName && <p className="selected-name">{selectedName}</p>
          )}
        </div>
        <div className="picked-names">
          <h2>Picked Names:</h2>
          {pickedNames.length === 0 ? (
            <p>No names picked yet.</p>
          ) : (
            <ul>
              {pickedNames.map(name => (
                <li key={name}>{name}</li>
              ))}
            </ul>
          )}
        </div>
      </div>
    );
  };
