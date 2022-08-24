import pic2 from '../../public/img/products/product2.jpg'

export default function handler(req, res) {
	res.status(200).json(
	  {
		"id": 1,
		"pic": 'https://i.ibb.co/Sxyfvbh/product2.jpg',
		"title": "Primeira roupa de crochê",
		"price": '99,90',

		"id": 2,
		"title2": "Segunda roupa de crochê",
		"price2": '79,90'
	  },
	)
  }
  
  