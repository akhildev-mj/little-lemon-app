import MenuItem from '../MenuItem/MenuItem';
import './MenuGrid.css';

const menuData = [
	{
		id: 1,
		name: 'Pancake Delight',
		description: 'A fluffy pancake served with maple syrup and fresh berries.',
		price: '$9.99',
		image:
			'https://akhildevj.github.io/littlelemon/public/assets/Asset%2036@4x.png',
	},
	{
		id: 2,
		name: 'Strawberry Bliss Tart',
		description:
			'Buttery tart filled with fresh strawberries and whipped cream.',
		price: '$8.99',
		image:
			'https://akhildevj.github.io/littlelemon/public/assets/Asset%2038@4x.png',
	},
	{
		id: 3,
		name: 'Eggcellent Fried Rice',
		description:
			'Fragrant rice stir-fried with eggs, vegetables, and soy sauce.',
		price: '$11.99',
		image:
			'https://akhildevj.github.io/littlelemon/public/assets/Asset%2040@4x.png',
	},
	{
		id: 4,
		name: 'Sushi Sensation',
		description: 'A selection of fresh sushi rolls with soy sauce and wasabi.',
		price: '$15.99',
		image:
			'https://akhildevj.github.io/littlelemon/public/assets/Asset%2042@4x.png',
	},
	{
		id: 5,
		name: 'Berrylicious Cake',
		description:
			'Moist vanilla cake layered with mixed berries and whipped cream.',
		price: '$12.99',
		image:
			'https://akhildevj.github.io/littlelemon/public/assets/Asset%2044@4x.png',
	},
	{
		id: 6,
		name: 'Nutty Berry Pudding',
		description:
			'A comforting pudding with nuts, berries, and a hint of cinnamon.',
		price: '$10.99',
		image:
			'https://akhildevj.github.io/littlelemon/public/assets/Asset%2046@4x.png',
	},
];

const MenuGrid = () => {
	return (
		<div className='menu-cards'>
			{menuData.map(item => (
				<MenuItem key={item.id} item={item} />
			))}
		</div>
	);
};

export default MenuGrid;
