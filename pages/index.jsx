import Head from 'next/head';
import { useState } from 'react';
// Components
import {
	PokeList,
	PokePagination,
	PokePlayer,
	PokeSearch,
} from '../components';
// Style
import Styles from '../styles/Home.module.css';

export async function getStaticProps() {
	const res = await fetch(
		'https://jherr-pokemon.s3.us-west-1.amazonaws.com/index.json',
	);
	return {
		props: {
			data: await res.json(),
		},
	};
}

export default function Home({ data }) {
	const [FilteredData] = useState(data);
	const [PokemonList, setPokemonList] = useState([]);
	const [Pagination, setPagination] = useState([]);

	return (
		<div className={Styles.container}>
			<Head>
				<title>Pokédex</title>
				<meta
					name='description'
					content="The Pokédex section has a wealth of information on all the Pokémon creatures from the entire game series.
					On the main list pages you can see the various stats of each Pokémon.
					Click a Pokémon's name to see a detailed page with Pokédex data, descriptions from previous games, sprites, evolutions, moves and more!"
				/>
				<link rel='icon' href='/favicon.ico' />
			</Head>

			<main className={Styles.main}>
				<h1 className={Styles.title}>Gotta Catch `Em All!</h1>

				<section className={Styles.subtitle}>
					<PokeSearch
						placeholder='Pikachu'
						Data={FilteredData}
						setPokemonList={setPokemonList}
					/>

					<PokePlayer />
				</section>

				<PokeList data={Pagination} />

				<PokePagination
					rows={8}
					PokemonList={PokemonList}
					setPagination={setPagination}
				/>
			</main>
		</div>
	);
}
