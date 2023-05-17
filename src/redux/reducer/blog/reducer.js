import { initialState } from '../../action/blog/state'
import { actionType } from '../../action/blog/type'

export const blogReducer = (state = initialState, action) => {
	switch (action.type) {
		case actionType.get_blog:
			return { ...state }
		default:
			return state
	}
}
