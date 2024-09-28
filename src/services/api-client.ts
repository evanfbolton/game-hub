import axios from 'axios'

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: 'f4c7c9e24c24492a919f6bdab10cdc9e'
    }
})