import React from 'react';

//The ingredients have been passed to us from pur Cocktail component.
const InfoModal = ({ ingredients }) => {
  const ingredientsList = ingredients.map((ingredient, index) => (
    <li className='info-li' key={index}>
      {ingredient}
    </li>
  ));
  return <ul className='info-ul'>{ingredientsList}</ul>;
};

export default InfoModal;
