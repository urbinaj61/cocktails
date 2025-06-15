import React, { useState } from 'react';
import InfoModal from './InfoModal';
import { BsInfoCircle } from 'react-icons/bs'; //A very neat library called react-icons

//Here we receive all the information sent to us from our CocktailContainer component.
const Cocktail = ({
  name,
  title,
  imageInfo,
  ingredients,
  subtractOrder,
  addOrder,
  orders,
  showOrders,
}) => {
  //We create more state here. As this state will only be used here it does not need to come from App.
  const [showModal, setShowModal] = useState(false);

  //We need to store the order value to display in our individual cocktail card.
  const order = orders[name];

  return (
    // We build our card from all the information sent to us from App.
    <section
      className='cocktail'
      style={{ backgroundImage: `URL(${imageInfo})` }}>
      <div className='title-container'>
        <h3>{title} </h3>

        {/* We change the showModal state with a hover event. Show below with the mouseEnter and mouseLeave listeners. */}
        <BsInfoCircle
          className='infoCircle'
          onMouseEnter={() => setShowModal(true)}
          onMouseLeave={() => setShowModal(false)}
        />
      </div>

      {/* We call our subtract and add orders methods by clicking on the buttons within each card. */}
      <aside>
        <button name={name} onClick={(e) => subtractOrder(e)}>
          -
        </button>
        <p>
          {/* Our order amount will be displayed in between our subtract and add buttons */}
          Ordered <span>{order}</span>
        </p>
        <button name={name} onClick={(e) => addOrder(e)}>
          +
        </button>
      </aside>
      {/* Only if the our mouse is hovering over the info icon will the state change to true and therefore show the modal.
      Only show the info modal if the orders modal has not been activated. 
      We then want to pass the ingredients to the InfoNodal component.*/}
      {showModal & !showOrders && <InfoModal ingredients={ingredients} />}
    </section>
  );
};

export default Cocktail;
