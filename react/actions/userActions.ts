import axios from 'axios';

export const loadUserDetails = () => {
	return (dispatch: any) => {
		axios.get('/api/user/1', {
			// headers: {
			// 	'Authorization': `Bearer ${localStorage.curanuToken}`
			// }
		})
		.then((res: any) => {
			if(res.status == 200){
                dispatch({
                    type: 'LOADED_USER_DETAILS',
                    payload: res.data
                });
            }
		})
		.catch((err: any) => console.log('ERROR', err));
	};
}