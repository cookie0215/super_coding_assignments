import React from 'react';
import FilterGroup from './FilterGroup';
import PocketItem from './PocketItem';

const PocketList = ({ listItems }) => {
  return (
    <div>
      <FilterGroup />
      {
        listItems.map((item) => {
          return (
            <PocketItem
              key={item.id}
              name={item.name}
              price={item.price}
              spendType={item.spendType}
              date={item.date}
              memo={item.memo}
            />
          )
        })
      }
    </div>
  );
};

export default PocketList;