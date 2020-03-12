import axios from 'axios'

export default (options) => {

    const instance = axios.create({
        baseURL: '',
        timeout: 5000
    });

    instance.interceptors.request.use(config => {
        //请求前拦截
        return config;
    }, err => {
        console.log(err);

    })

    instance.interceptors.response.use(data => {
        return data.data
    }, err => {
        console.log(err);

    })

    return instance(options);
}