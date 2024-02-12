import React, { useState } from 'react';

const PaymentForm = ({ getData }) => {
  const [inputState, setInputState] = useState({
    name: '',
    price: 0,
    spendType: 'food',
    today: new Date(),
    memo: '',
  });

  const [checked, setChecked] = useState(false);
  const checkBoxChangeHandler = () => {
    if (!checked) {
      setChecked(true);
    } else {
      return setChecked(false);
    }
  }

  const inputChangeHandler = (event) => {
    setInputState({
      ...inputState,
      [event.target.name]: event.target.value,
    });
  }

  const submitHandler = (e) => {
    e.preventDefault();
    getData(inputState);
    setInputState({
      name: '',
      price: 0,
      spendType: 'food',
      today: new Date(),
      memo: '',
    });
    setChecked(false);
  }

  return (
    <form onSubmit={submitHandler}>
      <div>
        <label htmlFor='name'>
          이름
          <input type='text' name='name' value={inputState.name} onChange={inputChangeHandler} />
        </label>
      </div>
      <div>
        <label htmlFor='price'>
          가격
          <input type='number' name='price' value={inputState.price} onChange={inputChangeHandler} />
        </label>
      </div>
      <div>
        <label htmlFor='spendType'>소비 유형</label>
        <select name='spendType' value={inputState.spendType} onChange={inputChangeHandler}>
          <option value='food'>식비</option>
          <option value='clothes'>의류</option>
          <option value='goods'>물건</option>
        </select>
      </div>
      <div>
        <label htmlFor='date'>
          구입 날짜
          <input
            type='date'
            name='today'
            value={inputState.today}
            onChange={inputChangeHandler}
          />
        </label>
      </div>
      <div>
        <label htmlFor='memo'>
          메모 내용
          <input type='checkbox' name='memo' checked={checked} onChange={checkBoxChangeHandler} />
          {
            checked && <input type='text' name='memo' value={inputState.memo} onChange={inputChangeHandler} />
          }
        </label>
      </div>
      <button type='submit'>등록</button>
    </form>
  );
};

export default PaymentForm;