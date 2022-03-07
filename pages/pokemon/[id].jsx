/* eslint-disable @next/next/no-img-element */
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

const Detail = () => {
	const {
		query: { id },
	} = useRouter();

	const [Pokemon, setPokemon] = useState(null);

	useEffect(() => {
		async function getPokemon() {
			const res = await fetch(
				`https://jherr-pokemon.s3.us-west-1.amazonaws.com/pokemon/${id}.json`,
			);
			const data = await res.json();
			setPokemon(data);
		}
		id && getPokemon();
	}, [id]);

	if (!Pokemon) return null;

	return <div>{JSON.stringify(Pokemon)}</div>;
};

export default Detail;
