import styled from 'styled-components'

const Container = styled.div`
	position: absolute;
	background-color: ${props => props.theme.bg.default};
	color: ${props => props.theme.text.default}; 
	transform: translateY(81px);
	width: 54%;
	box-shadow: 0 0 8px #000000de;
	border-radius: 5px;
	padding: 8px;
	right: 1.1rem;
	z-index: 9999;
	nav-index: 9999;
	font-family: "Roboto", Arial, Helvetica, sans-serif;

	&:before{
	content: '';
	background-color: ${props => props.theme.bg.default};
	border-left: 1px solid #000;
	border-top: 1px solid #000;
	width: 10px;
	height: 10px;
	position: absolute;
	top: -6px;
	right: 10px;
	transform: rotate(45deg);
}
`;

const ModalTitle = styled.h5`
	font-size: .96rem;
	text-transform: uppercase;
	font-size: 600;
	color: inherit;
`;

const ModalBody = styled.div`
	text-align: center;
`;

const ModalText = styled.span`
	font-size: 500;
	color: inherit;
`

const ModalHeader = styled.div` 
display: flex; 
justify-content: flex-end; 
align-items: center; 
column-gap: 1.55rem;
`

const Close = styled.button`
border: none;
font-size: 17px;
cursor: pointer;
background-color: transparent;

svg {
transition: ease 250ms;
color: inherit;
}

&:hover svg {
padding: 2px;
}
`;

const ModalFooter = styled.div` 
display: flex; 
justify-content: center; 
margin-top: 6px;

.btnSecondary{
  background-color: #6c757d;

  &:hover {
    background-color: #5a6268;
  }
 }
 .btnPrimary{
	margin-right: 6px;
  background-color: #006eff;

  &:hover {
    background-color: #0069d9;
  }
 }
`;

const Btn = styled.button`
 border: none; font-size: 15px; 
 font-family: 'Roboto', Arial, Helvetica, sans-serif; 
 cursor: pointer;
 color: inherit;
 padding: .5rem .98rem; 
 border-radius: 3px; 
 transition: ease 250ms;
 `;

export { Container, Btn, Close, ModalBody, ModalFooter, ModalHeader, ModalText, ModalTitle }