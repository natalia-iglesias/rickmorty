import {GET_CHARACTERS} from '../actions/charactersActions'

const initialState = {
    characters: []
}

const reducer = (state = initialState, action) => { 
    switch(action.type){
        case GET_CHARACTERS:
            return {
                ...state,
                character: action.payload,
            };
         default:
            return{
                ...state,
            }; 
    }
};
export default reducer;