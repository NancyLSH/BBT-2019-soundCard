import {
    baseUrl
} from "./api.config"
import {
    fetch
} from "./fetch"
// import wx from "weixin-js-sdk"

export function submitInfo(data) {
    return fetch({
        url: baseUrl + "/info",
        method: "post",
        data: data
    })
}

export function wxconfig() {
    return fetch({
        url: "https://hemc.100steps.net/2017/wechat/Home/Public/getJsApi",
        method: "post",
        data: {
            url: location.href
        }
    })
}
export function submitId(id) {
    return fetch({
        url: baseUrl + '/audio',
        method: "post",
        data: {
            id: id
        }
    })
}
export function report() {
    return fetch({
        url: baseUrl + "/report",
        method: "get"
    })
}
export function getPic() {
    return fetch({
        url: baseUrl + "/report/picture",
        method: "get"
    })
}
export function getText() {
    return fetch({
        url: baseUrl + "/text",
        method: "get"
    })
}