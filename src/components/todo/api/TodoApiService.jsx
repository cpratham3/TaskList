import axios from "axios";

const apiClient = axios.create(
    {
        baseURL: 'http://localhost:8080'
    }
)

export function retrieveAllTodosForUsernameApi(username) {
    return apiClient.get(`/users/${username}/todos`)
}

export function deleteTodoApi(username, id) {
    return apiClient.delete(`/users/${username}/todos/${id}`)
}

