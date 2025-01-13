type Pokemon = {
	id: number;
	name: string;
};

export async function getPokemon(id: string | undefined) {
	const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`, {
		headers: {
			"Content-Type": "application/json",
		},
	});

	if (!response.ok) {
		throw new Error("Failed to fetch data");
	}

	return (await response.json()) as Pokemon;
}
