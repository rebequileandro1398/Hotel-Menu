import axios from 'axios'
const {API_KEY} = process.env;


export default function getMenu(menu = 'burger') {
    return  async function(dispatch) {

       await axios.get(`https://api.spoonacular.com/food/menuItems/search?query=${menu}&number=2&apiKey=${API_KEY}`)
       .then(data => {
        dispatch({
            type: 'GET_MENU',
            payload: data.menuItems
        })
       })        
    }
}
export function searchMenu(menu) {
    return  async function(dispatch) {

       await axios.get(`https://api.spoonacular.com/food/menuItems/search?query=${menu}&apiKey=${API_KEY}`)
       .then(data => {
        dispatch({
            type: 'SEARCH_MENU',
            payload: data.menuItems
        })
       })        
    }
}