import { useEffect, useState } from "react";
import { retrieveAllTodosForUsernameApi } from "./api/TodoApiService";
import { deleteTodoApi } from "./api/TodoApiService";

export default function ListTodosComponent() {

    const today = new Date();
    const targetDate = new Date(today.getFullYear() + 12, today.getMonth(), today.getDay())

    const [todos, setTodos] = useState([])
    const [message, setMessage] = useState(null)


    // const todos = [
    //     { id: 1, description: 'Learn AWS', done: false, targetDate: targetDate },
    //     { id: 2, description: 'Learn Kubernetes', done: false, targetDate: targetDate },
    //     { id: 3, description: 'Learn Docker', done: false, targetDate: targetDate },
    //     { id: 4, description: 'Learn Full Stack', done: false, targetDate: targetDate },
    //     { id: 5, description: 'Learn Databases', done: false, targetDate: targetDate },
    // ]


    useEffect(
        () => refreshTodos(), []
    )

    function refreshTodos() {

        retrieveAllTodosForUsernameApi('admin')
            .then((response) => {
                console.log(response)
                setTodos(response.data)
            })
            .catch((error) => console.log(error))

    }
    function deleteTodo(id) {
        console.log('clicked' + id)
        deleteTodoApi('admin', id)
            .then(
                () => {
                    setMessage(` Todo with id : ${id} successfully deleted`)
                    refreshTodos()

                }
                //1) Display message
                //2) Update Todos list

            )
            .catch(error => console.log(error))
    }

    return (
        <div className='container'>
            <h1>Your Task List</h1>
            {message && <div className='alert alert-warning'>{message}</div>}
            <div >
                <table className='table'>
                    <thead>
                        <tr>
                            <th>Description</th>
                            <th>Completed</th>
                            <th>Target Date</th>
                            <th>Delete</th>

                        </tr>
                    </thead>
                    <tbody>
                        {
                            todos.map(todo => (
                                <tr key={todo.id}>
                                    <td>{todo.description}</td>
                                    <td>{todo.done.toString()}</td>
                                    {/* <td>{todo.targetDate.toDateString()}</td> */}
                                    <td>{todo.targetDate.toString()}</td>
                                    <td><button className='btn btn-danger' onClick={() => deleteTodo(todo.id)}>Delete</button></td>
                                </tr>
                            ))
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
}