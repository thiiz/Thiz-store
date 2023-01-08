export const useBackgroundVariant = () => {
	return {
		visible: { backgroundColor: "rgba(0, 0, 0, 0.753)", transition: { delay: 0.3, ease: "backInOut" } },
		hidden: { backgroundColor: "rgba(0, 0, 0, 0)", transition: { duration: 0, delay: 0 } }
	}
}