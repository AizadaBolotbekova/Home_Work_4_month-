import axios from "axios"

const baseURL = 'https://pokeapi.co/api/v2/'

export const fetchPokemons = async({limit,offset }) => {
    try {
        const { data } = await axios.get(baseURL + `pokemon/?limit=10&offset=30`)
        return data;
    }catch(e) {

    }
}