const HASHNODE_API = 'https://gql.hashnode.com';

export async function fetchHashnode<T>(
	query: string,
	variables?: Record<string, any>,
): Promise<T> {
	const res = await fetch(HASHNODE_API, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify({
			query,
			variables,
		}),
		// Enable caching for SSG / ISR
		next: { revalidate: 60 }, // seconds
	});

	if (!res.ok) {
		throw new Error('Failed to fetch Hashnode data');
	}

	const json = await res.json();

	if (json.errors) {
		console.error(json.errors);
		throw new Error('Hashnode GraphQL error');
	}

	return json.data;
}
