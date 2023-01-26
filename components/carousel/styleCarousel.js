import styled from "styled-components";

const Conteiner = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	row-gap: 1rem;
	margin-bottom: 5rem;
		img{
		-webkit-user-drag: none;
	}
`;
const ContainerCarousel = styled.div`
	width: 1024px;
`

export { Conteiner, ContainerCarousel }