import axios from 'axios'

export function getTicket() {
    axios.get('/code').then(res=>{
        console.log('res:',res);
        
    })
}