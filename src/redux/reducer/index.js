import { combineReducers } from 'redux'
import { counterReducer } from './counter/reducer'
import { blogReducer } from './blog/reducer'

export default combineReducers({
	counter: counterReducer,
	allblogs: blogReducer
})
