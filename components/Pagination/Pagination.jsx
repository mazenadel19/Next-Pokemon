import React, { useEffect, useState } from 'react';

// Style
import Styles from './Pagination.module.css';


const Pagination = ({ rows = 10, PokemonList, setPagination }) => {
    const [ activeRow, setActiveRow ] = useState(0);
    const PagesNumber = PokemonList && rows && Math.ceil(PokemonList?.length / rows);

    // Navigate
    const HandlingNavigate = (Page) => setActiveRow((Page - 1) * rows);
    const ActivePage = Math.floor((activeRow / rows) + 1);

    // Draw Pagination
    useEffect(() => {
        if (PokemonList && setPagination) {
            !!PokemonList && setPagination(PokemonList.slice(activeRow, activeRow + rows));
        }
    }, [activeRow, PokemonList, rows, setPagination]);

    // Select Active Row
    useEffect(() => {
        setActiveRow(0)
    }, [PokemonList?.length])

    // Footer Counter
    const FooterCounter = (PokemonList?.length === 0) ?' No Items Found' : (`From ${activeRow + 1}` +
        ' ' + 'To' + ' ' + (((activeRow + rows) > (PokemonList ? PokemonList.length : 1)) ? PokemonList?.length : activeRow + rows) +
        ' ( ' + PokemonList?.length + ' ' + 'Items' + ' )');

    return (
		<React.Fragment>
			<section className={Styles.Pagination}>
				<div className={Styles.action_container}>
					<button
						disabled={
							ActivePage === 1 ||
							(PokemonList ? PokemonList?.length : 1) < 1
						}
						onClick={() => HandlingNavigate(1)}>
						 ️️️⏮️
					</button>
					<button
						disabled={
							ActivePage === 1 ||
							(PokemonList ? PokemonList.length : 1) < 1
						}
						onClick={() => HandlingNavigate(activeRow / rows)}>
						 ⬅️
					</button>
					<div className={Styles.pageNumber}>
						{(PokemonList ? PokemonList.length : 1) < 1
							? 0
							: ActivePage}
					</div>
					<button
						disabled={
							ActivePage === PagesNumber ||
							(PokemonList ? PokemonList.length : 1) < 1
						}
						onClick={() => HandlingNavigate(activeRow / rows + 2)}>
						 ➡️
					</button>
					<button
						disabled={
							ActivePage === PagesNumber ||
							(PokemonList ? PokemonList.length : 1) < 1
						}
						onClick={() => HandlingNavigate(PagesNumber || 1)}>
						 ⏭️
					</button>
				</div>
				<div className={Styles.page_items}>{FooterCounter}</div>
			</section>
		</React.Fragment>
	);
}

export default Pagination;