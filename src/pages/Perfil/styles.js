import styled from 'styled-components'

export const HeaderContainer = styled.header`
    height: 144px;
    background: rgba(255, 133, 155, 0.05);
    display: flex;
    align-items: center;
    padding-left: 144px;

    > a {
        color: #FF859B;
        font-size: 16px;
        font-weight: 400;
        display: flex;
        align-items: center;
        gap: 8px;
    }
`

export const FormContainer = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 340px;
    margin: 0 auto;

    .first-input {
        margin-top: 64px;
    }

    > div {
        position: relative;

        img {
            border-radius: 50%;
            margin-top: -90px;
            width: 186px;
            height: 186px;
        }
        
        div {
            background-color: #FF859B;
            position: absolute;
            right: 20px;
            top: 60px;
            border-radius: 50%;
            padding: 14px;

            svg {
                color: #000;
            }
        }
    }

    button {
        margin-top: 24px;
    }
`