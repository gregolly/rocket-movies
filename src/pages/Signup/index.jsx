import { FiArrowLeft, FiLock, FiMail, FiUser } from "react-icons/fi"
import { Input } from "../../components/Input"
import { Background, Container, Form } from "./styles"
import { Button } from "../../components/Button"
import { Link } from "react-router-dom"

export function Signup() {
    return (
        <Container>
            <Background />

            <Form>
                <h1>RocketMovies</h1>
                <h2>Aplicação para acompanhar tudo que assistir.</h2>

                <p>Crie sua conta</p>
                <Input placeholder="Nome" icon={FiUser} />
                <Input placeholder="E-mail" icon={FiMail} />
                <Input placeholder="Senha" icon={FiLock} />
                <Button label="Cadastrar" />
                <Link to="/">
                    <FiArrowLeft />
                    Voltar para o login
                </Link>
            </Form>
        </Container>
    )
}