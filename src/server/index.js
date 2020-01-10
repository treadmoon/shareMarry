import axios from 'axios'

export async function getTicket(param) {
    return await axios.post('http://111.230.241.251:4396/code',param)
}