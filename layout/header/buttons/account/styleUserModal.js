import styled, { css } from 'styled-components';
import { motion } from "framer-motion"
import Link from 'next/link';

const Container = styled(motion.div)`
    background-color: ${props => props.theme.bg.layout};
    position: absolute;
    right: -3.2rem;
    min-width: 19.875rem;
    border-radius: 10px;
    box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
    font-size: 1rem;
    overflow: hidden;

	${props => {
        switch (props.scrolldirection) {
            case "down":
                return css`
					top: 2.45em;
				`;
            default:
                return css`
					top: 4.05em;
				`;
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

const MyProfile = styled(Link)`
    color: ${props => props.theme.text.default};
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
    color: ${props => props.theme.text.default};
`;

const Division = styled.div`
    height: .125rem;
    width: 120%;
    background-color: ${props => props.theme.division};
`;
const ThemeUl = styled.ul`
   border-radius: 30px;
   width: 2rem;   
   display: flex;
   justify-content: center;
`;
const ThemeList = styled.li`
    border-radius: 30px;
`;

const ContainerImg = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    width: 89.4px;
    height: 53px;
    border-radius: 7px;
    
    `;
const Label = styled.label`
    `;

export { BtnLogout, Container, Division, Li, MyProfile, Ul, ThemeList, ThemeUl, Label, ContainerImg }