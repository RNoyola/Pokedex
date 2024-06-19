import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const pokemonApi = createApi({
  reducerPath: 'pokemonApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://pokeapi.co/api/v2/' }),
  endpoints: (builder) => ({
    getPokemonByLimit: builder.query({
      query: (limit = 10000) =>  `pokemon?limit=${limit}`
    }),
    getPokemonByName: builder.query({
      query: (name) => `pokemon/${name}`,
    }),
    getAbilityByName: builder.query({
      query: (name) => `ability/${name}`,
    }),
    getTypeByName: builder.query({
      query: (name) => `type/${name}`,
    }),
    getSpeciesByName: builder.query({
      query: (name) => `pokemon-species/${name}`,
    }),
    getEvolutionChainById: builder.query({
      query: (id) => `evolution-chain/${id}`,
    }),
  }),
})

export const {
  useGetPokemonByNameQuery,
  useGetPokemonByLimitQuery,
  useGetAbilityByNameQuery,
  useGetTypeByNameQuery,
  useGetEvolutionChainByIdQuery,
  useGetSpeciesByNameQuery
} = pokemonApi