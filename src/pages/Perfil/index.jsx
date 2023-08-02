import { FiArrowLeft, FiCamera, FiUser, FiMail, FiLock } from 'react-icons/fi'
import { HeaderContainer, FormContainer } from "./styles"

import { Input } from '../../components/Input'
import { Button } from '../../components/Button'

export function Perfil() {
    return (
        <>
            <HeaderContainer>
                <a href="#">
                    <FiArrowLeft />
                    <span>Voltar</span>
                </a>
            </HeaderContainer>
            <FormContainer>
                <div>
                    <img src="https://github.com/gregolly.png" alt="user avatar" />
                    <div>
                        <FiCamera size={20} />
                    </div>
                </div>

                <Input placeholder="Rodrigo Gonçalves" icon={FiUser} className="first-input" />
                <Input placeholder="rodrigo@gmail.com" icon={FiMail} />
                <Input placeholder="Senha atual" icon={FiLock} />
                <Input placeholder="Nova senha" icon={FiLock} />

                <Button label="Salvar" />

            </FormContainer>
        </>
    )
}