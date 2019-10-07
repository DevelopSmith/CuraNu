import { findIndex } from 'lodash';

export default (state = {
	widgetsData: [],
	telephoneBookSearchResults: [],
}, action) => {
	switch (action.type) {
		case 'LOADED_WIDGETS_DATA': {
			state = {
				...state,
				widgetsData: action.payload
			};

            break;
		}
		
		case 'TELEBOOK_SEARCH_RESULT': {
			state = {
				...state,
				telephoneBookSearchResults: action.payload
			};

            break;
        }

        default:
            break;
	}

	return state;
};