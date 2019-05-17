import indexReducer from './../pages/index/store/reducer'
import addReducer from './../pages/add/store/reducer'
import  {reducer as loginReducer}  from './../pages/login/store'

import {combineReducers} from 'redux'

const reducer = combineReducers({
    index:indexReducer,
    add:addReducer,
    login:loginReducer
})

export default reducer