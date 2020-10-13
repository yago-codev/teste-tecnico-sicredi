import styled from 'styled-components';
import { shade } from 'polished';

export const TableContainer = styled.div`
  background-color: ${(props) => props.theme.colors.white};
  border-radius: 8px;
  padding: 16px 8px;
`;

export const TableTopContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0px 16px 16px 16px;

  @media (max-width: 420px) {
    flex-direction: column;
    padding: 0;
    margin-bottom: 16px;
  }
`;

export const TableFilterContainer = styled.div`
  width: 300px;
  display: flex;
  align-items: center;
  border: 2px solid ${(props) => props.theme.colors.quinary};
  border-radius: 24px;
  padding: 8px 10px;

  svg {
    margin-right: 8px;
  }

  input {
    flex: 1;

    &::placeholder {
      color: ${(props) => props.theme.colors.tertiary};
    }
  }

  @media (max-width: 420px) {
    width: 100%;
  }
`;

export const TableButtonContainer = styled.div`
  display: flex;
  align-items: center;

  a {
    text-decoration: none;
  }

  @media (max-width: 420px) {
    width: 100%;
    margin-top: 8px;

    a {
      flex: 1;
    }
  }
`;

export const TableCustomButton = styled.button`
  display: flex;
  align-items: center;
  background-color: ${(props) => props.theme.colors.greenSecondary};
  color: ${(props) => props.theme.colors.greenPrimary};
  padding: 8px 16px;
  border-radius: 24px;
  transition: 0.2s;

  &:hover {
    background-color: ${shade(0.2, '#D2F3D3')};
  }

  > svg {
    font-size: 20px;
    margin-right: 8px;
  }

  @media (max-width: 420px) {
    width: 100%;
    justify-content: center;
  }
`;

export const TableContent = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

export const TableHeader = styled.thead`
  text-align: left;
  background-color: ${(props) => props.theme.colors.quaternary};
  color: ${(props) => props.theme.colors.gray};

  tr {
    th {
      width: 16.66%;
      padding: 8px 16px;
      font-weight: 500;
    }

    th:first-child {
      width: 96px;
      border-top-left-radius: 8px;
      border-bottom-left-radius: 8px;
    }

    th:last-child {
      border-top-right-radius: 8px;
      border-bottom-right-radius: 8px;
    }

    @media (max-width: 420px) {
      th:nth-child(2) {
        border-top-left-radius: 8px;
        border-bottom-left-radius: 8px;
      }

      th:nth-child(6) {
        border-top-right-radius: 8px;
        border-bottom-right-radius: 8px;
      }

      th:nth-child(1),
      th:nth-child(3),
      th:nth-child(4) {
        display: none;
      }
    }
  }
`;

export const TableBody = styled.tbody`
  tr {
    padding: 8px 0;

    &:last-child {
      padding-top: 8px;
    }

    &:nth-child(even) {
      background-color: ${(props) => props.theme.colors.graySecondary};
    }

    td {
      width: 16.66%;
      padding: 8px 16px;
      color: ${(props) => props.theme.colors.black};
      text-transform: capitalize;

      &:first-child {
        border-top-left-radius: 8px;
        border-bottom-left-radius: 8px;
      }

      &:last-child {
        border-top-right-radius: 8px;
        border-bottom-right-radius: 8px;
      }

      .first-button,
      .second-button {
        display: flex;
        align-items: center;
        padding: 8px 16px;
        border-radius: 24px;
        transition: 0.2s;

        a {
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          text-decoration: none;

          svg {
            font-size: 20px;
            margin-right: 8px;
          }
        }
      }

      .first-button {
        background-color: #e8e5fc;

        a {
          color: ${shade(0.2, '#d4cef8')};
        }

        &:hover {
          background-color: ${shade(0.1, '#e8e5fc')};
        }
      }

      .second-button {
        display: flex;
        align-items: center;
        background-color: ${(props) => props.theme.colors.redSecondary};
        color: ${(props) => props.theme.colors.redPrimary};

        svg {
          font-size: 20px;
          margin-right: 8px;
        }

        &:hover {
          background-color: ${shade(0.1, '#ff7675')};
        }
      }

      @media (max-width: 420px) {
        width: 33.3%;

        &:nth-child(2) {
          border-top-left-radius: 8px;
          border-bottom-left-radius: 8px;
        }

        &:nth-child(6) {
          border-top-right-radius: 8px;
          border-bottom-right-radius: 8px;
        }

        &:nth-child(1),
        &:nth-child(3),
        &:nth-child(4) {
          display: none;
        }
      }

      .second-button {
        padding: 8px 10px;
      }
    }
  }
`;
