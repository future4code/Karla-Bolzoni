import React from 'react';
import { Button } from '@chakra-ui/react';

const ButtonComponent = (props) => {
    return (
        <div>
            <Button colorScheme='teal' variant='outline'>
                {props.textButton}
            </Button>
        </div>
    );
};

export default ButtonComponent;