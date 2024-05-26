import axios from "axios";

import { apiClient } from "./ApiClient";

export function retrieveAllTodosForUsernameApi(username) {
    return apiClient.get(`/users/${username}/todos`)
}

export function deleteTodoApi(username, id) {
    return apiClient.delete(`/users/${username}/todos/${id}`)
}

export function retrieveTodoApi(username, id) {
    return apiClient.get(`/users/${username}/todos/${id}`)
}

export const updateTodoApi = (username, id, todo) => apiClient.put(`/users/${username}/todos/${id}`, todo)


export const createTodoApi = (username, todo) => apiClient.post(`/users/${username}/todos`, todo)