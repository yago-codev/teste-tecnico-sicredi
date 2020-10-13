import styled from 'styled-components';
import { shade } from 'polished';

export const ModalContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 3;
`;

export const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${(props) => props.theme.colors.white};
  padding: 16px;
  border-radius: 8px;
`;

export const ModalContentHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding-bottom: 8px;
  border-bottom: 2px solid ${(props) => props.theme.colors.quaternary};

  button {
    display: flex;
    align-items: center;
    background-color: transparent;
    color: ${shade(0.3, '#8885A9')};
  }
`;

export const ModalContentBody = styled.div`
  padding: 16px 0;
  border-bottom: 2px solid ${(props) => props.theme.colors.quaternary};
`;

export const ModalContentFooter = styled.div`
  margin-top: 16px;

  button {
    padding: 8px 16px;
    border-radius: 16px;

    & + button {
      margin-left: 8px;
    }
  }

  button:first-child {
    background-color: ${(props) => props.theme.colors.greenSecondary};
    color: ${(props) => props.theme.colors.greenPrimary};
  }

  button:last-child {
    background-color: ${(props) => props.theme.colors.redSecondary};
    color: ${(props) => props.theme.colors.redPrimary};
  }
`;
