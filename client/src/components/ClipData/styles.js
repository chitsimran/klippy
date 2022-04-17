import styled from "styled-components";

export const ClipDataContainer = styled.div`
    padding: 20px 80px;
    display: flex;
    justify-content: space-between;
`

export const ClipNumberContainer = styled.div`
    display: inline-block;
    max-height: 580px;
    min-height: 580px;
    margin-bottom: 16px;
    overflow-y: scroll;
    scrollbar-width: none; /* Firefox */
    -ms-overflow-style: none;

    ::-webkit-scrollbar { /* WebKit */
    width: 0;
    height: 0;
}
`

export const ClipNumberBlockContainer = styled.div`
    height: 80px;
    width: 80px;
    background-color: ${props => props.isSelected ? 'var(--theme-neon-blue)' : 'var(--theme-mid-blue)'};
    color: var(--theme-dark);
    text-align: center;
    line-height: 80px;
    margin-bottom: 4px;
    border-radius: 4px;

    :hover {
        cursor: pointer;
    }
`

export const ClipDataInputContainer = styled.div`
    width: 1000px;
    margin-right: 80px;
    margin-bottom: 20px;
`

export const ClipLeftBlockContainer = styled.div`
    display: flex;
    flex-direction: column;
`

export const AddCLipButtonContainer = styled.div`
    height: 80px;
    width: 80px;
    background-color: var(--theme-neon-blue);
    color: var(--theme-dark);
    text-align: center;
    line-height: 80px;
    margin-bottom: 4px;
    border-radius: 50%;

    :hover {
        cursor: pointer;
    }
`
