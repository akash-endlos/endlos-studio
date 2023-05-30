import { combineReducers } from 'redux'
import { counterReducer } from './counter/reducer'
import { blogReducer } from './blog/reducer'
import { careerReducer } from './career/reducer'
import { newsReducer } from './news/reducer'
import { scrollReducer } from './scrolling/reducer'

export default combineReducers({
	counter: counterReducer,
	allblogs: blogReducer,
	allcareers:careerReducer,
	allnews:newsReducer,
	scrollState:scrollReducer
})
