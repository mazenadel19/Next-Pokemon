/* eslint-disable @next/next/no-img-element */
import Head from 'next/head';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import styles from '../styles/Home.module.css';

export default function Home() {
	const [PokemonList, setPokemonList] = useState([]);

	useEffect(() => {
		async function getPokemon() {
			const res = await fetch(
				'https://jherr-pokemon.s3.us-west-1.amazonaws.com/index.json',
			);
			const data = await res.json();
			setPokemonList(data);
		}
		getPokemon();
	}, []);

	return (
		<div className={styles.container}>
			<Head>
				<title>Pokédex</title>
				<meta
					name='description'
					content="The Pokédex section has a wealth of information on all the Pokémon creatures from the entire game series. On the main list pages you can see the various stats of each Pokémon. Click a Pokémon's name to see a detailed page with Pokédex data, descriptions from previous games, sprites, evolutions, moves and more!"
				/>
				<link rel='icon' href='/favicon.ico' />
			</Head>

			<main className={styles.main}>
				<h1 className={styles.title}>Gotta Catch `Em All!</h1>

				<p className={styles.description}>Pokédex</p>

				<div className={styles.grid}>
					{PokemonList.map((pokemon, index) => (
						<div className={styles.card} key={pokemon.id}>
							<Link href={`/pokemon/${pokemon.id}`} passHref>
								<img
									src={`https://jherr-pokemon.s3.us-west-1.amazonaws.com/${pokemon.image}`}
									alt={pokemon.name}
								/>
							</Link>
								<h3>{pokemon.name}</h3>
						</div>
					))}
				</div>
			</main>

			<footer className={styles.footer}>
				Picka Picka<span className={styles.logo}>⚡⚡</span>
			</footer>
		</div>
	);
}
