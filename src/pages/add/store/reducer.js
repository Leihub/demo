import * as constants from './constants'

const initState = {
  title: '',
  content: '写点什么吧...'
}

const reducer = (state = initState, action) => {
  const newState = JSON.parse(JSON.stringify(state))
  switch(action.type){
    case constants.SET_TITLE:
      newState.title = action.title
      return newState
    case constants.SET_CONTENT:
      newState.content = action.content
      return newState
    default:
      return state
  }
}
export default reducer
