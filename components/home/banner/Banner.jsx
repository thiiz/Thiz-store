import Image from 'next/image'
import bg from '../../../public/img/banner20.jpg'
import style from './Banner.module.css'
import { Link } from "react-scroll";


export default function Banner() {

	return (
		<div className={`${style.bannerContainer} animate__animated animate__bounceIn animate__slow`}>
			<div className={style.bgContainer}>
				<Image className={style.bg} src={bg} alt='crochê.png' placeholder='blur' layout="fill"></Image>
				<h1 className={style.mainTitle}>MAIN TITLE <span>HERE</span></h1>
				<h2 className={style.mainSubTitle}>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</h2>
				<Link to="filterProducts" spy={true} smooth={true} offset={-70} duration={400} className={`${style.btn} ${style.btnShop}`} type='button'>SHOP</Link >
			</div>
		</div>
	)

}