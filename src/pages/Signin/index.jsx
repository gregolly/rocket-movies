import { FiMail, FiLock } from 'react-icons/fi'

import { Input } from "../../components/Input"
import { Container, Form, Background } from "./styles"
import { Button } from '../../components/Button'
import { Link } from 'react-router-dom'

export function Signin() {
    return (
        <Container>
            <Form>
                <h1>RocketMovies</h1>
                <h2>Aplicação para acompanhar tudo que assistir.</h2>

                <p>Faça seu login</p>
                <Input placeholder="E-mail" icon={FiMail} />
                <Input placeholder="Senha" icon={FiLock} />
                <Button label="Entrar" />
                <Link to="/register">
                    Criar conta
                </Link>
            </Form>

            <Background />
        </Container>
    )
}