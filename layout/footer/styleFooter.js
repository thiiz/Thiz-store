import styled from 'styled-components';

const Middle = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  justify-items: center;
`;

const FooterOption = styled.div`
  display: flex;
  flex-direction: column;

  a{
	text-decoration: none;
	color: ${props => props.theme.text.contrast};
	font-size: 0.863rem;
	display: flex;
	align-items: center;
	line-height: 1.375rem;
	font-family: 'Roboto', Arial, Helvetica, sans-serif;
	font-weight: 300;
	&:hover {
		text-decoration: underline;
	}
  }
`;

const Title = styled.h4`
  font-family: 'Josefin Sans', sans-serif;
  font-size: 1.65rem;
  margin-bottom: .15rem
`;

const IconSpan = styled.span`
  font-size: 1.725rem;
  padding-right: .5rem;
`;

const SocialMedia = styled.div`
  display: flex;
  justify-content: space-around;
  
  & a{
  font-size: 1.725rem;
  color: ${props => props.theme.text.default};
  background-color: ${props => props.theme.bg.default};
  padding: 0.313rem;
  border-radius: 50%;
  margin-top: 0.625rem;
  &:not(:last-child) {
    margin-right: 0.938rem;
  }
  }
`;

const Copyright = styled.div`
  margin-top: 1.8rem;
  text-align: center;
  display: flex;
  flex-direction: column;
`;

const CopyrightSpan = styled.span`
  &:not(:last-child){
	font-size: 0.783rem;
  }
  &:last-child{
	font-size: 0.633rem;
  }
`;

const CopyrightLink = styled.a`
  text-decoration: none;
  color: inherit;
`;

const ContainerFooter = styled.footer`
  width: 100%;
  height: 14.563rem;
  bottom: 0px;
  background-color: ${props => props.theme.bg.variant};
  color: ${props => props.theme.text.contrast};
  position: fixed;
  font-family: 'Varela Round', 'Arial', sans-serif;
  display: grid;
  grid-template-rows: 1.7fr 1fr;
  align-items: end;
  padding: 0.5rem;
;
  @media (max-width: 590px) {
		height: 32.813rem;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		
	${Middle} {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		align-items: center;
		row-gap: 10px;
	}

	${FooterOption} a {
		font-size: 0.986rem;
		line-height: 1.625rem;
	}

	${SocialMedia} a {
		font-size: 1.813rem;
	}

	${FooterOption}:not(:last-child) {
		border-bottom: 1px solid #ffffff1c;
	}

	${FooterOption} {
		text-align: center;
	}

	${FooterOption}:nth-child(3) {
		margin-top: 1.15rem;
	}

	${CopyrightSpan} {
		font-size: 0.788rem;
	}

	${CopyrightSpan}:last-child {
		font-size: 0.631rem;
	}
}
`;

export { ContainerFooter, Middle, FooterOption, Title, IconSpan, SocialMedia, Copyright, CopyrightSpan, CopyrightLink }
