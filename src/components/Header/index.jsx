import { Avatar } from "../Avatar";
import { Input } from "../Input";
import { Container } from "./styles";

export function Header() {
    return (
        <Container>
            <h1>RocketMovies</h1>
            <Input placeholder="Pesquisar pelo título" />
            <Avatar 
                name="Rodrigo Gonçalves" 
                src="https://github.com/gregolly.png"
                alt="User's avatar"
            />
        </Container>
    )
}