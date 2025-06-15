import React, { useState } from 'react';
import Header from './Header';
import '../css/App.css';
import CocktailContainer from './CocktailContainer';
import Footer from './Footer';

const App = () => {
  //Setup our useStates.
  //The first state is just a false, true switch letting react know whether to show or not the orders modal.
  //The second useState we use to keep track of all the orders and to which cocktail we add or subtract.
  const [showOrders, setShowOrders] = useState(false);
  const [orders, setOrders] = useState({
    Cosmopolitan: 0,
    Martini: 0,
    Mojito: 0,
    MaiTai: 0,
    Margarita: 0,
    CubaLibre: 0,
    Caipirinha: 0,
    MintJulep: 0,
  });

  //Show orders
  //A toggle to activate the orders modal or not.
  const showOrdersModal = () => {
    setShowOrders(!showOrders);
  };

  //Increment by 1 the cocktail chosen.
  //This works as follows. We need to spread the orders state in order to not overwrite what has already been updated in our orders state object.
  //We then tell the setOrders method which key or property we want to increment. We then increment that property within the orders state object by 1.
  const addOrder = (e) => {
    setOrders({ ...orders, [e.target.name]: orders[e.target.name] + 1 });
  };

  //Decrement by 1 the cocktail chosen.
  //This works as follows. We need to spread the orders state in order to not overwrite what has already been updated in our orders state object.
  //We then tell the setOrders method which key or property we want to increment. We then decrement that property within the orders state object by 1.
  //We also check that we cannot go under 0. No point having a negative cocktail.
  const subtractOrder = (e) => {
    orders[e.target.name] > 0 &&
      setOrders({ ...orders, [e.target.name]: orders[e.target.name] - 1 });
  };

  return (
    <main>
      {/* Here we pass the boolean to the header to activate the orders modal or not */}
      <Header showOrdersModal={showOrdersModal} />
      <section className='cocktail-list-container'>
        {/* To our cocktailContainer we pass the showOrders boolean, both addOrder and subtractOrder methods and the orders themselves */}
        <CocktailContainer
          showOrders={showOrders}
          subtractOrder={subtractOrder}
          addOrder={addOrder}
          orders={orders}
        />
      </section>

      <Footer />
    </main>
  );
};

export default App;
