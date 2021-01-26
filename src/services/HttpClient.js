const urlBase = 'https://localhost:9091/api'

const readUrl = (url = '') =>
  url.startsWith('http://') || url.startsWith('https://') ? url : `${urlBase}/${url}`

const get = (url = '', headers = {}) => fetch(readUrl(url), {
  method: 'GET',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    ...headers
  }
}).then((response) => response.json())

const post = (url = '', body = {}, headers = {}) => fetch(readUrl(url), {
  method: 'POST',
  body: JSON.stringify(body),
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    ...headers
  }
}).then((response) => response.json())

export default {
  get,
  post
}