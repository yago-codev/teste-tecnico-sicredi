import styled from 'styled-components';

export const LayoutGrid = styled.div`
  display: grid;
  grid-template-columns: 70px auto;
  grid-template-rows: 70px auto;
  grid-template-areas:
    'ASIDE HEADER'
    'ASIDE CONTENT';
  position: relative;

  @media (max-width: 420px) {
    grid-template-areas: 'HEADER HEADER' 'CONTENT CONTENT' 'ASIDE ASIDE';
  }
`;
