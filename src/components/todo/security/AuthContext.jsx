import { createContext, useContext, useState } from "react";
import { executeBasicAuthenticationService } from "../api/HelloWorldApiService";
import { apiClient } from "../api/ApiClient";
//1) create a context
export const AuthContext = createContext()

export const useAuth = () => useContext(AuthContext)

//2)Put some state in the context
//3)Share the created context with other components
export default function AuthProvider({ children }) {
    const [number, setNumber] = useState(0)
    const [isAuthenticated, setAuthenticated] = useState(false)
    const [username, setUsername] = useState(null)
    const [token, setToken] = useState(null)

    // setInterval(()=>setNumber(number+1),10000)

    const valueToBeShared = { isAuthenticated, login, logout, username, token }

    // function login(username, password) {                        *************HARDCODED AUTHENTICATION*************

    //     if (username === "admin" && password === "admin") {
    //         setAuthenticated(true)
    //         setUsername(username)
    //         return true

    //     } else {
    //         setAuthenticated(false)
    //         setUsername(null)
    //         return false

    //     }
    // }
    async function login(username, password) {

        const baToken = 'Basic ' + window.btoa(username + ':' + password)

        try {
            const response = await executeBasicAuthenticationService(baToken)
            if (response.status == 200) {
                setAuthenticated(true)
                setUsername(username)
                setToken(baToken)
                apiClient.interceptors.request.
                return true

            } else {
                logout()
                return false

            }
        } catch (error) {
            logout()
            return false
        }
    }



    function logout() {
        setAuthenticated(false)
        setToken(null)
        setUsername(null)
    }

    return (
        <AuthContext.Provider value={valueToBeShared}>
            {children}
        </AuthContext.Provider>
    )
}

