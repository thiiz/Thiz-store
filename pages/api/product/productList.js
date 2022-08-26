export default function handler(req, res) {
	const { method } = req
	switch (method) {
		case 'GET':
			res.status(200).json([
				{ id: 1, title: 'Primeira roupa de crochê', price: '99,90', image: 'https://res.cloudinary.com/dsdjwmqkk/image/upload/v1661472349/product_roupa_croche_azul.webp' },
				{ id: 2, title: 'Segunda roupa de crochê', price: '89,90', image: 'https://res.cloudinary.com/dsdjwmqkk/image/upload/v1661471647/cld-sample-5.jpg' },
				{ id: 4, title: 'Quarta roupa de crochê', price: '79,90', image: '/img/products/product2.jpg' },
				{ id: 5, title: 'Quinta roupa de crochê', price: '79,90', image: 'https://res.cloudinary.com/dsdjwmqkk/image/upload/v1661471647/cld-sample-5.jpg' },
				{ id: 6, title: 'Sexta roupa de crochê', price: '79,90', image: '/img/products/product2.jpg' },
				{ id: 7, title: 'Sétima roupa de crochê', price: '79,90', image: 'https://res.cloudinary.com/dsdjwmqkk/image/upload/v1661471647/cld-sample-5.jpg' },
				{ id: 8, title: 'Oitava roupa de crochê', price: '79,90', image: '/img/products/product2.jpg' },
				{ id: 9, title: 'Nona roupa de crochê', price: '69,90', image: 'https://res.cloudinary.com/dsdjwmqkk/image/upload/v1661471647/cld-sample-5.jpg' },
				{ id: 10, title: 'Décima roupa de crochê', price: '79,90', image: '/img/products/product2.jpg' },
				{ id: 11, title: 'Décima primeira roupa de crochê', price: '79,90', image: 'https://res.cloudinary.com/dsdjwmqkk/image/upload/v1661471647/cld-sample-5.jpg' },
				{ id: 12, title: 'Décima segunda de roupa crochê', price: '79,90', image: '/img/products/product2.jpg' },
				{ id: 13, title: 'Décima terceira de roupa crochê', price: '79,90', image: '/img/products/product2.jpg' },
				{ id: 14, title: 'Décima quarta de roupa crochê', price: '69,90', image: 'https://res.cloudinary.com/dsdjwmqkk/image/upload/v1661471647/cld-sample-5.jpg' },
				{ id: 15, title: 'Décima quinta de roupa crochê', price: '79,90', image: '/img/products/product2.jpg' },
				{ id: 16, title: 'Décima sexta de roupa crochê', price: '79,90', image: '/img/products/product2.jpg' },
				{ id: 17, title: 'Décima sétima roupa de crochê', price: '79,90', image: 'https://res.cloudinary.com/dsdjwmqkk/image/upload/v1661471647/cld-sample-5.jpg' },
				{ id: 18, title: 'Décima oitava roupa de crochê', price: '79,90', image: '/img/products/product2.jpg' },
				{ id: 19, title: 'Décima nona roupa de crochê', price: '79,90', image: '/img/products/product2.jpg' },
			])
			break
		default:
			res.setHeader('Allow', ['GET', 'PUT'])
			res.status(405).end(`Method ${method} Not Allowed`)
	}
}