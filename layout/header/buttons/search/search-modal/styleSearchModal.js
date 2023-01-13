import { motion } from 'framer-motion';
import styled, { css } from 'styled-components';

const Container = styled(motion.div)`
	position: absolute;
	-webkit-box-shadow: 0 0 8px #000000de;
	-moz-box-shadow: 0 0 8px #000000de;
	box-shadow: 0 0 8px #000000de;
	background-color: #fff;
	transition: 120ms ease-in-out;
	overflow: hidden;
	font-family: 'Varela Round', 'Arial', sans-serif;
	width: 36rem;
`;
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

const ViewMore = styled.a`
	cursor: pointer;
	font-size: 1.05rem;
	text-decoration: none;
	color: #2b2b2b;

&:hover {
	text-decoration: underline;
	color: #000;
}
`

export { Container, ContainerViewMore, ViewMore }