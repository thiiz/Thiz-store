import styled, { css } from "styled-components";

const GridContainer = styled.div`
	display: flex;
`;

const GridButtonOption = styled.button`
	display: flex;
	background-color: transparent;
	border: 0px;
	margin: 0px .5rem;
	cursor: pointer;
	
	& .active{
		border: 1px solid ${props => props.theme.bg.contrast};
	}
`;

const GridOption = styled.span`
	background: ${props => props.theme.bg.default};
	height: 1.25rem;
	width: 1.25rem;
	border: 1px solid ${props => props.theme.division};
	border-radius: 10%;
	margin: 0px .219rem;
`;

export { GridContainer, GridButtonOption, GridOption }