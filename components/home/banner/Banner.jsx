import Image from 'next/image'
import style from './Banner.module.css'
import { Link } from "react-scroll";


export default function Banner() {

	return (
		<div className={`${style.bannerContainer}`}>
			<h1 className={style.mainTitle}>MAIN TITLE <span>HERE</span></h1>
			<h2 className={style.mainSubTitle}>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</h2>
			<Link to="filterProducts" spy={true} smooth={true} offset={-70} duration={400} className={`${style.btn} ${style.btnShop}`} type='button'>
				<span className={style.topKey}></span>
				<span className={style.btnText}>shop</span>
				<span className={style.bottomKey1}></span>
				<span className={style.bottomKey2}></span>
			</Link >
		</div>
	)

}