import { baseUrl } from "./api.config";
import { fetch as CustomFetch } from "./fetch";
import qs from "qs";
// import wx from "weixin-js-sdk"

export function submitInfo(data) {
  return CustomFetch({
    url: baseUrl + "/info",
    method: "post",
    data: data
  });
}

export function wxconfig() {
  return fetch("https://hemc.100steps.net/2017/wechat/Home/Public/getJsApi", {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded"
    },
    body: qs.stringify({ url: location.href.split("#")[0] })
  }).then(res => res.json());
}
export function submitId(id) {
  return CustomFetch({
    url: baseUrl + "/audio",
    method: "post",
    data: {
      id: id
    }
  });
}
export function report() {
  return CustomFetch({
    url: baseUrl + "/report",
    method: "get"
  });
}
export function getPic() {
  return CustomFetch({
    url: baseUrl + "/report/picture",
    method: "get"
  });
}
export function getText() {
  return CustomFetch({
    url: baseUrl + "/text",
    method: "get"
  });
}
