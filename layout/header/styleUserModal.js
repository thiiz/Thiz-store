import styled, { css } from 'styled-components';
import { motion } from "framer-motion"

const Container = styled(motion.div)`
    background-color: #f5f5f5;
    position: absolute;
    right: -3.2rem;
    min-width: 8.875rem;
    border-radius: 10px;
    -webkit-box-shadow: 0 0 8px #000000de;
    -moz-box-shadow: 0 0 8px #000000de;
    box-shadow: 0 0 8px #000000de;
    font-size: 1rem;

	${props => {
        switch (props.scrollDirection) {
            case "down":
                return css`
					top: 2.5em;
				`;
            default:
                return css`
					top: 4.8em;
				`
        }
    }}
`;

const Ul = styled.ul`
    display: flex;
    flex-direction: column;
    height: 100%;
    justify-content: space-between;
    align-items: center;
    font-size: 1.1em;
`;

const Li = styled.li`
    list-style-type: none;
    cursor: pointer;
    transition: 250ms ease-in-out;

	&:hover {
        color: #000;
        text-decoration: underline;
    }
    &:active {
        transform: scale(0.9);
    }
`;

const MyProfile = styled.a`
    color: #151515;
    font-family: 'Varela Round', sans-serif;
    text-decoration: none;
`;

const BtnLogout = styled.button`
    display: flex;
    justify-content: space-between;
    text-align: center;
    align-items: center;
    font-size: 0.86em;
    width: 100%;
	background-color: transparent;
    border: none;
`;

const Division = styled.div`
    height: .125rem;
    width: 120%;
    background-color: #c7c7c7;
`;

export { BtnLogout, Container, Division, Li, MyProfile, Ul }