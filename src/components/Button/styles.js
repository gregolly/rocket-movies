import styled from 'styled-components'

export const ButtonContainer = styled.button`
    border-radius: 8px;
    background: ${({ theme, issecondary }) => issecondary ? theme.COLORS.BLACK : theme.COLORS.PINK};
    color: ${({ theme, issecondary }) => issecondary ? theme.COLORS.PINK : theme.COLORS.BLACK};
    height: 48px;
    padding: 0 2rem;

    display: flex;
    align-items: center;
    border: none;

    width: 100%;
    justify-content: center;
`