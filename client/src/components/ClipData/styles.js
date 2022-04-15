import styled from "styled-components";

export const ClipDataContainer = styled.div`
    padding: 20px 80px;
    display: flex;
    justify-content: space-between;
`

export const ClipNumberContainer = styled.div`
    display: inline-block;
    max-height: 640px;
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
    background-color: var(--theme-neon-blue);
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
`
