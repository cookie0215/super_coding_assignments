import React from 'react';
import * as S from '../../styles/PocketItemStyels';

const PocketItem = (props) => {
  return (
    <S.Product>
      <S.PurchaseDate>{props.date}</S.PurchaseDate>
      <S.ProductInfo>
        <S.ProductTitle>
          <S.SpendType>
            <span>{props.spendType}</span>
          </S.SpendType>
          <S.ProductName>
            <span>{props.name}</span>
            <span>{props.memo}
            </span>
          </S.ProductName>
        </S.ProductTitle>
        <S.ProductPrice>{props.price}원</S.ProductPrice>
      </S.ProductInfo>
    </S.Product >
  );
};

export default PocketItem;