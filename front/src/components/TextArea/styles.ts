import styled, { css } from 'styled-components';

interface ITextAreaContainer {
  isFocused: boolean;
  isFilled: boolean;
  isErrored: boolean;
}

interface ITextAreaError {
  isErrored: boolean;
}

export const TextAreaContainer = styled.div<ITextAreaContainer>`
  width: 100%;
  height: 136px;
  display: flex;
  align-items: center;
  background: ${(props) => props.theme.colors.quaternary};
  border-radius: 28px;
  padding: 16px;
  transition: all 0.2s;

  ${(props) =>
    props.isFocused
      ? css`
          border: 2px solid ${(props) => props.theme.colors.primary};
          color: ${(props) => props.theme.colors.primary};
          background-color: ${(props) => props.theme.colors.white};
        `
      : css`
          border: 2px solid ${(props) => props.theme.colors.secondary};
        `};

  ${(props) =>
    props.isErrored &&
    css`
      border-color: ${(props) => props.theme.colors.redPrimary};
    `};

  & + div {
    margin-top: 8px;
  }

  textarea {
    flex: 1;
    height: 100%;
    border: 0;
    background-color: transparent;
    color: ${(props) => props.theme.colors.black};
    font-family: 'Roboto', sans-serif;
  }

  > svg {
    margin-right: 8px;

    ${(props) =>
      (props.isFocused || props.isFilled) &&
      css`
        stroke: ${(props) => props.theme.colors.primary};
      `};
  }
`;

export const TextAreaError = styled.div<ITextAreaError>`
  display: flex;
  height: 20px;
  margin-left: 16px;

  &:hover {
    span {
      visibility: visible;
      opacity: 1;
    }
  }

  svg {
    margin: 0;
    stroke: ${(props) => props.theme.colors.redPrimary};
  }

  > div {
    span {
      visibility: hidden;
      opacity: 0;
      transition: opacity 0.4s;

      ${(props) =>
        props.isErrored &&
        css`
          background-color: ${(props) => props.theme.colors.redPrimary};
        `};

      &::before {
        border-color: ${(props) => props.theme.colors.redPrimary} transparent;
      }
    }
  }
`;
