import {Header} from './components/Main/Header/Header';
import {Nav} from './components/Main/Nav/Nav';
import {GetUsers} from './components/Users/GetUsers';
import {RegistrationForm} from './components/Registration/RegistrationForm';

export const App = () => {

	return (
		<div className='container' id='main'>
			<Nav />
			<Header />
			<GetUsers />
			<RegistrationForm />
		</div>
	);
}


