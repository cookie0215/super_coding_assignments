import React, { useState } from 'react';
import { Form } from '../../styles/PaymentFormStyles';

const PaymentForm = ({ getData }) => {
  const [state, setState] = useState({
    name: '',
    price: 0,
    today: new Date(),
    color: '#ffffff'
  });

  const nameChangeHandler = (e) => {
    setState((prevState) => ({
      ...prevState,
      name: e.target.value
    }))
  }
  const priceChangeHandler = (e) => {
    setState((prevState) => ({
      ...prevState,
      price: e.target.value
    }))
  }
  const dateChangeHandler = (e) => {
    setState((prevState) => ({
      ...prevState,
      today: e.target.value
    }))
  }
  const colorChangeHandler = (e) => {
    setState((prevState) => ({
      ...prevState,
      color: e.target.value
    }))
  }

  const submitHandler = (e) => {
    e.preventDefault();
    getData(state);

    setState({
      name: '',
      price: 0,
      today: null,
      color: '#ffffff'
    });

  }

  return (
    <Form onSubmit={submitHandler}>
      <div className='new-payment__controls'>
        <div className='new-payment__control'>
          <label htmlFor='name'>이름</label>
          <input
            type='text'
            id='name'
            name='name'
            value={state.name}
            onChange={nameChangeHandler}
          />
        </div>
        <div className='new-payment__control'>
          <label htmlFor='price'>금액</label>
          <input
            type='number'
            id='price' name='price'
            value={state.price}
            onChange={priceChangeHandler}
          />
        </div>
        <div className='new-payment__control'>
          <label htmlFor='date'>날짜</label>
          <input
            type='date'
            id='date'
            name='date'
            value={state.date}
            onChange={dateChangeHandler}
          />
        </div>
        <div className='new-payment__control'>
          <label htmlFor='color'>색상</label>
          <input
            type='color'
            id='color'
            name='color'
            value={state.color}
            onChange={colorChangeHandler}
          />
        </div>
      </div>
      <div className='new-payment__actions'>
        <button type='submit'>결제 추가</button>
      </div>
    </Form>
  );
};

export default PaymentForm;