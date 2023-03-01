import { TOGGLE_FAVORITES, ADD_FAVORITE, REMOVE_FAVORITE } from '../actions/favoritesActions';

const initialState = {
    favorites: [],
    displayFavorites: false
}

const favReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_FAVORITE:
            return {
              
            }
        case REMOVE_FAVORITE:
            return {
       
            }
        case TOGGLE_FAVORITES:
            return {
              
            }
        default:
            return state;
    }
}

export default favReducer;