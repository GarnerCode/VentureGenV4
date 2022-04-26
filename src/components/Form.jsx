import React, { useState } from 'react'


const Form = ({charLevel, setCharLevel, charRace, setCharRace, charClass, setCharClass, setToggleCharSheet}) => {

  // Local state used to prevent already generated character stats from changing as input values are changed
  const [localLevel, setLocalLevel] = useState(1);
  const [localRace, setLocalRace] = useState("dragonborn");
  const [localClass, setLocalClass] = useState("barbarian");

  const handleSubmit = (e) => {
    e.preventDefault();
    setCharLevel(localLevel);
    setCharRace(localRace);
    setCharClass(localClass);
    setToggleCharSheet(true);
  }

  return (
    <form id="Form" onSubmit={(e) => handleSubmit(e)}>
        <input type="number" id="charLevel" placeholder="Level" value={localLevel} onChange={(e) => setLocalLevel(e.target.value)} />
        <select id="charRace" placeholder="Race" value={localRace} onChange={(e) => setLocalRace(e.target.value)}>
            <option value="dragonborn">Dragonborn</option>
            <option value="dwarf">Dwarf</option>
            <option value="elf">Elf</option>
            <option value="gnome">Gnome</option>
            <option value="halfelf">Half-Elf</option>
            <option value="halfling">Halfling</option>
            <option value="halforc">Half-Orc</option>
            <option value="human">Human</option>
            <option value="tiefling">Tiefling</option>
        </select>
        <select id="charClass" placeholder="Class" value={localClass} onChange={(e) => setLocalClass(e.target.value)}>
            <option value="barbarian">Barbarian</option>
            <option value="bard">Bard</option>
            <option value="cleric">Cleric</option>
            <option value="druid">Druid</option>
            <option value="fighter">Fighter</option>
            <option value="monk">Monk</option>
            <option value="paladin">Paladin</option>
            <option value="ranger">Ranger</option>
            <option value="rogue">Rogue</option>
            <option value="sorcerer">Sorcerer</option>
            <option value="warlock">Warlock</option>
            <option value="wizard">Wizard</option>
        </select>
        <input type="submit" value="Generate" />
    </form>
  );
}

export default Form