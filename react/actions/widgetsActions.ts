import axios from 'axios';

export const loadWidgetsData = () => {
	return (dispatch: any) => {
		axios.get('/api/widgets')
		.then(res => {
			if(res.status == 200){
                dispatch({
                    type: 'LOADED_WIDGETS_DATA',
                    payload: res.data
                });
			}
		})
		.catch((err: any) => console.log('ERROR', err));
	};
}

export const searchInTelephoneBook = (search: string) => {
	return (dispatch: any) => {
		axios.get(`/api/telephonebook?q=${search}`)
		.then(res => {
			if(res.status == 200){
                dispatch({
                    type: 'TELEPHONEBOOK_SEARCH_RESULT',
                    payload: res.data
                });
            }
		})
		.catch((err: any) => console.log('ERROR', err));
	};
}

export const collapseAccordionItem = (itenIndex: number) => {
    return (dispatch: any) => {
		return dispatch({
			type: 'COLLAPSE_ACCORDION_ITEM',
			payload: itenIndex
		});
	}
}