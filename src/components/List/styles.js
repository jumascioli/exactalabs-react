import styled from "styled-components";

export const Wrapper = styled.ul`
  box-shadow: 2px 2px 4px 0.25px rgba(0, 0, 0, 0.3);
  list-style: none;
`;

export const Item = styled.li`
  align-items: center;
  color: #073b4c;
  display: flex;
  height: 50px;
  justify-content: space-between;
  padding: 0 20px;

  :nth-child(odd) {
    background: #f1f1f1;
  }
`;

export const Button = styled.button`
  background: transparent;
  border: 0;
  border-radius: 50%;
  color: #ef4770;
  cursor: pointer;
  height: 24px;
  width: 24px;
  

  :hover {
    opacity: 0.8;
  }

  ::active {
    opacity: 0.6;
  }
`;