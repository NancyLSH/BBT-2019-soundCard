import axios from 'axios';

export function fetch(options) {
    return new Promise((resolve, reject) => {
        const instance = axios.create({
            timeout: 30 * 1000 // 30秒超时
        });
        instance(options)
            .then(response => {
                resolve(response);
            })
            .catch(error => {
                console.log('请求异常信息：' + error);
                reject(error);
            });
    });
}
