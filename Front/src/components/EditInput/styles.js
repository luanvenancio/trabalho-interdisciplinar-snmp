import styled from 'styled-components';
import { v } from "../../styles/variable";

export const SInput = styled.input`
  background-color: transparent;
  width: 9.15rem;
  border: 0;
  border-radius: 4px;
  font-size: 16px;
  padding: .25rem .25rem .25rem 1.5rem;
  box-sizing: border-box;
  color: grey;
  
  &:hover {
    background-color: ${({ theme }) => theme.bg3};
    cursor: pointer;
  }

  &:focus {
    background-color: transparent;
  }

`;

export const SIcon = styled.div`
  box-sizing: border-box;
  height: 1.5rem;
  width: 1.5rem;
  padding: 4px;
  position: absolute;
  top: 50%;
  left: 2px;
  transform: translateY(-50%);
`

export const SEditInputContainer = styled.div`
  position:relative;
  margin-left: ${v.smSpacing};
`;