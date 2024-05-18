import { createContext, useContext, useState } from "react";
//1) create a context
export const AuthContext = createContext()

export const useAuth = () => useContext(AuthContext)

//2)Put some state in the context
//3)Share the created context with other components
export default function AuthProvider({ children }) {
    const [number, setNumber] = useState(0)
    const [isAuthenticated, setAuthenticated] = useState(false)
    const [username, setUsername] = useState(null)

    // setInterval(()=>setNumber(number+1),10000)

    const valueToBeShared = { isAuthenticated, login, logout, username }

    function login(username, password) {

        if (username === "admin" && password === "admin") {
            setAuthenticated(true)
            setUsername(username)
            return true

        } else {
            setAuthenticated(false)
            setUsername(null)
            return false

        }
    }

    function logout() {
        setAuthenticated(false)
    }

    return (
        <AuthContext.Provider value={valueToBeShared}>
            {children}
        </AuthContext.Provider>
    )
}

