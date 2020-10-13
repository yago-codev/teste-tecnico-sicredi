import styled from 'styled-components';
import { shade } from 'polished';

import loginBackgroundImg from 'assets/img/loginBackgroundImg.png';

export const LogonContainer = styled.div`
  height: 100vh;
  display: flex;
  align-items: stretch;
`;

export const LogonContent = styled.div`
  width: 100%;
  max-width: 700px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  form {
    display: flex;
    flex-direction: column;
    margin: 80px 0;
    width: 340px;
    text-align: center;

    h1 {
      font-size: 28px;
      margin-bottom: 24px;
      color: ${(props) => props.theme.colors.black};
    }
  }

  > a {
    display: flex;
    align-items: center;
    color: ${(props) => props.theme.colors.brown};
    text-decoration: none;
    transition: color 0.2s;

    &:hover {
      color: ${shade(0.2, '#B66B58')};
    }

    > svg {
      margin-right: 8px;
    }
  }
`;

export const LogonBackground = styled.div`
  flex: 1;
  background: url(${loginBackgroundImg}) no-repeat center left;
  background-size: cover;
`;
