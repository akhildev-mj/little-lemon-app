import React from 'react';
import './MenuItem.css';

const MenuItem = ({ item, className }) => {
	return (
		<div className={'menu-card'}>
			<div className='card-image'>
				<img src={item.image} alt={item.name} />
			</div>
			<h3>{item.name}</h3>
			<p>{item.description}</p>
			<p className='price'>
				{item.price}
				<button className='order-now-button'>
					Order Now <span className='order-icon'>🛒</span>
				</button>
			</p>
		</div>
	);
};

export default MenuItem;
