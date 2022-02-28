import swal from 'sweetalert';

const initialState = {
   menu: [],
   order: [],
   details: []
}


export default function reducer(state = initialState, action) {
    switch(action.type) {

        case 'GET_MENU': 
            return {
                ...state,
                menu: action.payload
            }
        case 'GET_MENU_VEGAN':
            return {
                ...state,
                menu: state.menu.concat(action.payload)
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
            : swal({
                title: "Upss!",
                text: "Ya agregaste este plato a tu orden",
                icon: "error",
                timer: 3000
              });  

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
        case 'DETAILS_ITEM':
            return {
                ...state,
                details: action.payload
            }
        default: 
            return state;
    }
}