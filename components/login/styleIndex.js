import { motion } from "framer-motion"
import styled, { css } from "styled-components"

const Container = styled(motion.div)`
	position: fixed;
	top: 0;
	height: 85vh;
	width: 100vw;
	opacity: 0;
	display: flex;
	justify-content: center;
	align-items: center;
	z-index: ${props => props.$toggleLoginModal ? "16" : "-1"};
`

const ContainerModal = styled(motion.div)`
	background-color: #ececec;
	overflow: hidden;
	position: relative;
	display: grid;
	justify-content: center;
	justify-items: center;
	padding: 0 4.6rem;
	font-family: 'Varela Round', Arial, Helvetica, sans-serif;

	${props => {
		switch (props.$switchModal) {
			case 'login':
				return css`
					grid-template-rows: .9fr 2.5fr;
					`;
			case 'register':
				return css`
					grid-template-rows: .39fr 2.1fr;
				`;
			case 'forgotPass':
				return css`
					grid-template-rows: 2fr 3.5fr;
				`;
			case 'verifyRecoverCode':
				return css`
					grid-template-rows: 15fr auto 5fr 15fr;
					padding: 0 2.6rem;
				`;
			case 'changePass':
				return css`
					grid-template-rows: 1.2fr 2fr;
				`;
		}
	}}
`

export { Container, ContainerModal, }