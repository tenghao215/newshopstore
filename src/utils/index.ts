import {v4 as uuidv4} from 'uuid'
export const getUUID = ()=>{
    // 从本地浏览器中获取uuid
    let uuid_token = localStorage.getItem('UUIDTOKEN')
    // 如果本地不存在uuid，那么就生成一个
    if (!uuid_token){
        uuid_token = uuidv4();
        // 本地在存储
        localStorage.setItem('UUIDTOKEN',uuid_token)
    }
    
    return uuid_token
}

export const setToken = (token)=>{
    localStorage.setItem('token',token)
}

export const getToken = ()=>localStorage.getItem('token') || ''

export const removeToken = ()=>localStorage.removeItem('token')

export const setTradeNo = (tradeNo)=>{
    localStorage.setItem('tradeNo',tradeNo)
}

export const getTradeNo = ()=>localStorage.getItem('tradeNo') || ''

export const removeTradeNo = ()=>localStorage.removeItem('tradeNo')