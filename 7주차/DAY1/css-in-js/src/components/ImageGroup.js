import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  padding: 20px;
`;

const ImageLists = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-rows: 150px;
  gap: 10px
  `;

const ImageList = styled.li`
  font-size: 4rem;
  display: flex;
  justify-content: center;
  align-items: center;

  &:nth-child(1) {
    background-color: pink;
    grid-row: 1/3;
  }

  &:nth-child(2) {
    background-color: skyblue;
  }

  &:nth-child(3) {
    background-color: gold;
    grid-row: 2/3;
  }

  &:nth-child(4) {
    background-color: pink;
    grid-row: 1/3;
  }
`;



const ImageGroup = () => {
  return (
    <Wrapper>
      <ImageLists>
        <ImageList>1</ImageList>
        <ImageList>2</ImageList>
        <ImageList>3</ImageList>
        <ImageList>4</ImageList>
      </ImageLists>
    </Wrapper>
  );
};

export default ImageGroup;