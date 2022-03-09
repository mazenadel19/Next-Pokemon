import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
// Style
import Styles from './List.module.css';

const List = ({ data }) => {
	if (data.length === 0) {
		return 'No Pokémon found';
	}

	return (
		<React.Fragment>
			<div className={Styles.grid}>
				{data.map((pokemon, index) => (
					<div className={Styles.card} key={pokemon.id}>
						<Link href={`/pokemon/${pokemon.id}`} passHref>
							<>
								<Image
									height={200}
									width={200}
									src={`https://jherr-pokemon.s3.us-west-1.amazonaws.com/${pokemon.image}`}
									alt={pokemon.name}
								/>
								<h3>{pokemon.name}</h3>
							</>
						</Link>
					</div>
				))}
			</div>
		</React.Fragment>
	);
};

export default List;
