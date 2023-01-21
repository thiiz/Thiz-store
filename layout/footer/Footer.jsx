import { RiWhatsappFill } from 'react-icons/ri'
import { MdCall, MdEmail } from 'react-icons/md'
import { FaInstagram } from 'react-icons/fa'
import { CgFacebook } from 'react-icons/cg'
import Link from 'next/link'
import { ContainerFooter, Middle, FooterOption, Title, IconSpan, SocialMedia, Copyright, CopyrightSpan, CopyrightLink } from './styleFooter'

export default function Footer() {
	return (
		<>
			<ContainerFooter>
				<Middle>
					<FooterOption>
						<Title>Atendimento</Title>
						<a href='#'><IconSpan><MdCall /></IconSpan>(48) 3332-4327</a>
						<a href='#'><IconSpan><RiWhatsappFill /></IconSpan>(48) 3332-4327</a>
						<a href='#'><IconSpan><MdEmail /></IconSpan>contato@maeterra.com.br</a>
					</FooterOption>
					<FooterOption>
						<Title>Informações</Title>
						<Link href='#'>Sobre a MãeTerra</Link>
						<Link href='#'>Termos e condições</Link>
						<Link href='#'>Política de privacidade</Link>
					</FooterOption>
					<FooterOption className='social'>
						<Title>Social</Title>
						<SocialMedia>
							<a href='#'><CgFacebook /></a>
							<a href='#'><FaInstagram /></a>
							<a href='#'><RiWhatsappFill /></a>
						</SocialMedia>
					</FooterOption>
				</Middle>
				<Copyright>
					<CopyrightSpan>2022 &copy; Todos os direitos reservados</CopyrightSpan>
					<CopyrightSpan>Desenvolvido por <CopyrightLink target="_blank" href="https://www.twitter.com/1ziht">thiz</CopyrightLink></CopyrightSpan>
				</Copyright>
			</ContainerFooter>
		</>
	)
}