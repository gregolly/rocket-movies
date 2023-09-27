import styled from 'styled-components'

export const Container = styled.form`
    padding: 40px 120px 85px;

    a {
        color: #FF859B;
        gap: 8px;
        display: flex;
        align-items: center;
    }

    h3 {
        color: #F4EDE8;
        font-size: 36px;
        font-weight: 500;
        margin-top: 24px;
    }

    .wrapper {
        display: flex;
        gap: 40px;
        margin-top: 40px;
    }

    textarea {
        width: 100%;
        border-radius: 10px;
        background: #262529;
        color: #FFFFFF;
        height: 274px;
        padding: 19px 16px;
        border: none;
        margin-top: 40px;
    }
`

export const BookmarksContainer = styled.div`
    h4 {
        margin-top: 40px;
        margin-bottom: 24px;
    }
`

export const Bookmarks = styled.div`
    border-radius: 8px;
    background: #0D0C0F;
    padding: 16px;
    display: flex;
    gap: 24px;
`

export const ButtonContainer = styled.div`
    display: flex;
    gap: 40px;
    margin-top: 40px;
`