import styled from "styled-components";

export const ScreenContainer = styled.div`
    width: 260px;
    padding: 16px;
    background: #000;
    min-height: 87px;

    > div {
        color: #808080;
        font-size: 16px;
        word-break:break-all;
    }

    > div:last-child {
        color:#fff;
        font-size: 30px;
    }
`