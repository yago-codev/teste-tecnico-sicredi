import styled from 'styled-components';

export const TooltipContainer = styled.div`
  position: relative;

  span {
    width: 160px;
    background-color: ${(props) => props.theme.colors.primary};
    color: ${(props) => props.theme.colors.quaternary};
    padding: 8px;
    border-radius: 4px;
    font-size: 14px;
    font-weight: 500;
    position: absolute;
    bottom: calc(100% + 12px);
    left: 50%;
    transform: translateX(-50%);

    &::before {
      content: '';
      border-style: solid;
      border-color: ${(props) => props.theme.colors.primary} transparent;
      border-width: 6px 6px 0 6px;
      position: absolute;
      top: 100%;
      left: 56%;
      transform: translateX(-50%);
    }
  }
`;
