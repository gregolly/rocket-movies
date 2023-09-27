/* eslint-disable react/prop-types */
import { createContext, useContext, useState, useEffect } from "react"

import { api } from '../services/api'
import { TOKEN_KEY, USER_KEY } from "../utils/tokens"

export const AuthContext = createContext({})

// eslint-disable-next-line react-refresh/only-export-components
export function useAuth() {
    const context = useContext(AuthContext)

    return context
}

export function AuthProvider({ children }) {
    const [data, setData] = useState({})

    async function signIn({ email, password}) {
        try {
            const response = await api.post("/sessions", { email, password })
            const { user, token } = response.data

            localStorage.setItem(USER_KEY, JSON.stringify(user))
            localStorage.setItem(TOKEN_KEY, token)

            api.defaults.headers.common['Authorization'] = `Bearer ${token}`
            setData({ user, token})
        } catch(error) {
            if(error.response) {
                alert(error.response.data.message)
            } else {
                alert("Nao foi possivel entrar!")
            }
        }
    }

    const signOut = () => {
        localStorage.removeItem(TOKEN_KEY)
        localStorage.removeItem(USER_KEY)

        setData({})
    }

    async function updateProfile({ user, avatarFile }) {
        try {

            if(avatarFile) {
                const fileUploadForm = new FormData()
                fileUploadForm.append("avatar", avatarFile)

                const response = await api.patch('/users/avatar', fileUploadForm)
                user.avatar = response.data.avatar
            }

            await api.put("/users", user)
            localStorage.setItem(USER_KEY, JSON.stringify(user))

            setData({ user, token: data.token})
            alert("Perfil atualizado!")
        } catch(error) {
            if(error.response) {
                alert(error.response.data.message)
            } else {
                alert("Nao foi possivel atualizar o perfil!")
            }
        }
    }

    useEffect(() => {
        const token = localStorage.getItem(TOKEN_KEY)
        const user = localStorage.getItem(USER_KEY)

        if(token && user) {
            api.defaults.headers.common['Authorization'] = `Bearer ${token}`

            setData({
                token,
                user: JSON.parse(user),
            })
        }
    }, [])

    return (
        <AuthContext.Provider value={{ 
            signIn,
            signOut,
            updateProfile,
            user: data.user,
        }}>
        { children }
        </AuthContext.Provider>
    )
}
