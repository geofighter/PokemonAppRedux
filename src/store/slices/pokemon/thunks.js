import {setPokemons, stateLoadingPokemons} from "./pokemonSlice";
import { PokemonApi } from "../../../api/pokemonApi";

export const getPokemons = ( page = 0 ) => {

    return async ( dispatch, getState ) => {
        dispatch( stateLoadingPokemons() );

        //TODO: realizar peticion http
        // const resp = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=10&offset=${page * 10}`);
        // const data = await resp.json();
        // console.log(data)

        const { data } = await PokemonApi.get(`pokemon?limit=10&offset=${page * 10}`);
        console.log(data);

        dispatch( setPokemons({ pokemons: data.results, page: page + 1 }) );
    }

}