import React from 'react';
// import Calendar from './Calendar/Calendar';
import Events from './Events'
import Profile from './Profile'
import Logo from '../../img/d8picker.png';
import favicon from '../../img/white.png';



const Home = () => {
	return (
		<div className='home'>
			<div className='navbar'>
				<img src={favicon} alt='' className='favicon' />
				<h2>Sign Out</h2>
			</div>

			<main className='main'>
				<div className='left'>
					<div className='profile'>
						<Profile />
					</div>
				</div>
				<div className='right'>
					<img src={Logo} alt='logo' className='logo' />
					{/* <Calendar /> */}
					<Events />
				</div>
			</main>
		</div>
	);
};

export default Home;
