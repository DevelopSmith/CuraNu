interface IAccordionItem {
    title: string,
    text: string,
    collapsed: Boolean
}

interface IWidgetsData {
	accordion: IAccordionItem[],
	groups: [],
	news: [],
	events: [],
	qualityManual: [],
	myLinks: [],
	directLinks: [],
	blog: {}
}

interface IState {
	widgetsData: IWidgetsData,
	telephoneBookSearchResults: []
}

const initialState: IState = {
	widgetsData: {
		accordion: [],
		groups: [],
		news: [],
		events: [],
		qualityManual: [],
		myLinks: [],
		directLinks: [],
		blog: {}
	},
	telephoneBookSearchResults: [],
}

export default (state: IState = initialState, action: any) => {
	switch (action.type) {
		case 'LOADED_WIDGETS_DATA': {
			state = {
				...state,
				widgetsData: action.payload
			};

            break;
		}

		case 'COLLAPSE_ACCORDION_ITEM': {
			const accordion = state.widgetsData.accordion;
			const itemIndex = action.payload;

			if(accordion && accordion[itemIndex]){
				accordion[itemIndex].collapsed = !accordion[itemIndex].collapsed;
				state.widgetsData = { ...state.widgetsData, accordion }
			}

			state = {
				...state
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