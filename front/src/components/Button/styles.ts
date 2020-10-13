import styled from 'styled-components';
import { shade } from 'polished';

export const ButtonContainer = styled.button`
  width: 100%;
  height: 56px;
  background: ${(props) => props.theme.colors.primary};
  border-radius: 28px;
  margin-top: 16px;
  padding: 0 16px;
  color: ${(props) => props.theme.colors.white};
  font-weight: 500;
  transition: 0.2s;

  &:hover {
    background-color: ${shade(0.2, '#1F1EA3')};
  }
`;
