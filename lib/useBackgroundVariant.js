export const useBackgroundVariant = () => {
	return {
		visible: { transition: { delay: 0.5 }, backgroundColor: "#000000c0" },
		hidden: { backgroundColor: "#00000000" }
	}
}