import styled from 'styled-components';

export const Product = styled.div`
  border: 1px solid red;
  padding: 20px;
  margin: 10px;
`;

export const PurchaseDate = styled.div`
  font-size: 14px;
`;

export const ProductInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const ProductTitle = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 10px 0;
`;

export const SpendType = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 6px;

  span {
    display: block;
    width: 100%;
    min-width: 60px;
    padding: 8px;
    height: 30px;
    text-align: center;
    background: gold;
    border-radius: 15px;
  }
`;

export const ProductName = styled.div`
  // border: 1px solid blue;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;

  span {
    
    &:nth-child(2) {
      margin-top: 8px;
      font-size: 14px;
      color: #999;
    }
  }
`;

export const ProductPrice = styled.div`
  font-weight: bold;
  font-size: 20px;
`;