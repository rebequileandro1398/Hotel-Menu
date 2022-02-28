import axios from 'axios'


export default function getMenu(menu = 'burger') {
    return  async function(dispatch) {

       await axios.get(`https://api.spoonacular.com/food/menuItems/search?query=${menu}&number=2&apiKey=63a42f1302894afc8e2a571447ed97d2`)
       .then(data => {
           console.log(data)
        dispatch({
            type: 'GET_MENU',
            payload: data.data.menuItems
        })
       })       
    }
}
export function getMenuVegan(menu = 'veggie') {
    return  async function(dispatch) {

       await axios.get(`https://api.spoonacular.com/food/menuItems/search?query=${menu}&number=2&apiKey=63a42f1302894afc8e2a571447ed97d2`)
       .then(data => {
           console.log(data)
        dispatch({
            type: 'GET_MENU_VEGAN',
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

export function getDetails(id) {
    return  async function(dispatch) {
       await axios.get(`https://api.spoonacular.com/food/menuItems/${id}`)
       .then(data => {
        dispatch({
            type: 'DETAILS_ITEM',
            payload: data.data
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

export function remove(id) {
    return {
        type: 'REMOVE',
        payload: id
    }
}