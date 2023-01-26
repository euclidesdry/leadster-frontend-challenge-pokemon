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
