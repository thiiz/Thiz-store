import { sign } from 'jsonwebtoken'

export const createAccessToken = (payload) => {
	return sign(payload, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '30m' })
}

export const createRefreshToken = (payload) => {
	return sign(payload, process.env.REFRESH_TOKEN_SECRET, { expiresIn: '7d' })
}