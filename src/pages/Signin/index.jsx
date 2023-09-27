import { FiMail, FiLock } from 'react-icons/fi'

import { useAuth } from '../../hooks/auth'

import { Input } from "../../components/Input"
import { Container, Form, Background } from "./styles"
import { Button } from '../../components/Button'
import { Link } from 'react-router-dom'
import { useState } from 'react'

export function Signin() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const { signIn } = useAuth()

    function handleSignIn(event) {
        event.preventDefault()
        signIn({email, password })
    }

    return (
        <Container>
            <Form>
                <h1>RocketMovies</h1>
                <h2>Aplicação para acompanhar tudo que assistir.</h2>

                <p>Faça seu login</p>
                <Input 
                    type="text"
                    placeholder="E-mail" 
                    icon={FiMail} 
                    value={email}
                    onChange={({ target }) => setEmail(target.value)}
                />
                <Input 
                    type="password"
                    placeholder="Senha" 
                    icon={FiLock} 
                    value={password}
                    onChange={({ target }) => setPassword(target.value)}
                />
                <Button 
                    label="Entrar" 
                    onClick={handleSignIn}
                    loading
                />
                <Link to="/register">
                    Criar conta
                </Link>
            </Form>

            <Background />
        </Container>
    )
}