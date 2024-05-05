import { useState } from "react";
import "./TodoApp.css";
import {
  BrowserRouter,
  Routes,
  Route,
  useNavigate,
  useParams,
  Link
} from "react-router-dom";
import LogoutComponent from "./LogoutComponent";
import FooterComponent from "./FooterComponent";

export default function TodoApp() {
  return (
    <div className="TodoApp">

      <BrowserRouter>
        <HeaderComponent />
        <Routes>
          <Route path="/login" element={<LoginComponent />}></Route>
          <Route path="/" element={<LoginComponent />}></Route>
          <Route
            path="/welcome/:username"
            element={<WelcomeComponent />}
          ></Route>

          <Route path="/todos" element={<ListTodosComponent />}></Route>
          <Route path="/logout" element={<LogoutComponent />}></Route>
          <Route path="/*" element={<ErrorComponent />}></Route>
        </Routes>
        <FooterComponent />
      </BrowserRouter>

    </div>
  );
}

function LoginComponent() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [showErrorMessage, setShowErrorMessage] = useState(false);
  const navigate = useNavigate();

  function handleUsernameChange(event) {
    // console.log(event.target.value);
    setUsername(event.target.value);
  }

  function handlePasswordChange(event) {
    // console.log(event.target.value);
    setPassword(event.target.value);
  }

  function handleSubmit() {
    if (username === "admin" && password === "admin") {
      console.log("success");
      setShowSuccessMessage(true);
      setShowErrorMessage(false);
      navigate(`/welcome/${username}`);
    } else {
      console.log("auth failed");
      setShowSuccessMessage(false);
      setShowErrorMessage(true);
    }
  }

  return (
    <div className="Login">
      <h1>Please Login to view Tasks</h1>

      {showSuccessMessage && (
        <div className="successMessage">Authenticated Successfully</div>
      )}
      {showErrorMessage && (
        <div className="errorMessage">Authentication Failed</div>
      )}
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

function WelcomeComponent() {
  // const params = useParams()
  // console.log(params.username)
  // alternate way
  const { username } = useParams();
  console.log(username);

  return (
    <div className="WelcomeComponent">
      <h1>Welcome To Your List of Tasks {username}</h1>
      <div>Your Tasks <Link to='/todos'>See Task List</Link></div>
    </div>
  );
}

function ErrorComponent() {
  return (
    <>
      <div className="ErrorComponent">
        <h1>We are working on the page. Apologies for the 404</h1>
      </div>
    </>
  );
}

function ListTodosComponent() {

  const today = new Date();
  const targetDate = new Date(today.getFullYear() + 12, today.getMonth(), today.getDay())

  const todos = [
    { id: 1, description: 'Learn AWS', done: false, targetDate: targetDate },
    { id: 2, description: 'Learn Kubernetes', done: false, targetDate: targetDate },
    { id: 3, description: 'Learn Docker', done: false, targetDate: targetDate },
    { id: 4, description: 'Learn Full Stack', done: false, targetDate: targetDate },
    { id: 5, description: 'Learn Databases', done: false, targetDate: targetDate },
  ]


  return (
    <div className='container'>
      <h1>Your Task List</h1>
      <div >
        <table className='table'>
          <thead>
            <tr>
              <td>Id</td>
              <td>Description</td>
              <td>Completed</td>
              <td>Target Date</td>

            </tr>
          </thead>
          <tbody>
            {
              todos.map(todo => (
                <tr key={todo.id}>
                  <td>{todo.id}</td>
                  <td>{todo.description}</td>
                  <td>{todo.done.toString()}</td>
                  <td>{todo.targetDate.toDateString()}</td>
                </tr>
              ))
            }

          </tbody>
        </table>
      </div>
    </div>
  );
}

function HeaderComponent() {
  return (

    <header className="border-bottom border-light border-5 mb-5 p-2">
      <div className="container">
        <div className="row">
          <nav className="navbar navbar-expand-lg">
            <a className="navbar-brand ms-2 fs-2 fw-bold text-black" href="https://github.com/cpratham3">TaskList</a>
            <div className="collapse navbar-collapse">
              <ul className="navbar-nav">
                <li className="nav-item fs-5"><Link className="nav-link" to="/welcome/admin">Home</Link></li>
                <li className="nav-item fs-5"><Link className="nav-link" to="/todos">Todos</Link></li>
              </ul>
            </div>
            <ul className="navbar-nav">
              <li className="nav-item fs-5"><Link className="nav-link" to="/login">Login</Link></li>
              <li className="nav-item fs-5"><Link className="nav-link" to="/logout">Logout</Link></li>
            </ul>
          </nav>
        </div>
      </div>
    </header>


  );
}



