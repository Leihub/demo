import  * as constants from './constants'

export const setAccount = (account) =>({
    type:constants.SET_ACCOUNT,
    account
})

export const setPassword = (password) =>({
    type:constants.SET_PASSWORD,
    password
})