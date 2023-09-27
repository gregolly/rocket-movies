import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    align-items: center;
    gap: 8px;

    > a {
        display: flex;
        align-items: center;
        gap: 8px;
    }

    div {
        h3 {
            color: #F4EDE8;
            font-size: 14px;
            font-weight: 700;
        }

        button {
            color: #948F99;
            font-size: 14px;
            font-weight: 400;
            background-color: transparent;
            border: none;
        }
    }

    img {
        width: 64px;
        height: 64px;
        border-radius: 50%;
    }
`