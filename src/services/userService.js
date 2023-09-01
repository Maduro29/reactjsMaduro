import axios from "../axios";
const handleLogin = (email, password) => {
    return axios.post('/api/login', {
        email: email,
        password: password
    });
}

const getUsers = (id) => {
    return axios.get(`/api/get-user?id=${id}`)
}

const addNewUser = (user) => {
    return axios.post('/api/create-user', user)
}

const deleteUser = (id) => {
    return axios.delete('/api/delete-user', {
        data: id
    })
}

export { handleLogin, getUsers, addNewUser, deleteUser };