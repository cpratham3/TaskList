import axios from "axios";
const apiClient = axios.create(
    {
        baseURL: 'http://localhost:8080'
    }
)

export function retrieveHelloWorld(){
    return apiClient.get('/hello-world')

}
export const retrieveHelloWorldPathVariable 
= (username) => axios.get(`http://localhost:8080/hello-world/path-variable/${username}`)