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
            let filter;
            let check = state.order.filter(e => e.id === action.payload)
            check.length === 0 ? filter = state.menu.filter(e => e.id === action.payload) 
            : alert('Ya agregaste este plato a tu orden')

            return {
                ...state,
                order: filter ? state.order.concat(filter) : state.order
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