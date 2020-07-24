import Cookie from 'vue-cookie'

export const setCookie = (name, data) => {
  return Cookie.set(name, data)
}

export const getCookie = (name) => {
  return Cookie.get(name)
}

export const reSetCookie = (name) => {
  return new Promise(resolve => {
    Cookie.delete(name)
    resolve()
  })
}
