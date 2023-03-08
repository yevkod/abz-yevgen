import './successModal.scss';
import successImg from '../../../assets/success-image.svg';

export const SuccessModal = () => {
	return (
		<div className='success-modal-wrapper'>
			<h1 className='modal-title'>User successfully registered</h1>
			<img width='320' height='280' src={successImg} alt='Successful Registered' />
		</div>
	);
};


