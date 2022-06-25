import styled from "styled-components";
import { v } from "../../styles/variable";

export const SCard = styled.div`
    width: 80vw;
    height: 500px;
    background: ${({ theme }) => theme.bg};
    padding: ${v.lgSpacing};
    border-radius: 10px;
`;

export const SCardHeader = styled.div`
    display:flex;
    justify-content: flex-start;
    flex-flow: column wrap;
`
export const SCardTitle = styled.h1`
    margin-left: ${v.smSpacing};
`;

export const SCardLabel = styled.label`
    color: grey;
    margin-left: ${v.smSpacing};
`;

export const SCardChartContainer = styled.div`
    display: flex;
    justify-self: center;
    align-self: center;
    max-width: 300px;
    max-height: 300px;
    margin: 8px 0;
`;

export const SCardContainer = styled.div`
    display: flex;
    justify-content: flex-start;
    flex-flow: row wrap;
    padding: ${v.smSpacing};
`;
