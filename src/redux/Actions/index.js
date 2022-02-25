import axios from 'axios'



export default function getMenu(menu = 'burger') {
    return  async function(dispatch) {

       await axios.get(`https://api.spoonacular.com/food/menuItems/search?query=${menu}&number=4&apiKey=63a42f1302894afc8e2a571447ed97d2`)
       .then(data => {
        dispatch({
            type: 'GET_MENU',
            payload: data.data.menuItems
        })
       })        
    }
}
export function searchMenu(menu) {
    return  async function(dispatch) {

       await axios.get(`https://api.spoonacular.com/food/menuItems/search?query=${menu}&apiKey=63a42f1302894afc8e2a571447ed97d2`)
       .then(data => {
        dispatch({
            type: 'SEARCH_MENU',
            payload: data.data.menuItems
        })
       })        
    }
}
export function add(id) {
    return {
        type: 'ADD',
        payload: id
    }
}