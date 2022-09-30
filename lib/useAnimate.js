import { useIsSmall, useIsLarge, useIsMedium } from './MediaQuery'

export function useDesktopSize() {
	const isMedium = useIsMedium()
	const isLarge = useIsLarge()
	const sizes = isMedium ? { // 880px
		small: { height: '48px', padding: '0 40px' },
		normal: { height: "75px", padding: '0 15px' },

		small_Logo: { width: '44px' },
		normal_Logo: { width: '58px' },

		small_Font: { fontSize: '14px' },
		normal_Font: { fontSize: '18px' },

		small_Menu: { fontSize: '21px' },
		normal_Menu: { fontSize: '24px' },

		small_User: { fontSize: '26px' },
		normal_User: { fontSize: '32px' },

		small_LoginTxt: { fontSize: '11px' },
		normal_LoginTxt: { fontSize: '14px' },
	} : isLarge ? { // 1509px
		small: { height: '50px', padding: '0 260px' },
		normal: { height: "80px", padding: '0 180px' },

		small_Logo: { width: '46px' },
		normal_Logo: { width: '68px' },

		small_Font: { fontSize: '17px' },
		normal_Font: { fontSize: '21px' },

		small_Menu: { fontSize: '22px' },
		normal_Menu: { fontSize: '26px' },

		small_User: { fontSize: '28px' },
		normal_User: { fontSize: '36px' },

		small_LoginTxt: { fontSize: '11px' },
		normal_LoginTxt: { fontSize: '13px' },
	} : {
		small_Menu: { fontSize: '22px' },
		normal_Menu: { fontSize: '26px' },

		small: { height: '55px', padding: '0 80px' },
		normal: { height: "82px", padding: '0 80px' },

		small_Logo: { width: '50px' },
		normal_Logo: { width: '68px' },

		small_Font: { fontSize: '18px' },
		normal_Font: { fontSize: '22px' },
	}
	return sizes
}

export function useMobileSize() {
	const isSmall = useIsSmall()
	const sizes = isSmall ? { // 590px
		small: { height: '55px', padding: '0 5px' },
		normal: { height: "152px", padding: '0 5px' },

		small_Logo: { width: '32px', marginTop: '10px' },
		normal_Logo: { width: '52px' },

		small_Font: { fontSize: '20px' },
		normal_Font: { fontSize: '24px' },

		small_User: { fontSize: '8px' },
		normal_User: { fontSize: '6px' },

		open_Menu: {opacity: 1, x: '0px'},
		closed_Menu: {opacity: 0, x: '-500px'},
		
	} : ''
	return sizes
}