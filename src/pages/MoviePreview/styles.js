import styled from 'styled-components'

export const Container = styled.div`
    width: 1200px;
    margin: 0 auto;
    margin-top: 40px;

    overflow-y: auto;

    > a {
        display: flex;
        align-items: center;
        gap: 8px;
        color: #FF859B;
        margin-bottom: 24px;
    }

    .wrapper {
        display: flex;
        align-items: center;
        margin-bottom: 40px;

        img {
            width: 16px;
            height: 16px;      
            border-radius: 50%; 
            margin-right: 8px;
        }

        span {
            color: #F4EDE8;
            font-size: 16px;
            font-weight: 400;
            margin-right: 8px;
        }

        svg {
            margin-right: 8px;
            color: #FF859B;
        }
    }

    .gap {
        gap: 8px;
    }

    h1 {
        margin-bottom: 24px;
    }
    
    > p {
        color: #F4EDE8;
        font-size: 16px;
        font-weight: 400;
        line-height: 1.5;
    }
`