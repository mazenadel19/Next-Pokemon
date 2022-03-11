import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
// Style
import Styles from './List.module.css';

const List = ({ data }) => {
	if (data.length === 0) {
		return 'No Pokémon found';
	}

	const myLoader = ({ src }) =>
		`https://jherr-pokemon.s3.us-west-1.amazonaws.com/${src}`;

	return (
		<React.Fragment>
			<div className={Styles.grid}>
				{data.map((pokemon, index) => (
					<div className={Styles.card} key={pokemon.id}>
						<Link href={`/pokemon/${pokemon.id}`} passHref>
							<a className={Styles.link}>
								<Image
									loader={myLoader}
									height={250}
									width={250}
									src={`${pokemon.image}`}
									alt={pokemon.name}
								/>
								<h3 className={Styles.text}>{pokemon.name}</h3>
							</a>
						</Link>
					</div>
				))}
			</div>
		</React.Fragment>
	);
};

export default List;
