const utils_configs: any = {
    axios_opt: {
        withCredentials: true
    },
    cookie_opt: {
        sameSite: true
    },
    jsonwebtoken_opt: {
        headers: {
            alg: "HS256",
            typ: "JWT"
        },
        options: {
            expiresIn: 600000
        }
    }
}
export default utils_configs;