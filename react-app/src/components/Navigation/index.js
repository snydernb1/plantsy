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
	const cartObj = useSelector(state => state.cart.cart);
	const cartKeys = Object.keys(cartObj);

	useEffect(()=> {
        dispatch(fetchAllListings())
    }, [dispatch])

	useEffect(()=> {
		dispatch(fetchUserCart())
    }, [sessionUser])

	const toListings = () => {
		history.push(`/users/${sessionUser.id}/listings`)
	}

	const toCart = () => {
		history.push(`/users/${sessionUser.id}/cart`)
	}

	return (
	<div className='navContents'>
		<div className='navbar'>




			<div className='titleSearch'>
			<NavLink exact to="/" id='plantsy'>Plantsy</NavLink>
			<input disabled={true} placeholder='Feature coming soon' id='searchBar'/>
			<i class="fa-solid fa-magnifying-glass"></i>
			</div>

			<div className='navButtons'>

			{sessionUser !== null &&
			<i onClick={toListings} class="fa-solid fa-store"></i>
		}

			{sessionUser !== null &&
			<div className='cartDiv'>
			<i onClick={toCart} class="fa-solid fa-cart-shopping"
			id={cartKeys.length ? null : 'iFix'}></i>
			{cartKeys.length > 0 &&
				<p className='cartNum' >{cartKeys.length ? cartKeys.length : null}</p>
			}
			</div>
			}


			{isLoaded && (
				<div>
					<ProfileButton user={sessionUser} />
				</div>
			)}

			</div>



			</div>
		</div>
	);
}

export default Navigation;
