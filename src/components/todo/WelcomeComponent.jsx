import {
    useParams,
    Link
} from "react-router-dom";
import axios from 'axios'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function WelcomeComponent() {
    // const params = useParams()
    // console.log(params.username)
    // alternate way
    const { username } = useParams();

    
   

    function callHelloWorldRestAPI() {
        
         console.log('called');
        axios.get('http://localhost:8080/hello-world')
            .then((response) => successfulResponse(response))
            .catch((error) => errorResponse(error))
            .finally(() => console.log('cleanup'))

    }

    function successfulResponse(response) {
        console.log(response);
    }

    function errorResponse(error) {
        console.log(error);
    }

    return (
        <div className="WelcomeComponent">
            <h1>Welcome To Your List of Tasks {username}</h1>
            <div>Your Tasks <Link to='/todos'>See Task List</Link></div>
            <div>
                <button className='btn btn-success m-5' onClick={callHelloWorldRestAPI}>Call Hello World</button>
            </div>
        </div>
    );
}