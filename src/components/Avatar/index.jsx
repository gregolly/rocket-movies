/* eslint-disable react/prop-types */
// import { Link } from 'react-router-dom'
import { Container } from "./styles"

export function Avatar({ name, src, alt }) {
    return (
        <Container>
            <div>
                <h3>{name}</h3>
                <a href="/">Sair</a>
            </div>
            <img src={src} alt={alt} />
        </Container>
    )
}