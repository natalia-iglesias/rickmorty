import {useState, useEffect} from 'react';
import axios from 'axios';
import {CHARACTER_URL} from '../constants'
import { connect } from 'react-redux'
import {getCharacters} from '../store/actions/charactersActions'

function CharacterCards() {
    const [characters, setCharacters] = useState([])
    function getCharacters(){
        return axios.get(CHARACTER_URL)
        .then((characters) => setCharacters(characters.data));
    }
    useEffect(() => {
        getCharacters();
    }, []);
    console.log(characters)
    return (
        <div> 
            {characters?.map((e,index) => {
        return(
               <div key={index}>
               <p>{e.name}</p>
               <img 
                src={e.image} alt="img"
                
              />
          </div>
          )
          
       })}
    </div>
  );
}

const mapStateToProps = state => {
    return {
        characters: state.characters
    }
}
const mapDispatchToProps = dispatch => {
    return {
        getCharacters: character => {
             dispatch(getCharacters(character))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CharacterCards)