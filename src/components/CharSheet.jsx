import React, { useState } from 'react'
import ProfSkill from './ProfSkill'

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

  const statModifiers = [
    0,
    0,
    0,
    0,
    0,
    0
  ];

  // Calculate stat modifiers for each stat
  for (let i = 0; i <= charStats.length; i++) {
    if (charStats[i] < 10) {
      statModifiers[i] = -1;
    } else if (charStats[i] <= 11) {
      statModifiers[i] = 0;
    } else if (charStats[i] <= 13) {
      statModifiers[i] = 1;
    } else if (charStats[i] <= 15) {
      statModifiers[i] = 2;
    } else if (charStats[i] <= 17) {
      statModifiers[i] = 3;
    } else if (charStats[i] <= 19) {
      statModifiers[i] = 4;
    } else if (charStats[i] >= 20) {
      statModifiers[i] = 5;
    }
  }

  const [profBonus, setProfBonus] = useState(2);
  
  return (
    <div>
        <h1 className="charMain"><span className="capital">{charRace}</span> <span className="capital">{charClass}</span></h1>
        <h1 className="charMain">Level {charLevel}</h1>
        <hr />
        <div className="charMiscStats">
          <h2>Hit Dice</h2>
          <p>{charLevel}{classData[charClass].hitDice}</p>
          <h2>Speed</h2>
          <p>{raceData[charRace].speed}</p>
          <h2>Proficiency</h2>
          <p>{profBonus}</p>
        </div>
        <hr />
        <h2 className="sectionHead">Stats</h2>
        <ul>
          {/*Display final stat allocations summed with any racial bonuses, and stat modifiers*/}
          <li>STR: {charStats[0] + raceData[charRace].str} ({statModifiers[0] >= 0 ? '+' : null}{statModifiers[0]})</li>
          <li>DEX: {charStats[1] + raceData[charRace].dex} ({statModifiers[1] >= 0 ? '+' : null}{statModifiers[1]})</li>
          <li>CON: {charStats[2] + raceData[charRace].con} ({statModifiers[2] >= 0 ? '+' : null}{statModifiers[2]})</li>
          <li>INT: {charStats[3] + raceData[charRace].int} ({statModifiers[3] >= 0 ? '+' : null}{statModifiers[3]})</li>
          <li>WIS: {charStats[4] + raceData[charRace].wis} ({statModifiers[4] >= 0 ? '+' : null}{statModifiers[4]})</li>
          <li>CHA: {charStats[5] + raceData[charRace].cha} ({statModifiers[5] >= 0 ? '+' : null}{statModifiers[5]})</li>
        </ul>
        <hr />
        <h2 className="sectionHead">Skills</h2>
        <p>Select {classData[charClass].skillNumber} skills below to be proficient in.</p>
        <ul>
          {classData[charClass].skillProf.map((skill) => {
            return <ProfSkill skill={skill} />;
          })}
        </ul>
        <hr />
        <h2 className="sectionHead">Proficiencies</h2>
        <div className="charProficiencies">
          <div>
            <h3>Armor</h3>
            <ul>
              {classData[charClass].proficiencies.armor.map((armor) => {
                return <li>{armor}</li>
              })}
            </ul>
          </div>
          <div>
            <h3>Weapons</h3>
            <ul>
              {classData[charClass].proficiencies.weapons.map((weapon) => {
                return <li>{weapon}</li>
              })}
            </ul>
          </div>
          <div>
            <h3>Tools</h3>
            <ul>
              {classData[charClass].proficiencies.tools.map((tool) => {
                return <li>{tool}</li>
              })}
            </ul>
          </div>
        </div>
        <hr />
        <h2 className="sectionHead">Starting Equipment</h2>
        <ul>
          {classData[charClass].equipment.map((equip) => {
            return <li>{equip}</li>
          })}
        </ul>
        <hr />
        <h2 className="sectionHead">Traits</h2>
        <ul>
          {classData[charClass].traits.map((trait) => {
            return <li>{trait}</li>
          })}
        </ul>
    </div>
  );
}

export default CharSheet