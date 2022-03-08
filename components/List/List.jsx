/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import React from 'react';
import Styles from './List.module.css';

const List = ({ data }) => {

	if (data.length === 0) {
		return 'No Pokémon found';
	}

	return (
		<React.Fragment>
			{data.length > 0 &&
				data.map(pokemon => (
					<div className={Styles.card} key={pokemon.id}>
						<Link href={`/pokemon/${pokemon.id}`} passHref>
							<img
								src={`https://jherr-pokemon.s3.us-west-1.amazonaws.com/${pokemon.image}`}
								alt={pokemon.name}
							/>
						</Link>
						<h3>{pokemon.name}</h3>
					</div>
				))}
		</React.Fragment>
	);
};

export default List;
