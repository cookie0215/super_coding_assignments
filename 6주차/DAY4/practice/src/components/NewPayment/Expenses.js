import React from 'react';
import { ListWrap } from '../../styles/ExpensesStyles';

const Expenses = ({ listState }) => {
  return (
    <ListWrap>
      {listState.map((item) => (
        <li key={item.id}>
          <h4>{item.title}</h4>
          <p>{item.colors}</p>
        </li>
      ))}
    </ListWrap>
  );
};

export default Expenses;