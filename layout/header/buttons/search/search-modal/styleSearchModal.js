import { motion } from 'framer-motion';
import styled, { css } from 'styled-components';

const Container = styled(motion.div)`
	position: absolute;
	-webkit-box-shadow: 0 0 8px #000000de;
	-moz-box-shadow: 0 0 8px #000000de;
	box-shadow: 0 0 8px #000000de;
	background-color: #f1f1f1;
	overflow: hidden;
	font-family: 'Varela Round', 'Arial', sans-serif;
	right: 0rem;
	min-width: 100%;
	${props => {
		switch (props.scrolldirection) {
			case "down":
				return css`
					top: 2.3rem;
				`;
			default:
				return css`
				top: 3.85rem;
				`
		}
	}}
`;

const ContainerItems = styled.div`
	background-color: inherit;
    display: grid;
    justify-content: flex-start;
    z-index: 2;
    position: relative;
    grid-template-columns: auto auto auto;
`
const ContainerViewMore = styled.div`
	width: 100%;
	display: flex;
	justify-content: center;
	margin: .6rem 0;

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