import { Tr, Td, Button } from '@chakra-ui/react';
import React from 'react';
import {CheckIcon, CloseIcon} from '@chakra-ui/icons'


export const CardCandidate = (props) => {
  return (
  <Tr key={props.id + props.candidateId} >

      <Td>{props.name}</Td>
      <Td>{props.profession}</Td>
      <Td>{props.age}</Td>
      <Td>{props.country}</Td>
      <Td>{props.applicationText}</Td>
      <Td><Button onClick={() => props.decideCandidate(props.tripId, props.candidateId, true)} ><CheckIcon /></Button></Td>
      <Td><Button onClick={() => props.decideCandidate(props.tripId, props.candidateId, false)}><CloseIcon /></Button></Td>
    
  </Tr>
  );
};

