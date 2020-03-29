import axios from 'axios'

export default (options) => {

    const instance = axios.create({
        baseURL: 'http://123.207.32.32:8000',
        timeout: 5000
    });

    instance.interceptors.request.use(config => {
        console.log(config);
        if (config.url.indexOf('public') != -1) {
            config.baseURL = 'https://api-ugo-web.itheima.net';
        }
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