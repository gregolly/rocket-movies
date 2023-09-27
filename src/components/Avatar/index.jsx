/* eslint-disable react/prop-types */
// import { Link } from 'react-router-dom'
import { NavLink, useNavigate } from "react-router-dom"
import { useAuth } from "../../hooks/auth"
import { Container } from "./styles"

export function Avatar({ name, src, alt }) {
    const { signOut } = useAuth()
    const navigate = useNavigate()

    function handleSignOut() {
        signOut()
        navigate("/")
    }
    
    return (
        <Container>
            <NavLink to="/perfil">
                <div>
                    <h3>{name}</h3>
                    <button onClick={handleSignOut}>Sair</button>
                </div>
                <img src={src} alt={alt} />
            </NavLink>
        </Container>
    )
}