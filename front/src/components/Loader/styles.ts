import styled from 'styled-components';

export const LoaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: ${(props) => props.theme.colors.ice};
  z-index: 5;

  > img {
    width: 35%;

    @media(max-width: 420px) {
      width: 100%;
    }
  }
`;
