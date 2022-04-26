import React from 'react'

const raceData = require("./raceData.json");
const classData = require("./classData.json");

const CharSheet = ({charLevel, charRace, charClass}) => {

  const statRolls = [
    Math.floor(Math.random() * (19 - 9) + 9),
    Math.floor(Math.random() * (19 - 9) + 9),
    Math.floor(Math.random() * (19 - 9) + 9),
    Math.floor(Math.random() * (19 - 9) + 9),
    Math.floor(Math.random() * (19 - 9) + 9),
    Math.floor(Math.random() * (19 - 9) + 9),
  ];
  // Roll values sorted least to greatest
  statRolls.sort(function(a, b) {
    return a - b;
  });

  const charStats = [
    0, //str
    0, //dex
    0, //con
    0, //int
    0, //wis
    0 // cha
  ];

  // Determines which rolls to apply to which stats depending on selected class
  switch (charClass) {
    case "barbarian":
      charStats[0] = statRolls[5];
      charStats[1] = statRolls[3];
      charStats[2] = statRolls[4];
      charStats[3] = statRolls[0];
      charStats[4] = statRolls[1];
      charStats[5] = statRolls[2];
      break;
    case "bard":
      charStats[0] = statRolls[0];
      charStats[1] = statRolls[4];
      charStats[2] = statRolls[1];
      charStats[3] = statRolls[2];
      charStats[4] = statRolls[3];
      charStats[5] = statRolls[5];
      break;
    case 'cleric':
      charStats[0] = statRolls[0];
      charStats[1] = statRolls[1];
      charStats[2] = statRolls[2];
      charStats[3] = statRolls[3];
      charStats[4] = statRolls[5];
      charStats[5] = statRolls[4];
      break;
    case "druid":
      charStats[0] = statRolls[0];
      charStats[1] = statRolls[3];
      charStats[2] = statRolls[2];
      charStats[3] = statRolls[4];
      charStats[4] = statRolls[5];
      charStats[5] = statRolls[1];
      break;
    case "fighter":
      charStats[0] = statRolls[5];
      charStats[1] = statRolls[3];
      charStats[2] = statRolls[4];
      charStats[3] = statRolls[0];
      charStats[4] = statRolls[2];
      charStats[5] = statRolls[1];
      break;
    case "monk":
      charStats[0] = statRolls[3];
      charStats[1] = statRolls[5];
      charStats[2] = statRolls[1];
      charStats[3] = statRolls[2];
      charStats[4] = statRolls[4];
      charStats[5] = statRolls[0];
      break;
    case "paladin":
      charStats[0] = statRolls[5];
      charStats[1] = statRolls[1];
      charStats[2] = statRolls[2];
      charStats[3] = statRolls[0];
      charStats[4] = statRolls[3];
      charStats[5] = statRolls[4];
      break;
    case "ranger":
      charStats[0] = statRolls[3];
      charStats[1] = statRolls[5];
      charStats[2] = statRolls[2];
      charStats[3] = statRolls[1];
      charStats[4] = statRolls[4];
      charStats[5] = statRolls[0];
      break;
    case "rogue":
      charStats[0] = statRolls[1];
      charStats[1] = statRolls[5];
      charStats[2] = statRolls[2];
      charStats[3] = statRolls[3];
      charStats[4] = statRolls[0];
      charStats[5] = statRolls[4];
      break;
    case "sorcerer":
      charStats[0] = statRolls[0];
      charStats[1] = statRolls[4];
      charStats[2] = statRolls[1];
      charStats[3] = statRolls[3];
      charStats[4] = statRolls[2];
      charStats[5] = statRolls[5];
      break;
    case "warlock":
      charStats[0] = statRolls[0];
      charStats[1] = statRolls[2];
      charStats[2] = statRolls[1];
      charStats[3] = statRolls[3];
      charStats[4] = statRolls[4];
      charStats[5] = statRolls[5];
      break;
    case "wizard":
      charStats[0] = statRolls[0];
      charStats[1] = statRolls[3];
      charStats[2] = statRolls[2];
      charStats[3] = statRolls[5];
      charStats[4] = statRolls[4];
      charStats[5] = statRolls[1];
      break;
    default:
      charStats[0] = statRolls[0];
      charStats[1] = statRolls[1];
      charStats[2] = statRolls[2];
      charStats[3] = statRolls[3];
      charStats[4] = statRolls[4];
      charStats[5] = statRolls[5];
  }
  
  return (
    <div>
        <h1>Level {charLevel} {charRace} {charClass}</h1>
        <hr />
        <div className="charMiscStats">
          <h2>Hit Dice</h2>
          <p>{charLevel}{classData[charClass].hitDice}</p>
          <h2>Speed</h2>
          <p>{raceData[charRace].speed}</p>
        </div>
        <hr />
        <h2>Stats</h2>
        <ul>
          {/*Display final stat allocations plus any racial stat bonuses*/}
          <li>STR: {charStats[0] + raceData[charRace].str}</li>
          <li>DEX: {charStats[1] + raceData[charRace].dex}</li>
          <li>CON: {charStats[2] + raceData[charRace].con}</li>
          <li>INT: {charStats[3] + raceData[charRace].int}</li>
          <li>WIS: {charStats[4] + raceData[charRace].wis}</li>
          <li>CHA: {charStats[5] + raceData[charRace].cha}</li>
        </ul>
    </div>
  );
}

export default CharSheet