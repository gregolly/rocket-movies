import styled from 'styled-components'

export const Container = styled.div`
    padding: 32px;
    border-radius: 16px;
    background: rgba(255, 133, 155, 0.05);

    > h3 {
        color: #F4EDE8;
        font-size: 24px;
        font-weight: 700;
        margin-bottom: 8px;
    }

    > p {
        overflow: hidden;
        color: #999591;
        font-size: 16px;
        font-weight: 400;
        margin-top: 16px;
    }
`

export const StarsWrapper = styled.div``

export const TagsWrapper = styled.div`
    display: flex;
    gap: 8px;
    margin-top: 1rem;
`