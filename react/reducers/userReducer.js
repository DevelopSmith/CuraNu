export default (state = {
    user: {}
}, action) => {
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