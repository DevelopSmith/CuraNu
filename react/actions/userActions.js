import { get } from 'axios';

export const loadUserDetails = () => {
	return dispatch => {
		get('/api/user/1', {
			// headers: {
			// 	'Authorization': `Bearer ${localStorage.curanuToken}`
			// }
		})
		.then(res => {
			if(res.status == 200){

                dispatch({
                    type: 'LOADED_USER_DETAILS',
                    payload: res.data
                });
            }
		})
		.catch(err => console.log('ERROR', err));
	};
}