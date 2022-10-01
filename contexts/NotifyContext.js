import { useContext } from "react";
import { createContext } from "react";
import { Flip, toast } from 'react-toastify'
import { NotifyCart, NotifyLoading, NotifyRegistred, NotifyLogout } from "../components/notify/Notify";
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
		autoClose: 60000 * 10,
		hideProgressBar: true,
		pauseOnHover: false,
		draggable: true,
		progress: undefined,
		transition: Flip,
		theme: "colored",
		onClick: () => false,
		toastId: 1
	});
	const notifyLoginPromise = () => toast.loading(<NotifyLoading />, {
		position: "top-center",
		closeOnClick: true,
		hideProgressBar: false,
		pauseOnHover: false,
		draggable: true,
		progress: undefined,
		transition: Flip,
		theme: "colored",
		onClick: () => false,
		toastId: 2
	});
	const notifyLoginSuccess = ({ msg }) => toast.update(2, {
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
	const notifyLoginError = ({ msg }) => toast.update(2, {
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
	const notifyLogout = () => toast.success(<NotifyLogout/>, {
		position: "top-right",
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

	const dismiss = ({ id }) => toast.dismiss(id);

	const state = {
		notifyCart,
		notifyRegistred,
		notifyLoginPromise,
		notifyLoginSuccess,
		notifyLoginError,
		notifyLogout,
		dismiss
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
		notifyLoginError,
		notifyLogout,
		dismiss
	} = context
	return {
		notifyRegistred,
		notifyCart,
		notifyLoginPromise,
		notifyLoginSuccess,
		notifyLoginError,
		notifyLogout,
		dismiss
	}
}