import {useNavigate} from "react-router-dom"
import { useState } from "react"
import { useAuth } from "./security/AuthContext"

export default function LoginComponent() {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [showSuccessMessage, setShowSuccessMessage] = useState(false)
    const [showErrorMessage, setShowErrorMessage] = useState(false)
    const navigate = useNavigate()
    const authContext = useAuth()

    function handleUsernameChange(event) {
        // console.log(event.target.value)
        setUsername(event.target.value)
    }

    function handlePasswordChange(event) {
        // console.log(event.target.value)
        setPassword(event.target.value)
    }

    async function handleSubmit() {
        if (await authContext.login(username, password)) {
            navigate(`/welcome/${username}`)

        } else {
            setShowErrorMessage(true)
        }
    }

    return (
        <div className="Login">
            <h1>Please Login to view Tasks</h1>

            {showSuccessMessage && ( <div className="successMessage">Authenticated Successfully</div>)}
            {showErrorMessage && (<div className="errorMessage">Authentication Failed</div>)}
            <div className="LoginForm">
                <div>
                    <label>User Name</label>
                    <input
                        type="text"
                        name="username"
                        value={username}
                        onChange={handleUsernameChange}
                    ></input>
                </div>

                <div>
                    <label>Password</label>
                    <input
                        type="password"
                        name="password"
                        value={password}
                        onChange={handlePasswordChange}
                    ></input>
                </div>

                <div>
                    <button type="button" name="login" onClick={handleSubmit}>
                        Login
                    </button>
                </div>
            </div>
        </div>
    );
}