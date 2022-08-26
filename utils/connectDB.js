import mongoose from "mongoose";

const connectDB = () => {
	if(mongoose.connections[0].readyState){
		console.log('conectado com sucesso')
		return;
	}
	mongoose.connect(process.env.local.MONGODB_URL, {
		useCreateIndex: true,
		useFindAndModify: false,
		useNewUrlParser: true,
		useUnifiedTopology: true,
	}, err => {
		if(err) throw err;
		console.log('connected to MongoDB.')
	})
}