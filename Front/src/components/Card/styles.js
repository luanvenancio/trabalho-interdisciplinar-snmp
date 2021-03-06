import styled from "styled-components";
import { v } from "../../styles/variable";

export const SCard = styled.div`
    width: 60vw;
    max-height: 100%;
    background: ${({ theme }) => theme.bg};
    padding: ${v.xxlSpacing} ${v.xxlSpacing} ${v.xlSpacing} ${v.xxlSpacing};
    margin-bottom: ${v.xlSpacing};
    border-radius: .5rem;
    box-shadow: 0 0 #0000, 0 0 #0000,0 1px 3px 0 rgba(0,0,0,.1), 0 1px 2px -1px rgba(0,0,0,.1);
`;

export const SSmallCard = styled.div`
    max-height: 100%;
    background: ${({ theme }) => theme.bg};
    padding: ${v.lgSpacing};
    margin: ${v.mdSpacing} ${v.lgSpacing} ${v.lgSpacing} 0;
    border-radius: .5rem;
    box-shadow: 0 0 #0000, 0 0 #0000,0 1px 3px 0 rgba(0,0,0,.1), 0 1px 2px -1px rgba(0,0,0,.1);

    @media(min-width: 1200px) {
        max-width: 15vw;
  }
`;

export const SCardHeader = styled.div`
    display: flex;
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
    margin-bottom: ${v.smSpacing};
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
    width: 100%;
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

export const SIconBackground = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    background: #ffc0c0;
    width: 3rem;
    height: 3rem;
    border-radius: 50%;
    margin-bottom: ${v.mdSpacing};
`;

export const SCardImage = styled.div`
    display: flex;
    align-items: ${(props) => props.align};
    justify-content: ${(props) => props.align};

    img {
        width: ${(props) => props.width};
        height: auto;
    }
    cursor: pointer;

    margin-bottom: ${v.mdSpacing};
`;

