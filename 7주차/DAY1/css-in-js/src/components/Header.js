import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  width: 100vw;
  padding: 10px;
`;

const HeaderUl = styled.ul`
  padding: 10px;
  display: flex;

`;

const HeaderList = styled.li`
  font-size: 1.6rem;
  margin-right: 1.2rem;
  position: relative;

  &::after {
    content:'';
    width: 2px;
    height: calc(100% - 4px);
    background: #ccc;
    position: absolute;
    top: 50%;
    right: 0;
    transform: translate(6px, -50%);
  }
`;




const Header = () => {
  return (
    <Wrapper>
      <HeaderUl>
        <HeaderList>MEN</HeaderList>
        <HeaderList>MEN</HeaderList>
        <HeaderList>MEN</HeaderList>
      </HeaderUl>
    </Wrapper>
  );
};

export default Header;