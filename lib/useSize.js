import { useIsSmall, useIsLarge, useIsMedium } from './MediaQuery'

export function useSize() {
	const isSmall = useIsSmall()
	const isMedium = useIsMedium()
	const isLarge = useIsLarge()

	const sizes = isSmall ? {
		small: { height: '30px', padding: '0 15px' },
		normal: { height: "60px", padding: '0 15px' },

		small_Logo: { width: '50px' },
		normal_Logo: { width: '72px' },

		small_Font: { fontSize: '20px' },
		normal_Font: { fontSize: '24px' },

		small_Menu: { fontSize: '22px' },
		normal_Menu: { fontSize: '26px' },

		small_Button: { fontSize: '20px' },
		normal_Button: { fontSize: '24px' },
	} : isMedium ? {
		small: { height: '45px', padding: '0 40px' },
		normal: { height: "75px", padding: '0 15px' },

		small_Logo: { width: '42px' },
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