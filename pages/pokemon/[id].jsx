/* eslint-disable @next/next/no-img-element */
import Head from 'next/head';
import Link from 'next/link';
//styles
import Styles from '../../styles/Details.module.css';

export async function getStaticPaths() {
	const res = await fetch(
		'https://jherr-pokemon.s3.us-west-1.amazonaws.com/index.json',
	);
	const Pokemons = await res.json();

	return {
		paths: Pokemons.map((Pokemon) => {
			return {
				params: {
					id: Pokemon.id.toString(),
				},
			}
		}),
		fallback: false, //fallback page
	};
}

export async function getStaticProps({ params }) {
	const res = await fetch(
		`https://jherr-pokemon.s3.us-west-1.amazonaws.com/pokemon/${params.id}.json`,
	);
	return {
		props: {
			Pokemon: await res.json(),
		},
	};
}

const Detail = ({ Pokemon }) => {
	if (!Pokemon) return null;

	return (
		<div className={Styles.main}>
			<Head>
				<title>{Pokemon.name}</title>
			</Head>
			<Link href='/'>
				<a className={Styles.link}> &lt;&lt; Back To Home</a>
			</Link>
			<div className={Styles.layout}>
				<div>
					<img
						className={Styles.picture}
						src={`https://jherr-pokemon.s3.us-west-1.amazonaws.com/${Pokemon.image}`}
						alt={Pokemon.name}
					/>
				</div>
				<div>
					<div className={Styles.name}>{Pokemon.name}</div>
					<div className={Styles.type}>{Pokemon.type.join(', ')}</div>
					<table>
						<thead className={Styles.header}>
							<tr>
								<th>Name</th>
								<th>Value</th>
							</tr>
						</thead>
						<tbody>
							{Pokemon.stats.map((Stat, Index) => (
								<tr key={Index}>
									<td className={Styles.attribute}>
										{Stat.name}
									</td>
									<td>{Stat.value}</td>
								</tr>
							))}
						</tbody>
					</table>
				</div>
			</div>
		</div>
	);
};

export default Detail;
