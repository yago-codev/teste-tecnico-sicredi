import styled from 'styled-components';

export const AsideContainer = styled.aside`
  grid-area: ASIDE;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${(props) => props.theme.colors.white};

  @media (max-width: 420px) {
    flex-direction: row;
    justify-content: center;
    padding: 8px;
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
  }
`;

export const AsideLogo = styled.button`
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.theme.colors.white};
  margin-bottom: 15px;
  cursor: default;

  > div {
    height: 50px;
    width: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 6px;

    img {
      height: 64px;
    }
  }

  @media (max-width: 420px) {
    display: none;
  }
`;

export const AsideButton = styled.button`
  height: 50px;
  width: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 15px;
  background-color: ${(props) => props.theme.colors.white};
  border-radius: 6px;
  transition: 0.2s;

  &:hover {
    a {
      background-color: ${(props) => props.theme.colors.purpleSecondary};

      &::before {
        content: '';
        width: 36px;
        height: 36px;
        border-radius: 50%;
        background-color: ${(props) => props.theme.colors.purplePrimary};
        position: absolute;
      }

      > svg {
        opacity: 0.9;
      }
    }
  }

  a {
    width: 50px;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    background-color: ${(props) => props.theme.colors.white};
    position: relative;
    transition: 0.2s;

    &.active {
      background-color: ${(props) => props.theme.colors.purpleSecondary};

      &::before {
        content: '';
        width: 36px;
        height: 36px;
        border-radius: 50%;
        background-color: ${(props) => props.theme.colors.purplePrimary};
        position: absolute;
      }
    }

    > svg {
      font-size: 24px;
      stroke: ${(props) => props.theme.colors.gray};
      z-index: 1;
    }
  }

  @media (max-width: 420px) {
    margin-bottom: 0px;

    & + button {
      margin-left: 16px;
    }
  }
`;
