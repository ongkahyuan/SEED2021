import axios from "axios";
import { useAuthHeader } from "react-auth-kit";

const api_client = axios.create({
    baseURL:"http://localhost:8000/api"
})

const private_api_client = axios.create({
    baseURL:"http://localhost:8000/api",
    withCredentials:true
})

export async function getRequest(path){
    const response = await api_client.get(path)
    return response
}

export async function postRequest(path,data){
    const response = await api_client.post(path,data)
    return response
}

export async function postRequestProtected(path,data){
    const bearer_token = useAuthHeader
    const response = await private_api_client.post(path,{data},{headers:{"Authorization":bearer_token}})
    return response
}

export async function getRequestProtected(path){
    const bearer_token = useAuthHeader
    const response = await private_api_client.get(path,{headers:{"Authorization":bearer_token}})
    return response
}
