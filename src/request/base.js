
let protocol = process.env.NODE_ENV === 'development' ?'http:' : window.location.protocol
let host = process.env.NODE_ENV === 'development'? 'www.janeyuekeji.com': window.location.host
console.log(`${protocol}//${host}:8188`)
let imgUrlBase = `${protocol}//${host}:8188/file/fileDown?saveName=`
let baseUrl = `${protocol}//${host}:8188`
window.imgUrlBase = imgUrlBase
window.baseUrl = baseUrl
// console.log(window.baseUrl)
const base = {
    egg: window.baseUrl
}

export default base