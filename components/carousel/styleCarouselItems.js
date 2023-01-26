import styled from "styled-components";


const Container = styled.div`
	 display: flex;
	 flex-direction: column;
	 width: 13rem;
`;

const ImageContainer = styled.div`
	position: relative; 
	width: 13rem; 
	height: 13rem; 
`;

const Name = styled.p`
	cursor: pointer;
	text-transform: capitalize;
	white-space: nowrap;
	overflow: hidden;
	text-overflow: ellipsis;
`;

const Price = styled.p`
	
`

export { Container, ImageContainer, Name, Price }