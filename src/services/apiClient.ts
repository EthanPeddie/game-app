import axios from "axios";

export default axios.create({
    baseURL: "https://api.rawg.io/api",
    params: {
        key: '0eb6d7d0a33d4ec7b30ecfa897031521'
    }
})