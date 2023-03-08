import {Loader} from '../../LayoutPages/Loader/Loader';
import {RadioButton} from '../../LayoutPages/Buttons/RadioButton';

export const RadioButtons = ({isError, error, isLoading, positions, handleUserPosition, userPosition}) => {
	return (
		<div className='positions'>
			<p style={{ marginBottom: 11 }}>Select your position</p>

			{isError && (
				<p className='error'>
					Error while loading positions: {error.status} {error.originalStatus}
				</p>
			)}
			{isLoading && <Loader />}

			{positions?.map(position => (
				<RadioButton
					position={position.name}
					handleUserPosition={handleUserPosition}
					userPosition={userPosition}
					positionId={position.id}
					key={position.id}
				/>
			))}
		</div>
	);
};

