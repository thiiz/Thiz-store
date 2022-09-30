import { useContext } from "react";
import { createContext } from "react";
import { Flip, toast } from 'react-toastify'
import NotifyCart from "../components/notify/NotifyCart";
import NotifyRegistred from "../components/notify/NotifyRegistred";
import NotifyLoading from "../components/notify/NotifyLoading";
import { useMenuCart } from "..//contexts/OpenCartMenuContext";
import 'react-toastify/dist/ReactToastify.css';



const NotifyContext = createContext()

export default function NotifyProvider({ children }) {
	const { setIsOpen } = useMenuCart()

	const notifyCart = () => toast.success(<NotifyCart />, {
		position: "top-right",
		closeOnClick: true,
		autoClose: 3500,
		pauseOnHover: true,
		draggable: false,
		progress: undefined,
		transition: Flip,
		theme: "colored",
		onClick: () => setIsOpen(true),
	});
	const notifyRegistred = () => toast.success(<NotifyRegistred />, {
		position: "top-center",
		closeOnClick: true,
		autoClose: 60000,
		hideProgressBar: true,
		pauseOnHover: true,
		draggable: false,
		progress: undefined,
		transition: Flip,
		theme: "colored",
		onClick: () => false,
	});
	const notifyLoginPromise = () => toast.loading(<NotifyLoading />, {
		position: "top-center",
		closeOnClick: true,
		pauseOnHover: false,
		draggable: true,
		progress: undefined,
		transition: Flip,
		theme: "colored",
		onClick: () => false,
		toastId: 1
	});
	const notifyLoginSuccess = ({ msg }) => toast.update(1, {
		render: msg,
		type: "success",
		isLoading: false,
		position: "top-center",
		autoClose: 5000,
		hideProgressBar: true,
		closeOnClick: true,
		closeButton: true,
		pauseOnHover: false,
		draggable: true,
		progress: undefined,
		transition: Flip,
		theme: "colored",
	});
	const notifyLoginError = ({ msg }) => toast.update(1, {
		render: msg,
		type: "error",
		isLoading: false,
		position: "top-center",
		autoClose: 5000,
		hideProgressBar: true,
		closeOnClick: true,
		closeButton: true,
		pauseOnHover: false,
		draggable: true,
		progress: undefined,
		transition: Flip,
		theme: "colored",
	});

	const state = {
		notifyCart,
		notifyRegistred,
		notifyLoginPromise,
		notifyLoginSuccess,
		notifyLoginError
	}

	return (
		<NotifyContext.Provider value={state}>
			{children}
		</NotifyContext.Provider>
	)
}

export function useNotify() {
	const context = useContext(NotifyContext)
	const {
		notifyCart,
		notifyRegistred,
		notifyLoginPromise,
		notifyLoginSuccess,
		notifyLoginError
	} = context
	return {
		notifyRegistred,
		notifyCart,
		notifyLoginPromise,
		notifyLoginSuccess,
		notifyLoginError
	}
}