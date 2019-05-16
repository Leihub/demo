import * as constants from './constants'
export const setTieList = (list) => ({
    type:constants.SET_TIE_LIST,
    list
})

export const getTieList = () => ({
    type:constants.GET_TIE_LIST,
})



