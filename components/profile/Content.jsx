import style from './Content.module.css'
import { AnimatePresence, motion } from 'framer-motion'
import Account from './account/Account';
import Orders from './Orders';
export default function Content({ active }) {
	const variants = {
		hidden: { opacity: 0, },
		enter: { opacity: 1, },
		exit: { opacity: 0 },
	};
	return (
		<>
			<AnimatePresence>
				<div className={style.container}>
					<motion.div
						variants={variants} // Pass the variant object into Framer Motion 
						initial="hidden"// Set the initial state to variants.hidden
						animate="enter"
						key={active} // Animated state to variants.enter
						exit="exit" // Exit state (used later) to variants.exit
						transition={{ type: 'linear', duration: 0.5 }}
						className={style.content} // Set the transition to linear
					>
						{active === "account" && <Account />}
						{active === "orders" && <Orders />}
					</motion.div>
				</div>
			</AnimatePresence>

			{/* <p>Avatar: {auth.user.avatar}</p>
						<p>Nome: {auth.user.name}</p>
						<p>Email: {auth.user.email}</p>
						<p>Privilegios: {auth.user.role}</p> */}

		</>
	)
}