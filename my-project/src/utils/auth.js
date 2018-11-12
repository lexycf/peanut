import Cookies from 'js-cookie'

const TokenKey = 'jwt'

export function getToken() {
  return Cookies.get(TokenKey)
}

export function setToken(token) {
  return Cookies.set(TokenKey, token,{ expires: 2 })
  // return true;
}

export function removeToken() {
  return Cookies.remove(TokenKey)
}
