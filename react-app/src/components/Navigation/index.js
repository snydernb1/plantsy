import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {fetchAllListings} from '../../store/listings'
import { fetchUserCart } from '../../store/cart';
import { useHistory, NavLink } from 'react-router-dom';

import ProfileButton from './ProfileButton';

import './Navigation.css';

function Navigation({ isLoaded }){
	const history = useHistory()
	const dispatch = useDispatch()
	const sessionUser = useSelector(state => state.session.user);

	useEffect(()=> {
        dispatch(fetchAllListings())
		dispatch(fetchUserCart())
    }, [dispatch])

	const toListings = () => {
		history.push(`/users/${sessionUser.id}/listings`)
	}

	const toCart = () => {
		history.push(`/users/${sessionUser.id}/cart`)
	}

	return (
		<ul className='navbar'>
			<li>
				<NavLink exact to="/">Plantsy</NavLink>
			</li>
			{sessionUser !== null &&
			<li onClick={toListings}>
				Listings
			</li>
			}
			{sessionUser !== null &&
			<li onClick={toCart}>
				Cart
			</li>
			}
			{isLoaded && (
				<li>
					<ProfileButton user={sessionUser} />
				</li>
			)}
		</ul>
	);
}

export default Navigation;
