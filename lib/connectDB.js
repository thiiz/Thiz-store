import moongose from 'mongoose'

const connectDB = () => {
	if (moongose.connections[0].readyState) {
		console.log('Alrady connected')
		return;
	}
	moongose.connect(process.env.MONGODB_URL, {
		useCreateIndex: true,
		useFindAndModify: false,
		useNewUrlParser: true,
		useUnifiedTopology: true
	}, err => {
		if (err) throw err;
		console.log('Connected to mongodb')
	})
}
export default connectDB