import { put, takeEvery} from 'redux-saga/effects'; 
import {setTieList} from '../pages/index/store/actionCreator'
import {postTie} from '../pages/index/store/actionCreator'
import * as indexConstants from '../pages/index/store/constants'
import * as addConstants from '../pages/add/store/constants'
import axios from 'axios'

function *getList(){
    try {
        const res = yield axios.get('http://localhost:3001/api/ties',{
            withCredentials: true
        })
        console.log(res.data);
        const action = setTieList(res.data)
        yield put(action)
    } catch (error) {
        console.log(error)
    }
}

// function *postTieData(){
//     try {
//         console.log(res.data);
//         const action = setTieList(res.data)
//         yield put(action)
//     } catch (error) {
//         console.log(error)
//     }
// }

function *rootSaga(){
    yield takeEvery(indexConstants.GET_TIE_LIST,getList)
    // yield takeEvery(addConstants.POST_TIE,postTieData)
}

export default rootSaga