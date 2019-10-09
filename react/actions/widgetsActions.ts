import axios from 'axios';

interface IMicroblog {
    author: string,
    url: string,
    content: string,
    image: string,
    date: Date
}

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
		axios.get(`/api/widgets/telephonebook?q=${search}`)
		.then(res => {
			if(res.status == 200){
				if(!res.data.length){
					alert('No Results Found!');
				}

                dispatch({
                    type: 'TELEPHONEBOOK_SEARCH_RESULT',
                    payload: res.data
                });
            }
		})
		.catch((err: any) => {
			console.log('ERROR', err)
			alert('No Results Found!');
		});
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

export const createMicroblog = (microblog: IMicroblog) => {
	return (dispatch: any) => {
		axios.post(`/api/widgets/microblog`, microblog)
		.then(res => {
			if(res.status == 200){
                dispatch({
                    type: 'CREATED_MICROBLOG',
                    payload: res.data
                });
            }
		})
		.catch((err: any) => {
			console.log('ERROR', err)
		});
	};

}


export const uploadFile = (file: File) => {
	const formData = new FormData();
	formData.append('file',file);

	const config = {
		headers: {
			'Content-Type': 'multipart/form-data'
		}
	}

	return (dispatch: any) => {
		axios.post('/api/widgets/upload-file', formData, config)
		.then((res) => {
			dispatch({
				type: 'UPLOADED_NEW_FILE',
				payload: res.data,
			});
		});
	}
}
