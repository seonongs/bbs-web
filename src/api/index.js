import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:8080/api'; // 개발
// axios.defaults.baseURL = 'http://49.50.173.46:8080'; // 운영
axios.defaults.headers.post['Content-Type'] = 'application/json;charset=utf-8';
axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';

const bbsCreate = async(param) => {
    return await axios.post("/bbs", param);
}
const bbsList = async(currentPage, pageSize, keyword) => {
    return await axios.get(`/bbs?page=${currentPage}&size=${pageSize}&keyword=${keyword}&sort=id,DESC`);
}
const bbsDetail = async(id) => {
    return await axios.get(`/bbs/${id}`)
}
const bbsUpdate = async(id, param) => {
    return await axios.patch(`/bbs/${id}`, param)
}
const bbsDelete = async(id) => {
    return await axios.delete(`/bbs/${id}`)
}

export {
    bbsCreate,
    bbsList,
    bbsDetail,
    bbsUpdate,
    bbsDelete,
}
