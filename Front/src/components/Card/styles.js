import styled from "styled-components";
import { v } from "../../styles/variable";

export const SCard = styled.div`
    width: 60vw;
    max-height: 100%;
    background: ${({ theme }) => theme.bg};
    padding: ${v.xxlSpacing} ${v.xxlSpacing} ${v.lgSpacing} ${v.xxlSpacing};
    margin-bottom: ${v.xlSpacing};
    border-radius: 10px;
`;

export const SSmallCard = styled.div`
    max-height: 100%;
    background: ${({ theme }) => theme.bg};
    padding: ${v.lgSpacing};
    margin: ${v.mdSpacing};
    border-radius: 12px;
`;

export const SCardHeader = styled.div`
    display:flex;
    justify-content: flex-start;
    flex-flow: column wrap;
    margin-left: ${v.smSpacing};
    margin-bottom: ${v.mdSpacing};
`;

export const SCardTitle = styled.h1`
    font-size: 30px;
    margin-bottom: ${v.mdSpacing};
`;

export const SSmallCardTitle = styled.h1`
    font-size: 18px;
`;

export const SCardLabel = styled.label`
    color: grey;
    font-size: 16px;
`;

export const SCardChartContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 16px 0;
`;

export const SCardInputContainer = styled.div`
    display: flex;
    justify-content: start;
    flex-flow: row wrap;
`;

export const SFeatures = styled.div`
    display: flex;
    justify-content: start;
    flex-flow: row wrap;
`;

export const SCardLabelContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const SCardContainer = styled.div`
    display: flex;
    justify-content: center;
    flex-flow: row wrap;
    padding: ${v.smSpacing};
`;

