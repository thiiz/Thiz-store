import styled from "styled-components";

const Title = styled.div`
	margin: auto auto .625rem auto;
	font-size: 2.625rem;
	font-weight: 600;
	font-family: 'Oswald', Arial, Helvetica, sans-serif;
`;

const ContainerForm = styled.form`
	display: flex;
	flex-direction: column;
	gap: .538rem 0;
	width: 22.5rem;
	align-items: center;
	font-family: "Roboto", Arial, Helvetica, sans-serif;
`;

export { ContainerForm, Title }