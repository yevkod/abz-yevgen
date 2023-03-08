import logo from '../../../assets/Logo.svg';
import {Button} from '../../LayoutPages/Buttons/Button';
import './nav.scss';

export const Nav = () => {
	return (
		<nav className='nav'>
			<div className='nav-wrapper'>
				<a href='#main'>
					<img
						width='104'
						height='26'
						src={logo}
						alt='test-task'
						className='logo'
					/>
				</a>
				<div className='nav-buttons'>
					<Button text='Users' />
					<Button text='Sign Up' />
				</div>
			</div>
		</nav>
	);
};

