import styled, { css } from "styled-components";

const Container = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	margin-left: .538rem;
	position: relative;
`;

const Button = styled.button`
	background-color: transparent;
	color: inherit;
	border: none;
	cursor: pointer;
	display: flex;
	flex-direction: column;
	align-items: center;
	padding: 0.338rem;
	position: relative;
	font-size: 2.169em;
	border-radius: 10%;
	transition: background-color 400ms;

	&:hover {
	background-color: #0000002d;
}
`;


const UserName = styled.p`
	font-family: 'Varela Round', sans-serif;
	font-size: 0.989rem;
	font-weight: bold;
	text-transform: capitalize;
	white-space: nowrap;
	overflow: hidden;
	text-overflow: ellipsis;
	position: absolute;
	bottom: -1rem;
`;

const Loader = styled.div`
--height-of-loader: .25rem;
--loader-color: #000000;
width: 90%;
height: var(--height-of-loader);
border-radius: 30px;
background-color: rgba(0, 0, 0, 0.2);
position: relative;
margin-top: .25rem;

&:before {
	content: "";
	position: absolute;
	background: var(--loader-color);
	top: 0;
	left: 0;
	width: 0%;
	height: 100%;
	border-radius: 30px;
	animation: movingLoader 1s ease-in-out infinite;
	}

@keyframes movingLoader {
50% {
	width: 100%;
}

100% {
	width: 0;
	right: 0;
	left: unset;
}
}
`;


export { Container, Button, UserName, Loader }