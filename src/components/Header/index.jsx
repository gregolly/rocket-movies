/* eslint-disable react/prop-types */
import { Avatar } from "../Avatar"
import { Container, Search } from "./styles"
import { api } from "../../services/api"
import { useAuth } from "../../hooks/auth"
import avatarPlaceholder from '../../assets/avatar_placeholder.svg'

export function Header({ children }) {
    const { user } = useAuth()
    const avatarUrl = user?.avatar ? `${api.defaults.baseURL}/files/${user?.avatar}` : avatarPlaceholder

    return (
        <Container>
            <h1>RocketMovies</h1>
            <Search>{ children }</Search>
            {/* <Input placeholder="Pesquisar pelo título" /> */}
            <Avatar 
                name={user.name}
                src={avatarUrl}
                alt="User's avatar"
            />
        </Container>
    )
}