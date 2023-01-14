import styled from "styled-components";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    font-family: 'Varela Round', 'Arial', sans-serif;
    width: 10rem;
    padding: 0 1rem;
`;

const ContainerImg = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: .4rem;
	cursor: pointer;
    position: relative;
    width: 8.1rem;
    height: 7rem;
    border-radius: 10px;
    overflow: hidden;
	`;

const Title = styled.div`
    font-size: 15.5px;
    -webkit-line-clamp: 2;
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
    text-align: end;
`;

export { Container, ContainerImg, Price, Title }