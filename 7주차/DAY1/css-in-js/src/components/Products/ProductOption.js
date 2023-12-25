import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  flex: 1;
  padding: 40px 20px;
`;

const Price = styled.div`
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 20px;
`;
const StarRating = styled.div`
  display: flex;
  padding: 10px 0;
  margin-bottom: 20px;

  & > ul {
    display: flex;
    justify-content: flex-start;
    align-items: center;

    & > li {
      font-size: 1.6rem;
      margin-right: 3px;
    }
  }

  & > div {
    margin-left: 10px;
    font-size: 1.2rem;
    font-weight: bold;
    line-height: 16px;
    color: #5045e4;
  }
`;

const ColorOption = styled.div`
  padding: 10px 0;
  margin-bottom: 20px;

  & > div {
    font-size: 1.6rem;
    font-weight: bold;
    margin-bottom: 10px;
  }

  & > ul {
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;

    & > li {

      & > input[type="radio"] {
        appearance: none;
        border: 1px solid gray;
        border-radius: 50%;
        width: 2.8em;
        height: 2.8em;
        z-index: 10;

        &#white[type="radio"] {
          background: #fff;
        }

        &#gray[type="radio"] {
          background: #E4E7EB;
        }
        
        &#black[type="radio"] {
          background: #111827;
        }
      

        // radio 버튼 선택 시
        &[type="radio"]:checked {
          border: 0.3em solid #5045e4;
        }
      }
    }
  }
`;

const SizeOption = styled.div`
  padding: 10px 0;
  margin-bottom: 20px;

  & > div {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    margin-bottom: 10px;

    & > span {
      font-size: 1.6rem;
      font-weight: bold;

      &:nth-child(2) {
        color: #5045e4;
      }
    }
  }


  & > ul {
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    flex-wrap: wrap;

    & > li {
      border: 1px solid #E4E7EB;
      border-radius: 5px;
      height: 80px;
      flex-basis: 20%;
      margin: 5px;

      display: flex;
      justify-content: center;
      align-items: center;

      & > span {
        font-size: 1.2rem;
        font-weight: bold;
      }

      // 사이즈 품절 시
      &.is-sold {
        background: #E4E7EB;

        & > span {
          color: #B5B6B8;
        }
      }

      // 사이즈 선택 시
      &.is-checked {
        border: 3px solid #5045e4;
      }
    }
  }
`;

const AddButton = styled.button`
  width: 100%;
  height: 50px;
  background: #5045e4;
  border-radius: 5px;
  font-weight: bold;
  color: white;
  margin-top: 20px;
`;

const ProductOption = () => {
  return (
    <Wrapper>
      <Price>$ 192</Price>
      <StarRating>
        <ul>
          <li>★</li>
          <li>★</li>
          <li>★</li>
          <li>★</li>
          <li>☆</li>
        </ul>
        <div>117 Reviews</div>
      </StarRating>
      <ColorOption>
        <div>Color</div>
        <ul>
          <li>
            <input type='radio' id="white" name="color" />
          </li>
          <li>
            <input type='radio' id="gray" name="color" />
          </li>
          <li>
            <input type='radio' id="black" name="color" />
          </li>
        </ul>
      </ColorOption>
      <SizeOption>
        <div>
          <span>Size</span>
          <span>Size Guides</span>
        </div>
        <ul>
          <li className='is-sold'>
            <span>2XS</span>
          </li>
          <li>
            <span>XS</span>
          </li>
          <li>
            <span>S</span>
          </li>
          <li>
            <span>M</span>
          </li>
          <li>
            <span>L</span>
          </li>
          <li>
            <span>XL</span>
          </li>
          <li>
            <span>2XL</span>
          </li>
          <li className='is-checked'>
            <span>3XL</span>
          </li>
        </ul>
      </SizeOption>
      <AddButton>Add to Bag</AddButton>
    </Wrapper>
  );
};

export default ProductOption;