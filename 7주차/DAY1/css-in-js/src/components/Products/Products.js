import React from 'react';
import ProductInfo from './ProductInfo';
import ProductOption from './ProductOption';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;


const Products = () => {
  return (
    <Wrapper>
      <ProductInfo></ProductInfo>
      <ProductOption></ProductOption>
    </Wrapper>
  );
};

export default Products;