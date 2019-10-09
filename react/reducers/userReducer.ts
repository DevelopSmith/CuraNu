interface IState {
	user: Object
}

const initialState: IState = {
	user: {}
}

export default (state: IState = initialState, action: any) => {
    switch(action.type){
        case 'LOADED_USER_DETAILS':
            state = {
                ...state,
                ...action.payload
            }

            break;
        
        default:
            break;
    }

    return state;
};