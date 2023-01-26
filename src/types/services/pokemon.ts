type ResultType = {
  name: string;
  url: string;
};

export type ListPokemonsType = {
  count: number;
  next: string;
  previous: string | null;
  results: ResultType[];
};

type PokemonAbilityType = {
  name: string;
  url: string;
};

type PokemonAbilityProps = {
  ability: PokemonAbilityType;
  is_hidden: boolean;
  slot: number;
};

type Forms = {
  name: string;
  url: string;
};

type SpritesProps = {
  back_default: string;
  back_female: string | null;
  back_shiny: string;
  back_shiny_female: string | null;
  front_default: string;
  front_female: string | null;
  front_shiny: string;
  front_shiny_female: string | null;
  other: {
    dream_world: {
      front_default: string;
      front_female: string | null;
    };
    home: {
      front_default: string;
      front_female: string | null;
      front_shiny: string;
      front_shiny_female: string | null;
    };
    'official-artwork': {
      front_default: string;
      front_shiny: string;
    };
  };
  versions: object;
};

type TypesProps = {
  slot: number;
  type: {
    name: string;
    url: string;
  };
};

export type PokemonDetailsType = {
  abilities: PokemonAbilityProps[];
  base_experience: number;
  forms: Forms[];
  game_indices: [];
  height: number;
  held_items: [];
  id: 1;
  is_default: boolean;
  location_area_encounters: string;
  movies: [];
  name: string;
  order: number;
  past_types: [];
  species: {
    name: string;
    url: string;
  };
  sprites: SpritesProps;
  stats: [];
  types: TypesProps[];
  weight: number;
};
