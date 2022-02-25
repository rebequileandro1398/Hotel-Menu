const initialState = {
   menu: [],
   order: []
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
        case 'ADD': 
            let filter = state.menu.filter(e => e.id === action.payload)
            return {
                ...state,
                order: state.order.concat(filter)
            }
        case 'REMOVE':
            let remove = state.order.filter(e => e.id !== action.payload)
            return {
                ...state,
                order: remove
            }
        default: 
            return state;
    }
}