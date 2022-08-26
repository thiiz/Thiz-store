import mongoose from "mongoose";
const baseUrl = process.env.BASE_URL

export const getData = async (url, token) => {
	mongoose.connect(process.env.MONGODB_URL, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
	}, err => {
		if (err) throw err;
		console.log('connected to MongoDB.')
		console.log(process.env.MONGODB_URL)
	})
}
