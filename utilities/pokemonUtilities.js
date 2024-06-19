
const isCatched = (pokemonName, catched) => 
  catched.findIndex((element) =>  element?.name === pokemonName)

export default {
  isCatched
}