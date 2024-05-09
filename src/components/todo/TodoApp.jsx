
import "./TodoApp.css";
import {
  BrowserRouter,
  Routes,
  Route,
  useNavigate,
  Navigate,
} from "react-router-dom";
import LogoutComponent from "./LogoutComponent";
import FooterComponent from "./FooterComponent";
import HeaderComponent from "./HeaderComponent";
import ListTodosComponent from "./ListTodosComponent";
import ErrorComponent from "./ErrorComponent";
import WelcomeComponent from "./WelcomeComponent";
import LoginComponent from "./LoginComponent";
import AuthProvider from "./security/AuthContext";

function AuthenticatedRoute({ children }) {
  const authContext = useAuth()
  if (authContext.isAuthenticated) { return (children) } else {
    return <Navigate to='/' />
  }
}

export default function TodoApp() {
  return (
    <div className="TodoApp">
      <AuthProvider>
        <BrowserRouter>
          <HeaderComponent />
          <Routes>
            <Route path="/login" element={<LoginComponent />}></Route>
            <Route path="/" element={<LoginComponent />}></Route>
            <AuthenticatedRoute>
              <Route
                path="/welcome/:username"
                element={<WelcomeComponent />}
              ></Route>
            </AuthenticatedRoute>

            <Route path="/todos" element={<ListTodosComponent />}></Route>
            <Route path="/logout" element={<LogoutComponent />}></Route>
            <Route path="/*" element={<ErrorComponent />}></Route>
          </Routes>
          <FooterComponent />
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}













