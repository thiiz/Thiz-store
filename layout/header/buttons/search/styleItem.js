import styled from "styled-components";
import Image from "next/image";

const Container = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    font-family: 'Varela Round', 'Arial', sans-serif;
    align-items: center;
`;

const ContainerImg = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: .4rem;
	cursor: pointer;
	`;

const ProductImg = styled(Image)`
    object-fit: none;
`;

const Title = styled.div`
    font-size: 15.5px;
    -webkit-line-clamp: 3;
    text-overflow: ellipsis;
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    word-wrap: break-word;
    cursor: pointer;
`;

const Price = styled.div`
    font-family: 'Roboto', 'Arial', sans-serif;
    font-size: 15px;
`;

export { Container, ContainerImg, Price, ProductImg, Title }