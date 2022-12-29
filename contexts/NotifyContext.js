import { useContext } from "react";
import { createContext } from "react";
import { Flip, toast } from 'react-toastify'
import { NotifyCart, NotifyLoading, NotifyRegistred, NotifyError, NotifyInfo, NotifySuccess, NotifyInfoCart } from "../components/notify/Notify";
import { useMenuCart } from "..//contexts/OpenCartMenuContext";
import 'react-toastify/dist/ReactToastify.css';



const NotifyContext = createContext()

export default function NotifyProvider({ children }) {
	const { setOpenCart } = useMenuCart()

	const notifySuccess = ({ msg }) => toast.success(<NotifySuccess msg={msg} />, {
		position: "top-center",
		autoClose: 5000,
		hideProgressBar: true,
		closeButton: true,
		pauseOnHover: false,
		draggable: true,
		onClick: () => false,
		toastId: "success"
	}, dismissAll());

	const notifyInfo = ({ msg }) => toast.info(<NotifyInfo msg={msg} />, {
		position: "top-center",
		autoClose: 3500,
		pauseOnHover: true,
		draggable: false,
		onClick: () => false,
	}, dismissAll());

	const notifyError = ({ msg }) => toast.error(<NotifyError msg={msg} />, {
		position: "top-center",
		autoClose: 3500,
		pauseOnHover: true,
		draggable: false,
		onClick: () => false,
	}, dismissAll());
	const notifyRegistred = () => toast.success(<NotifyRegistred />, {
		position: "top-center",
		autoClose: false,
		hideProgressBar: true,
		pauseOnHover: false,
		draggable: true,
		onClick: () => false,
		toastId: "registred"
	}, dismissAll());
	const notifyPromise = () => toast.loading(<NotifyLoading />, {
		position: "top-center",
		hideProgressBar: false,
		pauseOnHover: false,
		draggable: true,
		onClick: () => false,
		toastId: "promise"
	}, dismissAll());
	const notifyPromiseSuccess = ({ msg }) => toast.update("promise", {
		render: msg,
		type: "success",
		isLoading: false,
		position: "top-center",
		closeOnClick: true,
		autoClose: 3500,
		hideProgressBar: true,
		closeButton: true,
		pauseOnHover: false,
		draggable: true,
	});
	const notifyPromiseError = ({ msg }) => toast.update("promise", {
		render: msg,
		type: "error",
		isLoading: false,
		position: "top-center",
		closeOnClick: true,
		autoClose: false,
		hideProgressBar: true,
		closeButton: true,
		pauseOnHover: false,
		draggable: true,
	});
	const notifyPromiseInfo = ({ msg }) => toast.update("promise", {
		render: msg,
		type: "info",
		isLoading: false,
		position: "top-center",
		closeOnClick: true,
		autoClose: false,
		hideProgressBar: true,
		closeButton: true,
		pauseOnHover: false,
		draggable: true,
	});
	const notifyCart = ({ msg }) => toast.success(<NotifyCart msg={msg} />, {
		position: "top-left",
		autoClose: 3500,
		pauseOnHover: true,
		draggable: false,
		onClick: () => setOpenCart(true),
	}, dismissAll());
	const notifyInfoCart = ({ msg }) => toast.info(<NotifyInfoCart msg={msg} />, {
		position: "top-left",
		autoClose: 3500,
		pauseOnHover: true,
		draggable: false,
		onClick: () => setOpenCart(true)
	}, dismissAll());

	const dismiss = ({ id }) => toast.dismiss(id);
	const dismissAll = () => toast.dismiss();

	const state = {
		notifySuccess,
		notifyInfo,
		notifyError,
		notifyRegistred,
		notifyPromise,
		notifyPromiseSuccess,
		notifyPromiseError,
		notifyPromiseInfo,
		notifyCart,
		notifyInfoCart,
		dismiss,
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
		notifyPromise,
		notifyPromiseSuccess,
		notifyPromiseError,
		notifyPromiseInfo,
		notifyCart,
		notifyInfoCart,
		dismiss,
	} = context
	return {
		notifySuccess,
		notifyInfo,
		notifyError,
		notifyRegistred,
		notifyPromise,
		notifyPromiseSuccess,
		notifyPromiseError,
		notifyPromiseInfo,
		notifyCart,
		notifyInfoCart,
		dismiss,
	}
}