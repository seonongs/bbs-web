import axios from 'axios';

// 개발
axios.defaults.baseURL = 'http://localhost:8080';

// 운영
// axios.defaults.baseURL = 'http://49.50.173.46:8080';
axios.defaults.headers.post['Content-Type'] = 'application/json;charset=utf-8';
axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';

function bbsList() {
    return axios.get("/api/bbs/", {})
                .then(response => {
                    const {data} = response
                    console.log("R data:", response)
                    this.items = data.content
                    this.totalElements = data.totalElements
                    this.totalPages = data.totalPages
                }).catch(error => {
                    alert(error)
                })
}

export {
    bbsList,
}
