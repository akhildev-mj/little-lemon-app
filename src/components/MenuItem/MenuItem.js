import React from 'react';
import { MdDeliveryDining } from 'react-icons/md';
import './MenuItem.css';

const MenuItem = ({ item, className }) => {
	return (
		<div className={'menu-card'}>
			<div className='card-image'>
				<img src={item.image} alt={item.name} />
			</div>
			<div className='card-header'>
				<h3>{item.name}</h3>
				<p className='price'>{item.price}</p>
			</div>
			<p className='card-description'>{item.description}</p>
			<div className='card-button'>
				<button className='order-now-button'>
					Order a delivery{' '}
					<span className='order-icon'>
						<MdDeliveryDining />
					</span>
				</button>
			</div>
		</div>
	);
};

export default MenuItem;
