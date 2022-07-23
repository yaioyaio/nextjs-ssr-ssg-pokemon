export interface PokemonDetails {
  name: string;
  type: string[];
  stats: PokemonStatus[];
  image: "images/bulbasaur.jpg";
}

export interface PokemonStatus {
  name: string;
  value: number;
}
