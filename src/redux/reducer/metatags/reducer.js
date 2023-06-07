import { initialState } from '../../action/metatags/state'
import { actionType } from '../../action/metatags/type'

export const metaTagReducer = (state = initialState, action) => {
    const {type,payload} = action
	switch (type) {
		case actionType.set_meta_tags:
			return { ...state.metatags,payload }
		default:
			return state
	}
}
