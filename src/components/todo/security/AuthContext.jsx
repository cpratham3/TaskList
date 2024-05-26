import { createContext, useContext, useState } from "react";
import { apiClient } from "../api/ApiClient";
import { executeBasicAuthenticationService, executeJwtAuthenticationService } from "../api/AuthenticationApiService";
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
    // async function login(username, password) { ********************BASIC AUTH**************************

    //     const baToken = 'Basic ' + window.btoa(username + ':' + password)

    //     try {
    //         const response = await executeBasicAuthenticationService(baToken)
    //         if (response.status == 200) {
    //             setAuthenticated(true)
    //             setUsername(username)
    //             setToken(baToken)
    //             apiClient.interceptors.request.use(
    //                 (config) => {
    //                     console.log('intercepting and adding a token')
    //                     config.headers.Authorization = baToken
    //                     return config
    //                 }
    //             )
    //             return true

    //         } else {
    //             logout()
    //             return false

    //         }
    //     } catch (error) {
    //         logout()
    //         return false
    //     }
    // }


    async function login(username, password) { // **************************JWT AUTH*************************


        try {
            const response = await executeJwtAuthenticationService(username, password)
            if (response.status == 200) {
                const jwtToken = 'Bearer ' + response.data.token
                setAuthenticated(true)
                setUsername(username)
                setToken(jwtToken)
                apiClient.interceptors.request.use(
                    (config) => {
                        console.log('intercepting and adding a token')
                        config.headers.Authorization = jwtToken
                        return config
                    }
                )
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

