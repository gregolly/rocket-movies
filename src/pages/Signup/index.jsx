import { FiArrowLeft, FiLock, FiMail, FiUser } from "react-icons/fi"
import { Input } from "../../components/Input"
import { Background, Container, Form } from "./styles"
import { Button } from "../../components/Button"
import { Link, useNavigate } from "react-router-dom"
import { useState } from "react"

import { api } from '../../services/api'

export function Signup() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    
    const navigate = useNavigate()

    function handleSignUp(event) {
        event.preventDefault()
        if (!name || !email || !password) {
            alert("Preencha todos os campos!")
        }

        api.post("/users", { name, email, password })
        .then(() => {
            alert("Usuario cadastrado com sucesso!")
            navigate("/")
        })
        .catch(error => {
            if(error.response) {
                alert(error.response.data.message)
            } else {
                alert("Nao foi possivel cadastrar")
            }
        })
    }

    return (
        <Container>
            <Background />

            <Form>
                <h1>RocketMovies</h1>
                <h2>Aplicação para acompanhar tudo que assistir.</h2>

                <p>Crie sua conta</p>
                <Input 
                    type="text"
                    placeholder="Nome" 
                    icon={FiUser} 
                    value={name}
                    onChange={({ target }) => setName(target.value)}
                />
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
                    label="Cadastrar"
                    loading
                    onClick={handleSignUp}
                />
                <Link to="/">
                    <FiArrowLeft />
                    Voltar para o login
                </Link>
            </Form>
        </Container>
    )
}