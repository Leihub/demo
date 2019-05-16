import indexReducer from './../pages/index/store/reducer'
import addReducer from './../pages/add/store/reducer'

import {combineReducers} from 'redux'

const reducer = combineReducers({
    index:indexReducer,
    add:addReducer
})

export default reducer