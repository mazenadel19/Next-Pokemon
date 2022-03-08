import React, { useEffect, useState } from 'react';

// Style
import Styles from './Search.module.css';

const Search = ({ Data, setPokemonList ,placeholder}) => {
    const [ SearchValue, setSearchValue ] = useState('');

    // Handling Search
    const HandlingSearch = (e) => {
        setSearchValue(e.target.value);
    };

    useEffect(() => {
        if (Data?.length && setPokemonList) {
            const SearchData = Data?.filter((Item) => {
                for (const key in Item) {
                    if (Item[key]?.toString().toLowerCase().includes(SearchValue.toLowerCase())) {
                        return true;
                    }
                }
                return null
            });
            setPokemonList(SearchData);
        } else if (!Data?.length && setPokemonList) {
            setPokemonList([]);
        }
    }, [SearchValue, Data, setPokemonList]);

    return (
		<React.Fragment>
			<section className={Styles.Search}>
				<input
					name={'search'}
					placeholder={placeholder}
					onChange={HandlingSearch}
				/>
			</section>
		</React.Fragment>
	);
}

export default Search;