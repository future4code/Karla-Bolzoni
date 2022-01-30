import { Button } from '@chakra-ui/react';
import React from 'react';

export const ButtonComponent = (props) => {
	return (
		<div>
			<Button type={props.type || 'button'} onClick={props.onClick} color='#FD1E6A' variant='outline' size='lg' bg='#191718b8'>
				{props.textButton}
			</Button>
		</div>
	);
};
