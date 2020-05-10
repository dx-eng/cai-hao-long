import Cookies from 'js-cookie'
const TokenKey = 'x-access-token';
var inFifteenMinutes = new Date(new Date().getTime() + 1200 * 60 * 1000);//设置过期时间
export function getToken() {
  // console.log('cookies:',Cookies.get('x-access-token'))
    return Cookies.get(TokenKey)
}

export function setToken(token) {
    return Cookies.set(TokenKey, token, { expires: inFifteenMinutes })
}

export function removeToken() {
    return Cookies.remove(TokenKey)
}

