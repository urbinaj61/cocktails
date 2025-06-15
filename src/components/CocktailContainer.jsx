import React from 'react';
import OrdersModal from './OrdersModal';
import Cocktail from './Cocktail';

import cocktailData from '../data/cocktail-data';

//Here we are receiving all the props passed to us from App.
//showOrders we use to determine whether we show the orders modal or not.
//We need the methods to add and subtract orders.
//We need the orders themselves too.
const CocktailContainer = ({ showOrders, subtractOrder, addOrder, orders }) => {
  //The first thing we need to do is map through our data array and grab all the goodies there.
  //To our Cocktail component we need to pass all this information plus the add and subtract methods,
  //orders ans showOrders boolean coming from App.
  const cocktailList = cocktailData.map((info) => (
    <Cocktail
      key={info.id}
      name={info.name}
      title={info.title}
      imageInfo={info.image}
      ingredients={info.ingredients}
      subtractOrder={subtractOrder}
      addOrder={addOrder}
      orders={orders}
      showOrders={showOrders}
    />
  ));
  return (
    <section className='cocktail-list'>
      {cocktailList}
      {/* We also use the showOrders boolean here to show the orders modal or not. */}
      {/* We all pass the orders to the modal */}
      {showOrders && <OrdersModal orders={orders} />}
    </section>
  );
};

export default CocktailContainer;
