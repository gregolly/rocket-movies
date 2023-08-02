import styled from 'styled-components'

import backgroundImg from '../../assets/background.png'

export const Container = styled.div`
    height: 100vh;
    display: flex;
    align-items: stretch;
`

export const Form = styled.form`
    padding: 0 136px;

    display: flex;
    flex-direction: column;
    justify-content: center;

    > h1 {
        font-size: 3rem;
        color: ${({ theme }) => theme.COLORS.ORANGE};
    }

    > h2 {
        color: #CAC4CF;
        font-size: 14px;
        margin-bottom: 48px;
    }

    > p {
        color: #F4EDE8;
        font-size: 24px;
        font-weight: 500;
        margin-bottom: 48px;

    }

    > a {
        color: ${({ theme }) => theme.COLORS.PINK};
        margin-top: 42px;
        display: flex;
        align-items: center;
        justify-content: center;
    }
`

export const Background = styled.div`
    flex: 1;
    background: url(${backgroundImg}) no-repeat center center;
    background-size: cover;
`