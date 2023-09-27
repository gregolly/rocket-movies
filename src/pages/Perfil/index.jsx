import { FiArrowLeft, FiCamera, FiUser, FiMail, FiLock } from 'react-icons/fi'
import { HeaderContainer, FormContainer } from "./styles"

import avatarPlaceholder from '../../assets/avatar_placeholder.svg'
import { api } from '../../services/api'

import { Input } from '../../components/Input'
import { Button } from '../../components/Button'
import { NavLink } from 'react-router-dom'
import { useState } from 'react'

import { useAuth } from '../../hooks/auth'

export function Perfil() {
    const { user, updateProfile } = useAuth()
    const [name, setName] = useState(user.name)
    const [email, setEmail] = useState(user.email)
    const [passwordOld, setPasswordOld] = useState('')
    const [passwordNew, setPasswordNew] = useState('')
    const [, setAvatar] = useState(user.avatar)
    const [avatarFile, setAvatarFile] = useState(null)
    
    const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder

    async function handleUpdate(event) {
        event.preventDefault()
        const user = {
            name,
            email,
            password: passwordNew,
            old_password:  passwordOld
        }

        await updateProfile({ user, avatarFile })
    }

    function handleChangeAvatar(event) {
        const file = event.target.files[0]
        setAvatarFile(file)

        const imagePreview = URL.createObjectURL(file)
        setAvatar(imagePreview)
    }

    return (
        <>
            <HeaderContainer>
                <NavLink to="/">
                    <FiArrowLeft />
                    <span>Voltar</span>
                </NavLink>
            </HeaderContainer>
            <FormContainer>
                <div>
                    <img 
                        src={avatarUrl}
                        alt="user avatar" 
                    />
                    <div>
                        <FiCamera size={20} />
                        <input 
                            type="file" 
                            id="avatar" 
                            onChange={handleChangeAvatar}
                        />
                    </div>
                </div>

                <Input 
                    type="text"
                    icon={FiUser} 
                    value={name}
                    className="first-input" 
                    onChange={({ target }) => setName(target.value)}
                />
                <Input 
                    type="text"
                    icon={FiMail} 
                    value={email}
                    onChange={({ target }) => setEmail(target.value)}
                />
                <Input 
                    placeholder="Senha atual" 
                    icon={FiLock} 
                    type="password" 
                    onChange={({ target }) => setPasswordOld(target.value)}
                />
                <Input 
                    placeholder="Nova senha" 
                    type="password" 
                    icon={FiLock} 
                    onChange={({ target }) => setPasswordNew(target.value)}
                />

                <Button
                    loading={true}
                    label="Salvar"
                    issecondary={false}
                    onClick={handleUpdate} 
                />

            </FormContainer>
        </>
    )
}