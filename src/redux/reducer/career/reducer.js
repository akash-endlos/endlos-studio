import { initialState } from '../../action/career/state'
import { actionType } from '../../action/career/type'

export const careerReducer = (state = initialState, action) => {
	switch (action.type) {
		case actionType.get_career:
			return { ...state }
		default:
			return state
	}
}
