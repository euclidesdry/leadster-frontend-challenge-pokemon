export const MOCK_POKEMON_DETAILS_RESPONSE = {
  json: {
    abilities: [
      { ability: { name: 'overgrow', url: 'https://pokeapi.co/api/v2/ability/65/' }, is_hidden: false, slot: 1 },
    ],
    base_experience: 64,
    forms: [{ name: 'bulbasaur', url: 'https://pokeapi.co/api/v2/pokemon-form/1/' }],
    height: 7,
    held_items: [],
    id: 1,
    is_default: true,
    location_area_encounters: 'https://pokeapi.co/api/v2/pokemon/1/encounters',
    moves: [
      {
        move: { name: 'razor-wind', url: 'https://pokeapi.co/api/v2/move/13/' },
        version_group_details: [
          {
            level_learned_at: 0,
            move_learn_method: { name: 'egg', url: 'https://pokeapi.co/api/v2/move-learn-method/2/' },
            version_group: { name: 'gold-silver', url: 'https://pokeapi.co/api/v2/version-group/3/' },
          },
        ],
      },
      {
        move: { name: 'grassy-glide', url: 'https://pokeapi.co/api/v2/move/803/' },
        version_group_details: [
          {
            level_learned_at: 0,
            move_learn_method: { name: 'tutor', url: 'https://pokeapi.co/api/v2/move-learn-method/3/' },
            version_group: { name: 'sword-shield', url: 'https://pokeapi.co/api/v2/version-group/20/' },
          },
        ],
      },
    ],
    name: 'bulbasaur',
    order: 1,
    past_types: [],
    species: { name: 'bulbasaur', url: 'https://pokeapi.co/api/v2/pokemon-species/1/' },
    sprites: {
      back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/1.png',
      back_female: null,
      back_shiny: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/1.png',
      back_shiny_female: null,
      front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png',
      front_female: null,
      front_shiny: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/1.png',
      front_shiny_female: null,
      other: {
        dream_world: {
          front_default:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg',
          front_female: null,
        },
        home: {
          front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/1.png',
          front_female: null,
          front_shiny:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/1.png',
          front_shiny_female: null,
        },
        'official-artwork': {
          front_default:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png',
          front_shiny:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/1.png',
        },
      },
    },
    stats: [{ base_stat: 45, effort: 0, stat: { name: 'hp', url: 'https://pokeapi.co/api/v2/stat/1/' } }],
    types: [{ slot: 1, type: { name: 'grass', url: 'https://pokeapi.co/api/v2/type/12/' } }],
    weight: 69,
  },
};

export const MOCK_POKEMON_LIMIT = 15;

export const MOCK_POKEMON_DATA = {
  count: 75,
  next: `https://pokeapi.co/api/v2/pokemon?offset=${MOCK_POKEMON_LIMIT}&limit=${MOCK_POKEMON_LIMIT}`,
  previous: null,
  results: [
    { name: 'bulbasaur', url: 'https://pokeapi.co/api/v2/pokemon/1/' },
    { name: 'ivysaur', url: 'https://pokeapi.co/api/v2/pokemon/2/' },
    { name: 'venusaur', url: 'https://pokeapi.co/api/v2/pokemon/3/' },
    { name: 'charmander', url: 'https://pokeapi.co/api/v2/pokemon/4/' },
    { name: 'charmeleon', url: 'https://pokeapi.co/api/v2/pokemon/5/' },
    { name: 'charizard', url: 'https://pokeapi.co/api/v2/pokemon/6/' },
    { name: 'squirtle', url: 'https://pokeapi.co/api/v2/pokemon/7/' },
    { name: 'wartortle', url: 'https://pokeapi.co/api/v2/pokemon/8/' },
    { name: 'blastoise', url: 'https://pokeapi.co/api/v2/pokemon/9/' },
    { name: 'caterpie', url: 'https://pokeapi.co/api/v2/pokemon/10/' },
    { name: 'metapod', url: 'https://pokeapi.co/api/v2/pokemon/11/' },
    { name: 'butterfree', url: 'https://pokeapi.co/api/v2/pokemon/12/' },
    { name: 'weedle', url: 'https://pokeapi.co/api/v2/pokemon/13/' },
    { name: 'kakuna', url: 'https://pokeapi.co/api/v2/pokemon/14/' },
    { name: 'beedrill', url: 'https://pokeapi.co/api/v2/pokemon/15/' },
  ],
};

export const MOCK_POKEMON_DATA_NEXT = {
  count: 75,
  next: `https://pokeapi.co/api/v2/pokemon?offset=${MOCK_POKEMON_LIMIT * 2}&limit=${MOCK_POKEMON_LIMIT}`,
  previous: `https://pokeapi.co/api/v2/pokemon?offset=0&limit=${MOCK_POKEMON_LIMIT}`,
  results: [
    { name: 'pidgey', url: 'https://pokeapi.co/api/v2/pokemon/16/' },
    { name: 'pidgeotto', url: 'https://pokeapi.co/api/v2/pokemon/17/' },
    { name: 'pidgeot', url: 'https://pokeapi.co/api/v2/pokemon/18/' },
    { name: 'rattata', url: 'https://pokeapi.co/api/v2/pokemon/19/' },
    { name: 'raticate', url: 'https://pokeapi.co/api/v2/pokemon/20/' },
    { name: 'spearow', url: 'https://pokeapi.co/api/v2/pokemon/21/' },
    { name: 'fearow', url: 'https://pokeapi.co/api/v2/pokemon/22/' },
    { name: 'ekans', url: 'https://pokeapi.co/api/v2/pokemon/23/' },
    { name: 'arbok', url: 'https://pokeapi.co/api/v2/pokemon/24/' },
    { name: 'pikachu', url: 'https://pokeapi.co/api/v2/pokemon/25/' },
    { name: 'raichu', url: 'https://pokeapi.co/api/v2/pokemon/26/' },
    { name: 'sandshrew', url: 'https://pokeapi.co/api/v2/pokemon/27/' },
    { name: 'sandslash', url: 'https://pokeapi.co/api/v2/pokemon/28/' },
    { name: 'nidoran-f', url: 'https://pokeapi.co/api/v2/pokemon/29/' },
    { name: 'nidorina', url: 'https://pokeapi.co/api/v2/pokemon/30/' },
  ],
};
