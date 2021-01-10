import styled from 'styled-components';

export const Header = styled.div`
  display: flex;
  position: fixed;
  width: 100vw;
  justify-content: space-around;
  background-color: lightblue;
  z-index: 1000;
  height: 75px;
  top: 0;
  left: 0;
`;

export const Content = styled.div`
  border: 1px solid lightgray;
  padding: 5px 0;
  margin-top: ${(props) => props.buffer || 'inherit'};
  display: flex;
  justify-content: space-around;
`;
