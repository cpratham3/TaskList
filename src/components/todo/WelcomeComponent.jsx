import {
    useParams,
    Link
  } from "react-router-dom";
export default function WelcomeComponent() {
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