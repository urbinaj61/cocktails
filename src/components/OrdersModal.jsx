import React from 'react';

//This modal will only be shown if the header basket icon is clicked. This state boolean we send to the CocktailContainer. Here we determine
//whether the modal should be shown or not.
//As our orders are held within an object we need to convert this object into arrays with the Object.entries command
//This gives is an array with two elements. The key and the value.
const OrdersModal = ({ orders }) => {
  const ordersArray = Object.entries(orders);

  //Here we are using to array reduce method to check whether we have any orders or not.
  const orderCheck = ordersArray.reduce((acc, num) => (acc += num[1]), 0);

  //If there are any orders we need to display them within li tags. But only if the particular cocktail has been ordered. Else it will not show
  //on the list.
  const orderList = ordersArray.map(
    (order, index) =>
      order[1] > 0 && (
        <li className='orders-li' key={index}>
          {order[0]}
          <span className='span'>{order[1]}</span>
        </li>
      )
  );

  //If we find there are no orders we show this in our orders modal.
  orderCheck === 0 &&
    orderList.push(
      <li className='orders-li' key={0}>
        You have no orders!
      </li>
    );

  return <ul className='orders-ul'>{orderList}</ul>;
};

export default OrdersModal;
