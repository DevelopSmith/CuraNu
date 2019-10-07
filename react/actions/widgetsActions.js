import { get } from 'axios';

export const loadWidgetsData = () => {
	return dispatch => {
		get('/api/widgets')
		.then(res => {
			if(res.status == 200){
				console.log(res.data);

                dispatch({
                    type: 'LOADED_WIDGETS_DATA',
                    payload: res.data
                });
			}
		})
		.catch(err => console.log('ERROR', err));
	};
}

export const searchInTelephoneBook = search => {
	return dispatch => {
		get(`/api/telephonebook?q=${search}`)
		.then(res => {
			if(res.status == 200){
				console.log(res.data);

                dispatch({
                    type: 'TELEPHONEBOOK_SEARCH_RESULT',
                    payload: res.data
                });
            }
		})
		.catch(err => console.log('ERROR', err));
	};
}