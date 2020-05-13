import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import "./styles.css"

import { fetchspell } from '../store/actions/spellAction';




const Spellmake = props => {
  useEffect(() => {
   
    props.fetchspell();
  }, []);



  return (
    <div>
      <h1>D&D Random Encounter creator</h1>
      {props.isFetching && (
        <div type="Puff" color="#00BFFF" height={100} width={100} />
      )}
      {props.monster && <h3>{props.monster.name}</h3>}
      {props.monster && <p>size: {props.monster.size}</p>}

      {props.monster && <p>alignment: {props.monster.alignment}</p>}{/*
      {props.monster && <p>type: {props.monster.type}</p>}      
      {props.monster && <p>subtype: {props.monster.subtype}</p>}
      {props.monster && <p>armor_class: {props.monster.armor_class}</p>} 
      {props.monster && <p>{props.monster.hit_points}</p>}
      {props.monster && <p>{props.monster.hit_dice}</p>}
      {/* {props.monster && <p>{props.monster.speed}</p>} */}
      {props.monster && <p>strength: {props.monster.strength}</p>}
      {props.monster && <p>dexterity: {props.monster.dexterity}</p>}
      {props.monster && <p>constitution: {props.monster.constitution}</p>}
      {props.monster && <p>intelligence: {props.monster.intelligence}</p>}
      {props.monster && <p>wisdom: {props.monster.wisdom}</p>}
      {props.monster && <p>charisma: {props.monster.charisma}</p>}
      {/* {props.monster && <p>proficiencies: {props.monster.proficiencies.map}</p>}  */}
      {/* {props.monster && <p>{props.monster.}</p>} */}
      {props.error && <p className="error">{props.error}</p>}

      <button onClick={props.fetchspell}>New Random Encounter</button>
    </div>
  );
};

const mapStateToProps = state => {
  console.log(state);
  return {
    monster: state.spellListReducer.monster,
    isFetching: state.spellListReducer.isFetching,
    error: state.spellListReducer.error
  };
};

export default connect(
  mapStateToProps,
  { fetchspell }
)(Spellmake);
