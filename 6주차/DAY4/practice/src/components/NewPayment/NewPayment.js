import React, { useState } from 'react';
import PaymentForm from './PaymentForm';
import Expenses from './Expenses';


const NewPayment = () => {
  // 상품 리스트에 대한 state
  const [listState, setListState] = useState([]);

  const getData = (data) => {
    setListState((prevListState) => [
      {
        id: Math.random().toString(),
        title: data.name,
        amount: data.price,
        date: new Date(data.today),
        colors: data.color
      },
      ...prevListState
    ])
  }

  return (
    <div>
      <PaymentForm getData={getData} />
      <Expenses listState={listState} />
    </div>
  );
};

export default NewPayment;