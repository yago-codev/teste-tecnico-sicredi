import styled from 'styled-components';

export const ContentContainer = styled.div`
  height: calc(100vh - 70px);
  grid-area: CONTENT;
  background-color: ${(props) => props.theme.colors.quaternary};
  padding: 32px;
  border-radius: 8px;
  overflow-y: scroll;
  overflow-x: hidden;

  @media (max-width: 420px) {
    height: calc(100vh - 140px);
    border-radius: 0;
  }

  &::-webkit-scrollbar {
    width: 10px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: ${(props) => props.theme.colors.tertiary};
    border-radius: 10px;
  }

  &::-webkit-scrollbar-track {
    background-color: ${(props) => props.theme.colors.graySecondary};
  }
`;
