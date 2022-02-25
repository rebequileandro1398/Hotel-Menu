const initialState = {
   menu: [],
}


export default function reducer(state = initialState, action) {
    switch(action.type) {

        case 'GET_MENU': 
            return {
                ...state,
                menu: action.payload
            }
        case 'SEARCH_MENU': 
            return {
                ...state,
                menu: action.payload
            }
        default: 
            return state;
    }
}