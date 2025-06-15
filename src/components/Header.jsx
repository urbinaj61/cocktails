import React from 'react';
import { IoIosBasket } from 'react-icons/io';

const Header = ({ showOrdersModal }) => {
  return (
    <header>
      <h1>Order your cocktail</h1>
      {/* The basket icon on the header when clicked will call the function located within our App component
      that will toggle the state boolean on and off. */}
      <IoIosBasket className='basket' onClick={showOrdersModal} />
    </header>
  );
};

export default Header;
