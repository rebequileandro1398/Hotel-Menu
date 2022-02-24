const initialState = {
   menu: []
}


export default function reducer(state = initialState, action) {
    switch(action.type) {

        case 'GET_COUNTRY': 
            return {
                ...state,
                menu: action.payload
            }
        default: 
            return state;
    }
}