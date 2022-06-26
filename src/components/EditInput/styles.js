import styled from 'styled-components';
import { v } from "../../styles/variable";

export const SInput = styled.input`
  background-color: transparent;
  width: 8rem;
  border: 0;
  border-radius: 4px;
  font-size: 16px;
  padding: 4px;
  color: grey;
  
  &:hover {
    background-color: #D8DEE9;
    cursor: pointer;
  }

`;

export const SEditInputContainer = styled.div`
  display: flex;
  align-items:flex-end;
  margin-left: ${v.smSpacing};
`;