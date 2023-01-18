import styled from 'styled-components'

const Container = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
	margin-bottom: 25rem;
	&{
			font-family: "Poppins", Arial, Helvetica, sans-serif;
		}
`
const PrimaryContainer = styled.div`
	height: 25rem;
	background-color: ${props => props.theme.grey};
`
const SecondaryContainer = styled.div`
	height: 25rem;
	background-color: ${props => props.theme.bg.default};
	text-align: center;
    display: flex;
    align-items: center;
    justify-content: flex-end;
	`
const TitleContainer = styled.div`
		display: flex;
		padding: 2rem 10rem;

	`
const Title = styled.h2`
    font-size: 7.15rem;
 	color: ${props => props.theme.text.contrast};
	font-weight: 600;

`
const SubTitle = styled.h3`
	font-weight: 600;
	font-size: 1.9rem;
	color: ${props => props.theme.text.default};
`
const InfoContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	row-gap: .5rem;
`
const TextContainer = styled.div`
	display: flex;
	justify-content: flex-end;
	width: 100%;
	margin-bottom: 1rem;

	& .primary{
		color: ${props => props.theme.text.contrast};
	}
	& .secondary{
		color: ${props => props.theme.text.default};
	}
`
const Text = styled.span`
 	font-size: 1.25rem;
	font-weight: 300;
	padding: 0 5rem;
	width: 55rem;
`
const ImageContainer = styled.div`
  left: 10.15rem;
  transform: translateY(-1.9rem);
  pointer-events: none;
  position: absolute;
  width: 43rem;
  height: 43rem;
  min-width: 42rem;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
`

export { Container, PrimaryContainer, SecondaryContainer, InfoContainer, TitleContainer, Title, SubTitle, TextContainer, Text, ImageContainer }