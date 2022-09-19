import { useIsSmall, useIsLarge, useIsMedium } from './MediaQuery'

export function useDesktopSize() {
	const isMedium = useIsMedium()
	const isLarge = useIsLarge()
	const sizes = isMedium ? {
		small: { height: '45px', padding: '0 40px' },
		normal: { height: "75px", padding: '0 15px' },

		small_Logo: { width: '32px' },
		normal_Logo: { width: '58px' },

		small_Font: { fontSize: '14px' },
		normal_Font: { fontSize: '18px' },

		small_Menu: { fontSize: '18px' },
		normal_Menu: { fontSize: '24px' },

		small_Button: { fontSize: '13px' },
		normal_Button: { fontSize: '21px' },
	} : isLarge ? {
		small: { height: '50px', padding: '0 40px' },
		normal: { height: "80px", padding: '0 30px' },

		small_Logo: { width: '46px' },
		normal_Logo: { width: '68px' },

		small_Font: { fontSize: '17px' },
		normal_Font: { fontSize: '21px' },

		small_Menu: { fontSize: '22px' },
		normal_Menu: { fontSize: '26px' },

		small_Button: { fontSize: '20px' },
		normal_Button: { fontSize: '24px' },
	} : {
		small: { height: '55px', padding: '0 180px' },
		normal: { height: "82px", padding: '0 80px' },

		small_Logo: { width: '50px' },
		normal_Logo: { width: '72px' },

		small_Font: { fontSize: '18px' },
		normal_Font: { fontSize: '22px' },

		small_Menu: { fontSize: '22px' },
		normal_Menu: { fontSize: '26px' },

		small_Button: { fontSize: '20px' },
		normal_Button: { fontSize: '24px' },
	}
	return sizes
}

export function useMobileSize() {
	const isSmall = useIsSmall()
	const sizes = isSmall ? {
		small: { height: '55px', padding: '0 5px' },
		normal: { height: "170px", padding: '0 5px' },

		small_Logo: { width: '32px', marginTop: '10px' },
		normal_Logo: { width: '52px' },

		small_Font: { fontSize: '20px' },
		normal_Font: { fontSize: '24px' },

		small_Menu: { fontSize: '22px' },
		normal_Menu: { fontSize: '26px' },

		small_Button: { fontSize: '20px' },
		normal_Button: { fontSize: '24px' },

		open_Menu: {y: '0px', opacity: '1'},
		closed_Menu: {y: '-200px', opacity: '0'},
	} : ''
	return sizes
}