import './App.css';
import React, { useState } from 'react';

import Form from './components/Form';
import CharSheet from './components/CharSheet';

function App() {

  const [charLevel, setCharLevel] = useState(1);
  const [charRace, setCharRace] = useState("Dragonborn");
  const [charClass, setCharClass] = useState("Barbarian");
  const [toggleCharSheet, setToggleCharSheet] = useState(false);

  return (
    <div className="App">
    <header>
      <h1>VentureGen</h1>
      <p>Dungeons & Dragons character creation made easy!</p>
    </header>
      <Form
        charLevel={charLevel}
        setCharLevel={setCharLevel}
        charRace={charRace}
        setCharRace={setCharRace}
        charClass={charClass}
        setCharClass={setCharClass}
        setToggleCharSheet={setToggleCharSheet}
      />
      {toggleCharSheet ? 
      <CharSheet 
        charLevel={charLevel}
        charRace={charRace}
        charClass={charClass}
      /> 
      : 
      null}
    </div>
  );
}

export default App;
