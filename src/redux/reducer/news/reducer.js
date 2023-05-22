import { initialState } from '../../action/news/state'
import { actionType } from '../../action/news/type'

export const newsReducer = (state = initialState, action) => {
	switch (action.type) {
		case actionType.get_news:
			return { ...state }
		default:
			return state
	}
}
