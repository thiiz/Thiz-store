import { motion } from 'framer-motion';
import styled, { css } from 'styled-components';

const Container = styled(motion.div)`
	position: absolute;
	-webkit-box-shadow: 0 0 8px #000000de;
	-moz-box-shadow: 0 0 8px #000000de;
	box-shadow: 0 0 8px #000000de;
	background-color: #f1f1f1;
	transition: 120ms ease-in-out;
	overflow: hidden;
	font-family: 'Varela Round', 'Arial', sans-serif;
	
`;
const ContainerItems = styled.div`
	background-color: inherit;
	width: 30rem;
    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap;
	z-index: 2;
	position: relative;
`
const ContainerViewMore = styled.div`
	width: 100%;
	display: flex;
	justify-content: center;
	padding: .6rem 0;
	${props => {
		switch (props.scrolldirection) {
			case "down":
				return css`
					transform: translateY(2.8rem);
				`;
			default:
				return css`
					transform: translateY(2.87rem);
				`
		}
	}}
`;

const ViewMore = styled.button`
	cursor: pointer;
	font-size: 1.05rem;
	text-decoration: none;
	color: #2b2b2b;
	border: none;
&:hover {
	text-decoration: underline;
	color: #000;
}
`

export { Container, ContainerItems, ContainerViewMore, ViewMore }