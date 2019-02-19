import { Api } from './index.js'

const url = "/posts"

export default {
    getAll: () => {
        return Api.get(url)
    }
}