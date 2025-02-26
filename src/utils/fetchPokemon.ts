export async function getPokemonList(limit = 151) {
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}`);
  const data = await res.json();
  return data.results.map((pokemon: any, index: number) => ({
    ...pokemon,
    id: index + 1,
    // image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
    //   index + 1
    // }.png`,
  }));
}

export async function getPokemonDetails(id: string) {
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
  return res.json();
}
