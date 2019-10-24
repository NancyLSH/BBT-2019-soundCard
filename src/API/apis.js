import {
    baseUrl
} from "./api.config"

export default {
    info: (data) => {
        this.$axios({
            url: baseUrl + "/info",
            method: "post",
            data: data
        }).then(res => {
            console.log(res)
            return res
        }).catch(err => {
            console.log(err)
            return err
        })
    }
}