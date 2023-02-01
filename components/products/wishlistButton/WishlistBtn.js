import { useState, useEffect } from "react"
import { BsBookmark, BsBookmarkFill } from "react-icons/bs"
import { useAuth } from "../../../contexts/AuthContext"
import { useToggleLoginModal } from "../../../contexts/LoginModalContext"
import { useNotify } from "../../../contexts/NotifyContext"
import { postData } from "../../../utils/fetchData"
import { WishlistButton } from "./styleWishlistBtn"

export default function WishlistBtn({ productID, productsIdsInWishlist }) {
	const [isAddedMark, setIsAddedMark] = useState(undefined)
	const { auth } = useAuth()
	const { notifyInfo } = useNotify()
	const { setToggleLoginModal } = useToggleLoginModal()

	useEffect(() => {
		if (productsIdsInWishlist.includes(productID)) {
			setIsAddedMark(true)
		} else {
			setIsAddedMark(false)
		}
	}, [productsIdsInWishlist]);

	const addFromWishlist = async () => {
		const res = await postData('wishlist/add', { userEmail: auth.user.email, productID })
		notifyInfo({ msg: res.msg })
	}

	const removeFromWishlist = async () => {
		const res = await postData('wishlist/remove', { userEmail: auth.user.email, productID })
		notifyInfo({ msg: res.msg })

	}

	const handleClick = () => {
		if (auth.token?.length > 0) {
			setIsAddedMark(prev => !prev)
			if (isAddedMark) {
				return removeFromWishlist()

			} else if (!isAddedMark) {
				return addFromWishlist()
			}
		} else {
			notifyInfo({ msg: "Faça login para adicionar produtos a sua lista de desejos" })
			setToggleLoginModal(true)
			return
		}
	}
	return (
		<WishlistButton onClick={handleClick}>
			{isAddedMark ? <BsBookmarkFill /> : <BsBookmark />}
		</WishlistButton>
	)
}