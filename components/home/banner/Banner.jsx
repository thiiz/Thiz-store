import Image from 'next/image'
import bg from '../../../public/img/banner20.jpg'
import style from './Banner.module.css'


export default function Banner() {

	return (
		
		<section className={`${style.bannerContainer} animate__animated animate__bounceIn animate__slow`}>
			<div className={style.bgContainer}>
				<Image className={style.bg} src={bg} alt='crochê.png' placeholder='blur' layout="fill"></Image>
				<h3 className={style.mainTitle}>MAIN TITLE <span>HERE</span></h3>
				<h4 className={style.mainSubTitle}>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</h4>
				<a href='#produtos' className={`${style.btn} ${style.btnShop}`} type='button'>SHOP</a>
			</div>
		</section>
	)

}