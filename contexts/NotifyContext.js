import { useContext } from "react";
import { createContext } from "react";
import { toast } from 'react-toastify'
import { NotifyCart, NotifyLoading, NotifyError, NotifyInfo, NotifySuccess, NotifyInfoCart } from "../components/notify/Notify";
import { useMenuCart } from "..//contexts/OpenCartMenuContext";
import 'react-toastify/dist/ReactToastify.css';
import { useThemeContext } from './ThemeContext'



const NotifyContext = createContext()

export default function NotifyProvider({ children }) {
	const { setOpenCart } = useMenuCart()
	const { isDarkTheme } = useThemeContext()
	const notifySuccess = ({ msg }) => toast.success(<NotifySuccess msg={msg} />, {
		position: "top-center",
		autoClose: 3500,
		theme: "dark",
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
		theme: `${isDarkTheme ? "dark" : "light"}`,
		hideProgressBar: true,
		pauseOnHover: true,
		draggable: false,
		onClick: () => false,
	}, dismissAll());

	const notifyError = ({ msg }) => toast.error(<NotifyError msg={msg} />, {
		position: "top-center",
		autoClose: 4500,
		theme: `${isDarkTheme ? "dark" : "light"}`,
		hideProgressBar: true,
		pauseOnHover: true,
		draggable: false,
		onClick: () => false,
	}, dismissAll());
	const notifyPromise = () => toast.loading(<NotifyLoading />, {
		position: "top-center",
		theme: `${isDarkTheme ? "dark" : "light"}`,
		hideProgressBar: false,
		pauseOnHover: false,
		onClick: () => false,
		toastId: "promise"
	}, dismissAll());
	const notifyPromiseSuccess = ({ msg }) => toast.update("promise", {
		render: msg,
		type: "success",
		hideProgressBar: true,
		isLoading: false,
		closeOnClick: true,
		autoClose: 3500,
		closeButton: true,
		draggable: true,
	});
	const notifyPromiseError = ({ msg }) => toast.update("promise", {
		render: msg,
		type: "error",
		hideProgressBar: true,
		isLoading: false,
		closeOnClick: true,
		autoClose: 6500,
		closeButton: true,
		draggable: true,
	});
	const notifyPromiseInfo = ({ msg }) => toast.update("promise", {
		render: msg,
		type: "info",
		theme: "dark",
		hideProgressBar: true,
		isLoading: false,
		closeOnClick: true,
		autoClose: 3500,
		closeButton: true,
		draggable: true,
	});
	const notifyCart = ({ msg }) => toast.success(<NotifyCart msg={msg} />, {
		position: "top-left",
		theme: `${isDarkTheme ? "dark" : "light"}`,
		autoClose: 3500,
		pauseOnHover: true,
		draggable: false,
		onClick: () => setOpenCart(true),
	}, dismissAll());
	const notifyInfoCart = ({ msg }) => toast.info(<NotifyInfoCart msg={msg} />, {
		position: "top-left",
		theme: `${isDarkTheme ? "dark" : "light"}`,
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
		notifyPromise,
		notifyPromiseSuccess,
		notifyPromiseError,
		notifyPromiseInfo,
		notifyCart,
		notifyInfoCart,
		dismiss,
	}
}