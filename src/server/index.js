import axios from 'axios'

export function getTicket() {
    axios.get('/cgi-bin/token', {
        params: {
            grant_type: 'client_credential',
            appid: 'wxca31d7609965ebc2',//'wx3d8a075ba51e32ca',
            secret: 'eb5bb10322707e9c94dad6c776112cf4'//'f0ff3890d1381e1f7aa2845a8294120f'
        }
    }).then(res => {
        if (res.status === 200) {
            return axios.get('/cgi-bin/ticket/getticket', {
                params: {
                    access_token: res.data.access_token,
                    type: 'jsapi'
                }
            })
        }
    }).then(res => {
        console.log('jsapi_ticket', res);

    })
}

export function getQm() {
    axios.post('/api/user', {
        firstName: 'Fred',
        lastName: 'Flintstone'
    })
}