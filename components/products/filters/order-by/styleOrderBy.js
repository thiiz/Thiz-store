import styled from "styled-components";

const ContainerLabel = styled.label`
	display: flex;
	flex-direction: column;
	align-items: flex-start;

& .priceSorting {
	text-align: center;
	min-width: 163px;
	font-family: 'Varela Round', 'Arial', sans-serif;
}

& .Select__control {
    background-color: ${props => props.theme.bg.default};
	font-family: 'Varela Round', 'Arial', sans-serif;
	border:1px solid hsl(0deg 0% 70%);
	box-shadow: none;
	&:hover{
		border-color: ${props => props.theme.bg.contrast};
	}
}
  & .Select__option {
    color: ${props => props.theme.text.default};
	border-radius: 6px;
	text-align: center;
  }
  & .Select__option:active{
	background-color: ${props => props.theme.bg.variant};
	color: ${props => props.theme.text.contrast}
  }

  & .Select__menu {
	font-family: 'Varela Round', 'Arial', sans-serif;
    background-color: ${(props) => props.theme.bg.default};
  }

  & .Select__single-value {  
    color: inherit;
  }
  & .Select__option--is-selected{
	background-color: transparent;
	color: ${props => props.theme.text.default};
  }
  & .Select__option--is-focused{
	background-color: transparent;
	border: 1px solid ${props => props.theme.bg.contrast};
	color: ${props => props.theme.text.defaukt};

  }
`;

const OrderBySpan = styled.span`
	font-family: 'Oswald', sans-serif;
	font-size: .813rem;
`


export { ContainerLabel, OrderBySpan }