import * as constants from './constants'
// import {fromJS} from 'immutable'
const initState = {
    tieList:[]
}

const reducer = (state=initState,action) => {
    const newState = JSON.parse(JSON.stringify(state))
    switch (action.type) {
        case constants.SET_TIE_LIST:
            newState.tieList = action.list
            return newState
        default:
            return state
    }
}

export default reducer