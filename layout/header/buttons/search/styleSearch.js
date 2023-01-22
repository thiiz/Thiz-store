import styled, { css } from "styled-components";

const Container = styled.div`
	position: relative;
`
const Form = styled.form`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${props => (props.isOpen ? "18rem" : "2rem")};
  cursor: ${props => (props.isOpen ? "auto" : "pointer")};
  transition: width 300ms cubic-bezier(0.645, 0.045, 0.355, 1), background-color 130ms ease-in-out;

	${props => {
		switch (props.isOpen) {
			case true:
				return css`
				background-color: ${props => props.theme.bg.default};
				border-radius: .4rem;`
			default:
				return css`
					&:hover ${Button} {
						background-color: #0000002d;
  					}
				`;
		}
	}
	}
		`;

const SearchInput = styled.input`
		font-size: .995em;
		font-family: "Roboto", Arial, Helvetica, sans-serif;
		padding: .4em 1em;
		background-color: transparent;
		width: 100%;
		border: none;
		color: ${props => props.theme.text.default};

  &:focus,
  &:active {
			outline: none;
		}
  &::placeholder {
		color: ${props => props.theme.text.default};
		}
		`;

const Button = styled.button`
		pointer-events: ${props => (props.isOpen ? "auto" : "none")};
		cursor: ${props => (props.isOpen ? "pointer" : "none")};
		background-color: transparent;
		color: inherit;
		border: none;
		font-size: 1.725em;
		padding: 6px;
		display: flex;
		justify-content: center;
		border-radius: 50%;
		transition: background-color 250ms ease;
		${props => {
		switch (props.scrolldirection) {
			case "down":
				return css`
					margin-right: 0;	
				`;
			default:
				return css`
				margin-right: .33rem;
				`
		}
	}
	}
		`;

export { Container, Button, Form, SearchInput }