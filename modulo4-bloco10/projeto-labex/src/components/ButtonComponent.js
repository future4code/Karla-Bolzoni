import React from 'react';
import styled from 'styled-components';

const MyButton = styled.button` 
	-moz-box-shadow:inset 0px 1px 0px 0px #54a3f7;
	-webkit-box-shadow:inset 0px 1px 0px 0px #54a3f7;
	box-shadow:inset 0px 1px 0px 0px #54a3f7;
	background-color:#007dc1;
	-webkit-border-radius:3px;
	-moz-border-radius:3px;
	border-radius:3px;
	border:1px solid #124d77;
	display:inline-block;
	cursor:pointer;
	color:#ffffff;
	font-family:Arial;
	font-size:13px;
	padding:6px 24px;
	text-decoration:none;
	text-shadow:0px 1px 0px #154682;
    &:hover {
        background-color:#0061a7;
    }
    &:active {
        position:relative;
	    top:1px;
    }`


export const ButtonComponent = (props) => {
    return (
        <div>
            <MyButton onClick={props.onClick} colorScheme='teal' variant='outline'>
                {props.textButton}
            </MyButton>
        </div>
    );
};
