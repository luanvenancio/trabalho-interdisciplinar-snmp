import styled from "styled-components";
import { v } from "../../styles/variable";
import Button from "./Button";

export const SButton = styled(Button)`
    display: flex;
    border: 1px solid transparent;
    border-radius: .25rem;
    min-width: 4rem;
    min-height: 2.25rem;
    padding: 0 1rem 0 .75rem;
    margin: ${v.smSpacing};
    font-weight: SemiBold;
    background-color: ${props => props.primary ? "#347CFF" : "#D8DEE9"};
    color: ${props => props.primary ? "white" : "black"};
    cursor: pointer;
    align-items: center;
    transition: 0.3s;

    svg{
        margin-right: .5rem;
    }

    &:hover{
        background-color: ${props => props.primary ? "#2C6ADE" : "#c2c7d1"};
    }
`;
