import style from './StarReview.module.css'
import { FaStar } from "react-icons/fa";
import { useState } from 'react';

const colors = {
	orange: "#FFBA5A",
	grey: "#a9a9a9"

};



export default function StarReview() {
	const [currentValue, setCurrentValue] = useState(4);
	const [hoverValue, setHoverValue] = useState(undefined);
	const [reviewQty, setReviewQty] = useState(372);
	const stars = Array(5).fill(0)

	const handleClick = value => {
		setCurrentValue(value)
		setReviewQty(reviewQty => reviewQty + 1)
	}

	const handleMouseOver = newValue => {
		setHoverValue(newValue)
	};

	const handleMouseLeave = () => {
		setHoverValue(undefined)
	}


	return (
		<div className={style.container} style={styles.container}>
			<div style={styles.stars}>
				{stars.map((_, index) => {
					return (
						<FaStar
							key={index}
							size={17}
							onClick={() => handleClick(index + 1)}
							onMouseOver={() => handleMouseOver(index + 1)}
							onMouseLeave={handleMouseLeave}
							color={(hoverValue || currentValue) > index ? colors.orange : colors.grey}
							style={{
								marginRight: 5,
								cursor: "pointer"
							}}
							className={style.iconStar}
						/>
					)
				})}
				<span>({reviewQty})</span>
			</div>
		</div>
	);
};


const styles = {
	container: {
		display: "inline-block",
		flexDirection: "column",
		alignItems: "center"
	},
	stars: {
		display: "flex",
		flexDirection: "row",
	}

};