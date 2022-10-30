import style from './Footer.module.css'
import { RiWhatsappFill } from 'react-icons/ri'
import { MdCall, MdEmail } from 'react-icons/md'
import { FaInstagram } from 'react-icons/fa'
import { CgFacebook } from 'react-icons/cg'
import { motion } from "framer-motion"
import { useEffect, useState } from 'react'
import CookiesConsentPopup from '../../components/cookies-consent/CookiesConsentPopup'
import { parseCookies } from 'nookies'
import Link from 'next/link'
import { useAuth } from '../../contexts/AuthContext'

export default function Footer() {
	return (
		<>
			<footer className={style.footer}>
				<div className={style.middle}>
					<div className={style.footerOption}>
						<h4>Atendimento</h4>
						<a href='#'><span><MdCall /></span>(48) 3332-4327</a>
						<a href='#'><span><RiWhatsappFill /></span>(48) 3332-4327</a>
						<a href='#'><span><MdEmail /></span>contato@maeterra.com.br</a>
					</div>
					<div className={style.footerOption}>
						<h4>Informações</h4>
						<Link href='#'><a>Sobre a MãeTerra</a></Link>
						<Link href='#'><a>Termos e condições</a></Link>
						<Link href='#'><a>Política de privacidade</a></Link>
					</div>
					<div className={`${style.social} ${style.footerOption}`}>
						<h4>Social</h4>
						<div className={style.socialMedia}>
							<a href='#'><CgFacebook /></a>
							<a href='#'><FaInstagram /></a>
							<a href='#'><RiWhatsappFill /></a>
						</div>
					</div>
				</div>
				<div className={style.copyright}>
					<span>2022 &copy; Todos os direitos reservados</span>
					<span>MãeTerra - CNPJ: 33.727.589/0001-27 / Imbituba - SC.</span>
					<span>Powered by <a target="_blank" href="https://www.twitter.com/1ziht">thiz</a></span>
				</div>
			</footer>
		</>
	)
}