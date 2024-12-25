import { ChangeEvent, useState } from 'react';
import MenuList from '../../components/MenuList/MenuList';
import Select from '../../components/Select/Select';
import { photodb } from '../../db/photodb';
import { IPhoto } from '../../interfaces/photo.interface';
import { MainProps } from './Main.props';

function Main({ items = photodb }: MainProps) {
	const [filterPhotos, setFilterPhotos] = useState<IPhoto[]>(items);

	const updateFilter = (event: ChangeEvent<HTMLSelectElement>) => {
		const newValue = event.target.value;
		let filteredItems = items;

		if (newValue && newValue !== 'все фотографии') {
			filteredItems = items.filter(el => el.plenka === newValue);
		}

		setFilterPhotos(filteredItems);
	};
	return (
		<main>
			<Select onChange={updateFilter} />
			<MenuList items={filterPhotos} />;
		</main>
	);
}

export default Main;
