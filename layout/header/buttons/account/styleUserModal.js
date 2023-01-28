import styled, { css } from 'styled-components';
import { motion } from "framer-motion"
import Link from 'next/link';

const Container = styled(motion.div)`
    background-color: ${props => props.theme.bg.layout};
    position: absolute;
    right: -3.2rem;
    min-width: 12.875rem;
    border-radius: 10px;
    -webkit-box-shadow: 0 0 8px #000000de;
    -moz-box-shadow: 0 0 8px #000000de;
    box-shadow: 0 0 8px #000000de;
    font-size: 1em;
    overflow: hidden;
    display: grid;
    justify-items: stretch;
	${props => {
        switch (props.scrolldirection) {
            case "down":
                return css`
					top: 3.265em;
				`;
            default:
                return css`
					top: 4.08em;
				`
        }
    }}
`;

const Ul = styled.ul`
    display: flex;
    flex-direction: column;
    height: 100%;
    font-size: .85rem;
`;

const Li = styled.li`
    list-style-type: none;
    cursor: pointer;
    transition: 250ms ease-in-out;
    font-family: 'Varela Round', sans-serif;
    color: ${props => props.theme.text.default};
	&:hover button,
    &:hover a {
        text-decoration: underline;
    }
    &:active {
        transform: scale(0.9);
    }
    & svg {
        font-size: 1.72em;
        color: ${props => props.theme.text.default};
    }
    & a,
    button{
        padding-block: .3rem;
    }
`;

const ContainerLink = styled(Link)`
    color: inherit;
    text-decoration: none;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

const Buttons = styled.button`
    font-size: 1em;
	background-color: transparent;
    border: none;
    font-family: inherit;
    color: inherit;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;

`;

const Division = styled.div`
    height: .125rem;
    width: 100%;
    background-color: ${props => props.theme.division};
    margin: .3rem 0;
`;


export { Buttons, Container, Division, Li, ContainerLink, Ul }