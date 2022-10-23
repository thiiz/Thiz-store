import { useIsSmall, useIsLarge, useIsMedium } from './MediaQuery'

export function useDesktopSize() {
	const isMedium = useIsMedium()
	const isLarge = useIsLarge()
	const sizes = isMedium ? { // 880px
		small: { height: '3rem', padding: '0 2.5rem' },
		normal: { height: "4.688rem", padding: '0 0.938rem' },

		small_Logo: { width: '2.75rem' },
		normal_Logo: { width: '3.625rem' },

		small_Font: { fontSize: '0.875rem' },
		normal_Font: { fontSize: '1.125rem' },

		small_Menu: { fontSize: '1.313rem' },
		normal_Menu: { fontSize: '1.5rem' },

		small_User: { fontSize: '1.625rem' },
		normal_User: { fontSize: '2rem' },

		small_LoginTxt: { fontSize: '0.688rem' },
		normal_LoginTxt: { fontSize: '0.875rem' },
	} : isLarge ? { // 1024px
		small: { height: '3.125rem', padding: '0 16.25rem' },
		normal: { height: "5rem", padding: '0 11.25rem' },

		small_Logo: { width: '2.875rem' },
		normal_Logo: { width: '4.25rem' },

		small_Font: { fontSize: '1.063rem' },
		normal_Font: { fontSize: '1.313rem' },

		small_Menu: { fontSize: '1.375rem' },
		normal_Menu: { fontSize: '1.625rem' },

		small_User: { fontSize: '1.75rem' },
		normal_User: { fontSize: '2.25rem' },

		small_LoginTxt: { fontSize: '0.688rem' },
		normal_LoginTxt: { fontSize: '0.813rem' },
	} : {
		small_Menu: { fontSize: '1.375rem' },
		normal_Menu: { fontSize: '1.625rem' },

		small: { height: '3.438rem', padding: '0 5rem' },
		normal: { height: "5.125rem", padding: '0 5.2rem' },

		small_Logo: { width: '3.125rem' },
		normal_Logo: { width: '4.25rem' },

		small_Font: { fontSize: '1.125rem' },
		normal_Font: { fontSize: '1.375rem' },
	}
	return sizes
}

export function useMobileSize() {
	const isSmall = useIsSmall()
	const sizes = isSmall ? { // 590px
		small: { height: '3.438rem', padding: '0 0.313rem' },
		normal: { height: "152px", padding: '0 0.313' },

		small_Logo: { width: '2rem', marginTop: '0.625rem' },
		normal_Logo: { width: '3.25rem' },

		small_Font: { fontSize: '1.25rem' },
		normal_Font: { fontSize: '1.5rem' },

		small_User: { fontSize: '0.5rem' },
		normal_User: { fontSize: '0.375rem' },

		open_Menu: { opacity: 1, x: '0px' },
		closed_Menu: { opacity: 0, x: '-500px' },

	} : ''
	return sizes
}