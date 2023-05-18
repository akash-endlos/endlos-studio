import { combineReducers } from 'redux'
import { counterReducer } from './counter/reducer'
import { blogReducer } from './blog/reducer'
import { careerReducer } from './career/reducer'

export default combineReducers({
	counter: counterReducer,
	allblogs: blogReducer,
	allcareers:careerReducer
})
