import styled from 'styled-components';
import { shade } from 'polished';

export const HeaderContainer = styled.header`
  grid-area: HEADER;
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${(props) => props.theme.colors.white};
  padding: 0 20px;
  z-index: 2;
`;

export const HeaderLeft = styled.div`
  width: 30%;
  display: flex;
  align-items: center;

  > img {
    height: 30px;
  }
`;

export const HeaderRight = styled.div`
  div {
    width: 40px;
    height: 40px;
    position: relative;
    cursor: pointer;

    > img {
      width: 100%;
      height: 100%;
      border-radius: 50%;
      object-fit: cover;
    }

    > div {
      width: 80px;
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: ${(props) => props.theme.colors.white};
      border: 2px solid ${(props) => props.theme.colors.tertiary};
      border-radius: 6px;
      position: absolute;
      top: 55px;
      right: 0;

      &::before {
        content: '';
        position: absolute;
        top: -7px;
        border-top-left-radius: 2px;
        right: 12px;
        width: 10px;
        height: 10px;
        border: 2px solid ${(props) => props.theme.colors.tertiary};
        border-bottom: none;
        border-right: none;
        transform: rotate(45deg);
        background: ${(props) => props.theme.colors.white};
      }

      button {
        background-color: transparent;
        color: ${(props) => props.theme.colors.redPrimary};

        &:hover {
          color: ${shade(0.2, '#d63031')};
        }
      }
    }
  }
`;
