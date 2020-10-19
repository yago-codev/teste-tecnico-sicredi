import styled from 'styled-components';
import { shade } from 'polished';

export const DragonBackLinkContainer = styled.div`
  display: flex;
  align-items: center;
  padding-bottom: 32px;

  a {
    text-decoration: none;

    button {
      display: flex;
      align-items: center;
      background-color: transparent;
      color: ${(props) => props.theme.colors.secondary};
      font-size: 16px;
      transition: 0.2s;

      &:hover {
        color: ${shade(0.2, '#8885A9')};
      }

      svg {
        font-size: 20px;
        margin-right: 8px;
      }
    }
  }
`;

export const DragonDetailsContainer = styled.div`
  background-color: ${(props) => props.theme.colors.white};
  padding: 24px;
  border-radius: 8px;
`;

export const DragonTitleContainer = styled.div`
  display: flex;
  align-items: center;

  h2 {
    font-size: 24px;
    margin-left: 16px;
  }
`;

export const DragonDetailsContentContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding-top: 24px;

  > button {
    width: 160px;
    height: 40px;
    margin-top: 0;
  }
`;

export const DragonDetailsInputContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;

  & + div {
    margin-left: 16px;

    @media (max-width: 420px) {
      margin-top: 24px;
      margin-left: 0;
    }
  }

  &:nth-child(3) {
    input {
      cursor: not-allowed;
      color: ${props => props.theme.colors.secondary};
    }
  }

  > span {
    margin-left: 16px;
    margin-bottom: 8px;
    color: ${(props) => props.theme.colors.secondary};
    font-weight: 500;
  }

  > div {
    max-height: 40px;
  }
`;

export const DragonDetailsTextAreaContainer = styled.div`
  flex: 1;

  > span {
    margin-left: 16px;
    color: ${(props) => props.theme.colors.secondary};
    font-weight: 500;
  }

  > div {
    margin-top: 8px;
  }
`;
