import styled from "styled-components";
import { v } from "../../styles/variable";

export const SCard = styled.div`
    width: 60vw;
    height: 100%;
    background: ${({ theme }) => theme.bg};
    padding: ${v.xlSpacing};
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
    justify-content: center;
    align-items: center;
    
    margin: 8px 0;
`;

export const SCardContainer = styled.div`
    display: flex;
    justify-content: flex-start;
    flex-flow: row wrap;
    padding: ${v.smSpacing};
`;
