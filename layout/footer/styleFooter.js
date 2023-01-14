import styled from 'styled-components';

const Middle = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  justify-items: center;
  margin-top: 1.875rem;
`;

const FooterOption = styled.div`
  display: flex;
  flex-direction: column;

  a{
	text-decoration: none;
	color: #cacaca;
	font-size: 0.863rem;
	display: flex;
	align-items: center;
	line-height: 1.375rem;
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

  a{
	font-size: 1.725rem;
  background-color: #006eff;
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
  color: #a3a3a3;
  font-size: 0.783rem;
`;

const CopyrightLink = styled.a`
  text-decoration: none;
  color: #a3a3a3;
`;

const ContainerFooter = styled.footer`
  width: 100%;
  height: 14.563rem;
  bottom: 0px;
  background-color: #181818;
  color: #fff;
  position: fixed;
  font-family: 'Varela Round', 'Arial', sans-serif;

  @media (max-width: 590px) {
		height: 425px;

	${Middle} {
		margin-top: 1.25rem;
		grid-template-columns: none;
		grid-template-rows: 7.5rem 7.5rem 1fr;
		align-items: center;
		justify-items: center;
	}

	${FooterOption} a {
		font-size: 0.906rem;
		line-height: 1.625rem;
	}

	${SocialMedia} a {
		font-size: 1.563rem;
	}

	${FooterOption}:not(:last-child) {
		border-bottom: 1px solid #ffffff1c;
	}

	${FooterOption} {
		text-align: center;
	}

	${FooterOption}:nth-child(3) {
		margin-top: 1.25rem;
	}

	${CopyrightSpan} {
		font-size: 0.688rem;
	}

	${CopyrightSpan}:last-child {
		font-size: 0.531rem;
	}
}
`;

export { ContainerFooter, Middle, FooterOption, Title, IconSpan, SocialMedia, Copyright, CopyrightSpan, CopyrightLink }
