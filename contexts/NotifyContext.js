import { useContext } from "react";
import { createContext } from "react";
import { Flip, toast } from 'react-toastify'
import { NotifyCart, NotifyLoading, NotifyRegistred, NotifyError, NotifyInfo, NotifySuccess, NotifyInfoCart } from "../components/notify/Notify";
import { useMenuCart } from "..//contexts/OpenCartMenuContext";
import 'react-toastify/dist/ReactToastify.css';



const NotifyContext = createContext()

export default function NotifyProvider({ children }) {
	const { setIsOpen } = useMenuCart()

	const notifySuccess = ({ msg }) => toast.success(<NotifySuccess msg={msg} />, {
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

	const notifyInfo = ({ msg }) => toast.info(<NotifyInfo msg={msg} />, {
		position: "top-center",
		closeOnClick: true,
		autoClose: 3500,
		pauseOnHover: true,
		draggable: false,
		progress: undefined,
		transition: Flip,
		theme: "colored",
		onClick: () => false,
	});

	const notifyError = ({ msg }) => toast.error(<NotifyError msg={msg} />, {
		position: "top-center",
		closeOnClick: true,
		autoClose: 3500,
		pauseOnHover: true,
		draggable: false,
		progress: undefined,
		transition: Flip,
		theme: "colored",
		onClick: () => false,
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
	const notifyCart = ({ msg }) => toast.success(<NotifyCart msg={msg} />, {
		position: "top-center",
		closeOnClick: true,
		autoClose: 3500,
		pauseOnHover: true,
		draggable: false,
		progress: undefined,
		transition: Flip,
		theme: "colored",
		onClick: () => setIsOpen(true),
	});
	const notifyInfoCart = ({ msg }) => toast.info(<NotifyInfoCart msg={msg} />, {
		position: "top-center",
		closeOnClick: true,
		autoClose: 3500,
		pauseOnHover: true,
		draggable: false,
		progress: undefined,
		transition: Flip,
		theme: "colored",
		onClick: () => setIsOpen(true),
	});

	const dismiss = ({ id }) => toast.dismiss(id);

	const state = {
		notifySuccess,
		notifyInfo,
		notifyError,
		notifyRegistred,
		notifyLoginPromise,
		notifyLoginSuccess,
		notifyLoginError,
		notifyCart,
		notifyInfoCart,
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
		notifySuccess,
		notifyInfo,
		notifyError,
		notifyRegistred,
		notifyLoginPromise,
		notifyLoginSuccess,
		notifyLoginError,
		notifyCart,
		notifyInfoCart,
		dismiss
	} = context
	return {
		notifySuccess,
		notifyInfo,
		notifyError,
		notifyRegistred,
		notifyLoginPromise,
		notifyLoginSuccess,
		notifyLoginError,
		notifyCart,
		notifyInfoCart,
		dismiss
	}
}