import styled from "styled-components";
import { v } from "../../styles/variable";
import Button from "./Button";

export const SButton = styled(Button)`
    border: 1px solid transparent;
    border-radius: 10px;
    padding: ${v.mdSpacing};
    margin: ${v.smSpacing};
    background-color: ${props => props.primary ? "palevioletred" : "lightgrey"};
    color: ${props => props.primary ? "white" : "black"};
    cursor:pointer;

    &:hover{
        background-color: ${props => props.primary ? "red" : "grey"};
    }
`;
